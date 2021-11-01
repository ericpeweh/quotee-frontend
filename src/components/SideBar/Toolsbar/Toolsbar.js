// Dependencies
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../../../actions/users";

// Components
import { Grid, Tooltip, IconButton, Badge } from "@material-ui/core";

// Icons
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";

// Styles
import useStyles from "./styles";

const Toolsbar = ({ onFullScreen, onNotificationClick }) => {
	const { notifications, status } = useSelector(state => state.notifications, shallowEqual);
	const { unreadNotifications } = useSelector(state => state.auth, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "auto" });
	};

	const notificationClickHandler = () => {
		if (status !== "succeeded") {
			dispatch(fetchNotifications(notifications.length));
		}
		onNotificationClick(true);
	};

	return (
		<Grid
			item
			container
			justifyContent="center"
			spacing={1}
			className={classes.toolsContainer}
			alignItems="flex-end"
		>
			<Grid
				container
				justifyContent="space-evenly"
				alignItems="center"
				className={classes.buttonContainer}
			>
				<Grid item>
					<Tooltip title="New Post">
						<IconButton component={Link} to="/create">
							<AddBoxOutlinedIcon />
						</IconButton>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title="Notifications">
						<IconButton onClick={notificationClickHandler}>
							{unreadNotifications ? (
								<Badge badgeContent={unreadNotifications} color="primary">
									<NotificationsNoneOutlinedIcon />
								</Badge>
							) : (
								<NotificationsNoneOutlinedIcon />
							)}
						</IconButton>
					</Tooltip>
				</Grid>
				<Grid item>
					<Tooltip title="Draft" component={Link} to="/draft" onClick={scrollToTop}>
						<IconButton>
							<DraftsOutlinedIcon />
						</IconButton>
					</Tooltip>
				</Grid>
				<Grid item onClick={onFullScreen}>
					<Tooltip title="Fullscreen">
						<IconButton>
							<FullscreenIcon />
						</IconButton>
					</Tooltip>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Toolsbar;
