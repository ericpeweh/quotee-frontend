// Dependencies
import React from "react";
import { useState, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import MediaQuery from "react-responsive";
import { auth } from "./actions/auth";
import { promptChange, installableChange, installedChange } from "./store/slices/pwaSlice";
import { subscribeNotifications } from "./actions/pwa";
import { fetchTempPosts } from "./actions/posts";

// Utils
import { toggleFullScreen } from "./utils/toggleFullscreen";
import { urlB64ToUint8Array } from "./utils/urlB64ToUint8Array";

// Components
import NavBar from "./components/NavBar/NavBar";
import MainContent from "./components/MainContent/MainContent";
import SideBar from "./components/SideBar/SideBar";
import MobileBottomBar from "./components/Mobile/MobileBottombar/MobileBottomBar";
import MobileTopBar from "./components/Mobile/MobileTopBar/MobileTopBar";
import MobileContent from "./components/Mobile/MobileContent/MobileContent";
import UserProfile from "./components/UserProfile/UserProfile";
import MobileUserProfile from "./components/Mobile/MobileUserProfile/MobileUserProfile";
import Social from "./components/Social/Social";
import Article from "./components/Article/Article";
import MobileSocial from "./components/Mobile/MobileSocial/MobileSocial";
import UserFavorites from "./components/UserFavorites/UserFavorites";
import MobileUserFavorites from "./components/Mobile/MobileUserFavorites/MobileUserFavorites";
import Settings from "./components/Settings/Settings";
import Create from "./components/Create/Create";
import EditPost from "./components/EditPost/EditPost";
import MobileCreateTopBar from "./components/Mobile/MobileCreateTopBar/MobileCreateTopBar";
import Archived from "./components/Archived/Archived";
import MobileSettingsTopBar from "./components/Mobile/MobileSettingsTopBar/MobileSettingsTopBar";
import MobileArchivedTopBar from "./components/Mobile/MobileArchivedTopBar/MobileArchivedTopBar";
import Draft from "./components/Draft/Draft";
import Search from "./components/Search/Search";
import TopBar from "./components/UI/TopBar/TopBar";
import SharePost from "./components/SharePost/SharePost";
import ShareToSocial from "./components/MainContent/QuoteCards/QuoteCard/ShareToSocial/ShareToSocial";
import PostDetails from "./components/PostDetails/PostDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import EmailVerification from "./components/EmailVerification/EmailVerification";
import CenterSpinner from "./components/UI/CenterSpinner/CenterSpinner";
import BottomSnackbar from "./components/UI/BottomSnackbar/BottomSnackbar";
import CenterModalSearch from "./components/UI/CenterModalSearch/CenterModalSearch";
import ConfirmationModal from "./components/UI/ConfirmationModal/ConfirmationModal";
import ReportModal from "./components/UI/ReportModal/ReportModal";
import UserReportModal from "./components/UI/UserReportModal/UserReportModal";
import { ThemeProvider } from "@material-ui/styles";
import ResetPassword from "./components/ResetPassword/ResetPassword";

// Styles
import "./App.css";
import { lightTheme, darkTheme } from "./theme";

const PUBLIC_KEY =
	"BCd_WCedDhwPkqLgSsO3UyYFBf4HzrtOXRKz3OxRt4rUDo3YFTNFRwfO2BE1-f2Y41nFQwsP2QAGNzVE1BICl2M";

const App = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);
	const { isLoggedIn, isLoading, status } = useSelector(state => state.auth, shallowEqual);
	const { theme } = useSelector(state => state.theme, shallowEqual);
	const { pushNotifications, subscribeStatus } = useSelector(state => state.pwa, shallowEqual);
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();

	const userTheme = theme === "dark" ? darkTheme : lightTheme;

	const setFullScreen = () => {
		setIsFullScreen(prevFullScreen => !prevFullScreen);
		toggleFullScreen();
	};

	// PWA Prompt (later for install button)
	useEffect(() => {
		const handler = e => {
			e.preventDefault();
			dispatch(promptChange(e));
		};
		window.addEventListener("beforeinstallprompt", handler);

		return () => window.removeEventListener("transitionend", handler);
	}, [dispatch]);

	// Detect app is installed or not & detect service worker availability
	useEffect(() => {
		if ("serviceWorker" in navigator) {
			dispatch(installableChange(true));
		}

		window.addEventListener("appinstalled", async e => {
			dispatch(installedChange(true));
		});

		if (
			navigator.standalone ||
			window.matchMedia("(display-mode: standalone)").matches ||
			window.matchMedia("(display-mode: fullscreen)").matches ||
			window.matchMedia("(display-mode: minimal-ui)").matches
		) {
			dispatch(installedChange(true));
		}

		window.matchMedia("(display-mode: standalone)").addListener(function (e) {
			if (e.matches) {
				dispatch(installedChange(true));
			}
		});
		window.matchMedia("(display-mode: fullscreen)").addListener(function (e) {
			if (e.matches) {
				dispatch(installedChange(true));
			}
		});
		window.matchMedia("(display-mode: minimal-ui)").addListener(function (e) {
			if (e.matches) {
				dispatch(installedChange(true));
			}
		});
	}, [dispatch]);

	useEffect(() => {
		const sw = async () => {
			isLoggedIn &&
				navigator.serviceWorker.ready.then(reg => {
					if ("PushManager" in window) {
						return reg.pushManager.getSubscription().then(subscription => {
							if (pushNotifications && subscribeStatus === "idle") {
								return reg.pushManager
									.subscribe({
										userVisibleOnly: true,
										applicationServerKey: urlB64ToUint8Array(PUBLIC_KEY)
									})
									.then(subscription => dispatch(subscribeNotifications(subscription)));
							}
						});
					}
				});
		};
		sw();
	}, [isLoggedIn, pushNotifications, dispatch, subscribeStatus]);

	useEffect(() => {
		if (!isLoggedIn && isLoading && status === "idle") {
			dispatch(auth());
		}
	}, [dispatch, isLoggedIn, isLoading, status]);

	useEffect(() => {
		if (!isLoggedIn && !isLoading && status !== "idle") {
			setTimeout(() => {
				if (
					location.pathname === "/register" ||
					location.pathname === "/login" ||
					location.pathname.includes("/verifyEmail") ||
					location.pathname.includes("/verifyResetPassword")
				) {
					return;
				} else {
					history.push("/login");
				}
			}, 1000);
		}
	}, [dispatch, history, isLoggedIn, isLoading, status, location]);

	// FETCH NEW POSTS EVERY 5 MINUTES
	useEffect(() => {
		const fetchPosts = setInterval(() => dispatch(fetchTempPosts()), 60000 * 5);

		return () => clearInterval(fetchPosts);
	}, [dispatch]);

	return (
		<ThemeProvider theme={userTheme}>
			<CenterSpinner open={isLoading} />
			<BottomSnackbar />
			<ConfirmationModal />
			<ReportModal />
			<UserReportModal />
			<MediaQuery minWidth={600}>
				{isLoggedIn && location.pathname !== "/login" && location.pathname !== "/register" && (
					<NavBar />
				)}
				{isLoggedIn && <ShareToSocial />}
				<CenterModalSearch />
			</MediaQuery>
			<MediaQuery maxWidth={599}>
				{isLoggedIn && <MobileBottomBar />}
				{isLoggedIn && <ShareToSocial />}
				<CenterModalSearch mobile />
			</MediaQuery>
			<Switch>
				<Route exact path="/">
					<CenterSpinner open={status !== "succeeded"} />
					{status === "succeeded" && isLoggedIn && (
						<>
							<MediaQuery minWidth={600}>
								<MainContent />
								<SideBar onFullScreen={setFullScreen} isFullScreen={isFullScreen} />
							</MediaQuery>
							<MediaQuery maxWidth={599}>
								<MobileTopBar />
								<MobileContent />
							</MediaQuery>
						</>
					)}
				</Route>
				<Route exact path="/login">
					{isLoggedIn && !isLoading && status === "succeeded" ? (
						<Redirect to="/" />
					) : (
						<>
							<MediaQuery minWidth={600}>
								<Login />
							</MediaQuery>
							<MediaQuery maxWidth={599}>
								<Login mobile />
							</MediaQuery>
						</>
					)}
				</Route>
				<Route exact path="/register">
					{isLoggedIn && !isLoading && status === "succeeded" ? (
						<Redirect to="/" />
					) : (
						<>
							<MediaQuery minWidth={600}>
								<Register />
							</MediaQuery>
							<MediaQuery maxWidth={599}>
								<Register mobile />
							</MediaQuery>
						</>
					)}
				</Route>
				<Route exact path="/verifyEmail/:token">
					{isLoggedIn && !isLoading && status === "succeeded" ? (
						<Redirect to="/" />
					) : (
						<>
							<MediaQuery minWidth={600}>
								<EmailVerification />
							</MediaQuery>
							<MediaQuery maxWidth={599}>
								<EmailVerification />
							</MediaQuery>
						</>
					)}
				</Route>
				<Route exact path="/verifyResetPassword/:token">
					{isLoggedIn && !isLoading && status === "succeeded" ? (
						<Redirect to="/" />
					) : (
						<>
							<MediaQuery minWidth={600}>
								<ResetPassword />
							</MediaQuery>
							<MediaQuery maxWidth={599}>
								<ResetPassword mobile />
							</MediaQuery>
						</>
					)}
				</Route>
				<Route exact path="/p/search">
					<MediaQuery minWidth={600}>
						<Search />
					</MediaQuery>
					<MediaQuery maxWidth={599}>
						<Search mobile />
					</MediaQuery>
				</Route>
				<Route exact path="/create">
					<MediaQuery minWidth={600}>
						<Create />
					</MediaQuery>
					<MediaQuery maxWidth={599}>
						<MobileCreateTopBar />
						<Create mobile />
					</MediaQuery>
				</Route>
				<Route exact path="/draft">
					<MediaQuery minWidth={600}>
						<Draft />
					</MediaQuery>
					<MediaQuery maxWidth={599}>
						<TopBar title="Drafts" />
						<Draft mobile />
					</MediaQuery>
				</Route>
				<Route exact path="/social">
					<MediaQuery minWidth={600}>
						<Social />
					</MediaQuery>
					<MediaQuery maxWidth={599}>
						<MobileSocial />
					</MediaQuery>
				</Route>
				<Route exact path="/articles/:articleId">
					<MediaQuery minWidth={600}>
						<Article />
					</MediaQuery>
					<MediaQuery maxWidth={599}>
						<Article mobile />
					</MediaQuery>
				</Route>
				<Route exact path="/favorites">
					<MediaQuery minWidth={600}>
						<UserFavorites />
					</MediaQuery>
					<MediaQuery maxWidth={599}>
						<MobileUserFavorites />
					</MediaQuery>
				</Route>
				<Route exact path="/archived">
					<MediaQuery minWidth={600}>
						<Archived />
					</MediaQuery>
					<MediaQuery maxWidth={599}>
						<MobileArchivedTopBar />
						<Archived mobile />
					</MediaQuery>
				</Route>
				<Route exact path="/settings/:setting">
					<MediaQuery minWidth={600}>
						<Settings />
					</MediaQuery>
					<MediaQuery maxWidth={599}>
						<MobileSettingsTopBar />
						<Settings mobile />
					</MediaQuery>
				</Route>
				<Route path="/:username/p/:postId/share" exact>
					<MediaQuery minWidth={600}>
						<SharePost />
					</MediaQuery>
					<MediaQuery maxWidth={599}>
						<TopBar title="Share Post" />
						<SharePost mobile />
					</MediaQuery>
				</Route>
				<Route path="/:username/p/:postId/edit" exact>
					<MediaQuery minWidth={600}>
						<EditPost />
					</MediaQuery>
					<MediaQuery maxWidth={599}>
						<TopBar title="Edit Post" />
						<EditPost />
					</MediaQuery>
				</Route>
				<Route path="/:username/p/:postId" exact>
					<MediaQuery minWidth={600}>
						<PostDetails />
					</MediaQuery>
					<MediaQuery maxWidth={599}>
						<TopBar title="Quotes" />
						<PostDetails mobile />
					</MediaQuery>
				</Route>

				<Route path="/:username">
					<MediaQuery minWidth={600}>
						<UserProfile />
					</MediaQuery>
					<MediaQuery maxWidth={599}>
						<MobileUserProfile />
					</MediaQuery>
				</Route>
			</Switch>
		</ThemeProvider>
	);
};

export default App;
