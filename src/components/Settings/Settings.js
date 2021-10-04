// Dependencies
import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router";
import CenterSpinner from "../UI/CenterSpinner/CenterSpinner";

// Components
import TabsSelection from "./TabsSelection/TabsSelection";
import { Divider, Grid, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";
import TabPanels from "./TabPanels/TabPanels";

const Settings = ({ mobile }) => {
	const { isLoggedIn } = useSelector(state => state.auth, shallowEqual);
	const { setting } = useParams();
	const [currentTab, setCurrentTab] = useState(setting);
	const classes = useStyles();

	const tabChangeHandler = (event, newTab) => {
		setCurrentTab(newTab);
	};

	const settingsContent = isLoggedIn ? (
		<Grid container className={classes.settingsContainer} direction="column">
			{!mobile && (
				<Grid item className={classes.titleContainer}>
					<Typography className={classes.settingsTitle} color="primary">
						Settings
					</Typography>
					<Divider />
				</Grid>
			)}
			<Grid container className={classes.tabsContainer} direction={mobile ? "column" : "row"}>
				<TabsSelection onChangeTab={tabChangeHandler} currentTab={currentTab} />
				<TabPanels currentTab={currentTab} mobile={mobile} />
			</Grid>
		</Grid>
	) : (
		<CenterSpinner open={true} />
	);

	return settingsContent;
};

export default Settings;
