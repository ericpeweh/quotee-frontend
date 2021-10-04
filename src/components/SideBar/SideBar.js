// Dependencies
import { useState } from "react";

// Components
import Banner from "./Banner/Banner";
import Suggestion from "./Suggestion/Suggestion";
import Toolsbar from "./Toolsbar/Toolsbar";
import Notification from "./Notification/Notification";
import { Grid, Divider, Paper } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const SideBar = ({ onFullScreen }) => {
	const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
	const classes = useStyles();

	return (
		<Grid component={Paper} className={classes.container} container direction="column" id="sidebar">
			<Notification isOpen={isNotificationsOpen} onNotificationClick={setIsNotificationsOpen} />
			<Banner />
			<Suggestion />
			<Divider light variant="middle" />
			<Toolsbar onFullScreen={onFullScreen} onNotificationClick={setIsNotificationsOpen} />
		</Grid>
	);
};

export default SideBar;
