// Dependencies
import { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchNotifications } from "../../../actions/users";

// Components
import { Link } from "react-router-dom";
import { Grid, IconButton, Badge } from "@material-ui/core";

// Icons
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

// Images
import Logo from "../../../images/logo.webp";

// Styles
import useStyles from "./styles";
import NotificationModal from "./NotificationModal/NotificationModal";

const MobileTopBar = () => {
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);
	const { status, notifications } = useSelector(state => state.notifications, shallowEqual);
	const { unreadNotifications } = useSelector(state => state.auth, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const notificationOpenHandler = () => {
		if (status !== "succeeded") {
			dispatch(fetchNotifications(notifications.length));
		}
		setIsNotificationOpen(true);
	};

	const notificationCloseHandler = () => {
		setIsNotificationOpen(false);
	};

	return (
		<Grid
			container
			className={classes.mobileTopNavbar}
			direction="row"
			alignItems="center"
			justifyContent="space-between"
		>
			<Grid item xs={8}>
				<Link to="/">
					<img src={Logo} alt="Quotee Logo" className={classes.logo} height="24" />
				</Link>
			</Grid>
			<Grid item container justifyContent="flex-end" xs={4} alignItems="center" spacing={1}>
				<Grid item>
					<IconButton size="small" component={Link} to="/create">
						<AddBoxOutlinedIcon />
					</IconButton>
				</Grid>
				<Grid item>
					<IconButton size="small" onClick={notificationOpenHandler}>
						{unreadNotifications ? (
							<Badge variant="dot" overlap="circular" badgeContent="" color="primary">
								<NotificationsNoneOutlinedIcon />
							</Badge>
						) : (
							<NotificationsNoneOutlinedIcon />
						)}
					</IconButton>
				</Grid>
			</Grid>
			<NotificationModal isOpen={isNotificationOpen} onClose={notificationCloseHandler} />
		</Grid>
	);
};

export default MobileTopBar;
