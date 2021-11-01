// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSettings } from "../../../actions/users";

// Components
import AccountTab from "./AccountTab/AccountTab";
import SecurityTab from "./SecurityTab/SecurityTab";
import PreferencesTab from "./PreferencesTab/PreferencesTab";
import HelpTab from "./HelpTab/HelpTab";
import { Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const TabPanels = ({ currentTab, mobile }) => {
	const username = useSelector(state => state.auth.username);
	const status = useSelector(state => state.settings.status);
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		if (username && status !== "succeeded") {
			dispatch(fetchSettings(username));
		}
	}, [dispatch, username, status]);

	return (
		<Grid item container xs={12} md={10} className={classes.tabsContainer}>
			<AccountTab currentTab={currentTab} mobile={mobile} />
			<SecurityTab currentTab={currentTab} />
			<PreferencesTab currentTab={currentTab} />
			<HelpTab currentTab={currentTab} />
		</Grid>
	);
};

export default TabPanels;
