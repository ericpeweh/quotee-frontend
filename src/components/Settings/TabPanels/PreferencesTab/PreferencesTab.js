// Dependencies
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { darkTheme, lightTheme } from "../../../../store/slices/themeSlice";
import { pushNotificationsChange, pushManagerChange } from "../../../../store/slices/pwaSlice";
import { urlB64ToUint8Array } from "../../../../utils/urlB64ToUint8Array";
import { subscribeNotifications, unsubscribeNotifications } from "../../../../actions/pwa";

// Components
import SettingsTitle from "../SettingsTitle/SettingsTitle";
import Togglers from "./Togglers/Togglers";
import { Grid, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const PUBLIC_KEY =
	"BCd_WCedDhwPkqLgSsO3UyYFBf4HzrtOXRKz3OxRt4rUDo3YFTNFRwfO2BE1-f2Y41nFQwsP2QAGNzVE1BICl2M";

const PreferencesTab = ({ currentTab }) => {
	const { theme } = useSelector(state => state.theme, shallowEqual);
	const { pushNotifications, pushManager } = useSelector(state => state.pwa, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const isDarkTheme = theme === "dark";

	useEffect(() => {
		navigator.serviceWorker.ready.then(reg => {
			if (reg.pushManager) dispatch(pushManagerChange(reg.pushManager));

			pushNotifications &&
				reg.pushManager.getSubscription().then(subscription => {
					if (subscription) dispatch(pushNotificationsChange(true));
				});
		});
	}, [dispatch, pushNotifications]);

	const newsNotificationHandler = async () => {
		// Toggle
		if (pushNotifications) {
			dispatch(pushNotificationsChange(false));
			pushManager.getSubscription().then(subscription => {
				subscription?.unsubscribe().then(dispatch(unsubscribeNotifications()));
			});
		} else {
			dispatch(pushNotificationsChange(true));
			pushManager.getSubscription().then(subscription => {
				pushManager
					.subscribe({
						userVisibleOnly: true,
						applicationServerKey: urlB64ToUint8Array(PUBLIC_KEY)
					})
					.then(subscription => dispatch(subscribeNotifications(subscription)));
			});
		}
	};

	const tabContent =
		currentTab === "preferences" ? (
			<Grid item container className={classes.preferencesTab} direction="column">
				<SettingsTitle text="Preferences" />
				<Togglers
					title="News & Notifications"
					subtitle="Stay updated with our newest announcements!"
					onChange={newsNotificationHandler}
					checked={pushNotifications}
				/>
				<Typography variant="body2" className={classes.note}>
					*Note: please allow push notification.
				</Typography>
				<Togglers
					title="Dark Mode"
					subtitle="Switch between dark mode and light mode!"
					onChange={() => (isDarkTheme ? dispatch(lightTheme()) : dispatch(darkTheme()))}
					checked={isDarkTheme}
				/>
			</Grid>
		) : (
			<></>
		);

	return { ...tabContent };
};

export default PreferencesTab;
