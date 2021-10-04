// Dependencies
import { useEffect } from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
	fetchUserProfile,
	searchPopulatedFollowers,
	searchPopulatedFollowing
} from "../../../actions/users";
import { followerAndFollowingQueryChange } from "../../../store/slices/userProfileSlice";

// Components
import MobileUserTopBar from "./MobileUserTopBar/MobileUserTopBar";
import MobileUserDetails from "./MobileUserDetails/MobileUserDetails";
import MobilePage from "../../UI/MobilePage/MobilePage";
import QRCodeElement from "../../UI/QRCodeElement/QRCodeElement";
import QRScanner from "./QRScanner/QRScanner";
import TopBar from "../../UI/TopBar/TopBar";
import { Grid } from "@material-ui/core";

const MobileUserProfile = () => {
	const {
		populatedFollowing,
		populatedFollowers,
		populateFollowersStatus,
		populateFollowingStatus,
		followerAndFollowingQuery,
		status
	} = useSelector(state => state.userProfile, shallowEqual);
	const { status: authStatus } = useSelector(state => state.auth, shallowEqual);
	const dispatch = useDispatch();
	const { username } = useParams();
	const { path } = useRouteMatch();

	useEffect(() => {
		if (authStatus === "succeeded" && status !== "succeeded") {
			dispatch(fetchUserProfile(username));
		}
	}, [dispatch, username, authStatus, status]);

	const followersSearchHandler = searchQuery => {
		dispatch(searchPopulatedFollowers({ username, usernameQuery: searchQuery }));
	};

	const followingSearchHandler = searchQuery => {
		dispatch(searchPopulatedFollowing({ username, usernameQuery: searchQuery }));
	};

	const queryChangeHandler = newQuery => {
		dispatch(followerAndFollowingQueryChange(newQuery));
	};

	return (
		<Switch>
			<Route exact path={path}>
				<Grid container>
					<MobileUserTopBar />
					<MobileUserDetails />
				</Grid>
			</Route>
			<Route path={`${path}/following`} exact>
				<MobilePage
					title="Following"
					users={populatedFollowing}
					status={populateFollowingStatus}
					searchQuery={followerAndFollowingQuery}
					onChangeQuery={queryChangeHandler}
					onSearch={followingSearchHandler}
				/>
			</Route>
			<Route path={`${path}/followers`} exact>
				<MobilePage
					title="Followers"
					users={populatedFollowers}
					status={populateFollowersStatus}
					searchQuery={followerAndFollowingQuery}
					onChangeQuery={queryChangeHandler}
					onSearch={followersSearchHandler}
				/>
			</Route>
			<Route path={`${path}/qrcode`} exact>
				<QRCodeElement />
			</Route>
			<Route path={`${path}/qrscan`} exact>
				<TopBar title="Scan QR Code" />
				<QRScanner />
			</Route>
		</Switch>
	);
};

export default MobileUserProfile;
