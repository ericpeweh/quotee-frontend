// Dependencies
import React from "react";
import moment from "moment";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { fetchNotifications } from "../../../../actions/users";

// Components
import TopBar from "../../../UI/TopBar/TopBar";
import NotificationItem from "../../../SideBar/Notification/NotificationItem/NotificationItem";
import { Dialog, Divider, DialogContent, Slide, Button, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Transition
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="left" ref={ref} {...props} />;
});

const NotificationModal = ({ isOpen, onClose }) => {
	const { notifications, hasMore, isLoading } = useSelector(
		state => state.notifications,
		shallowEqual
	);
	const dispatch = useDispatch();
	const classes = useStyles();

	const loadMoreNotificationsHandler = () => {
		if (hasMore) {
			dispatch(fetchNotifications(notifications.length));
		}
	};

	return (
		<Dialog open={isOpen} onClose={onClose} TransitionComponent={Transition} fullScreen>
			<TopBar title="News & Notifications" modal onClose={onClose} />
			<Divider />
			<DialogContent className={classes.dialogContent}>
				{notifications.length === 0 && !isLoading && (
					<Typography variant="body2" align="center" className={classes.notificationText}>
						Notifications is empty.
					</Typography>
				)}
				{notifications.map((notification, index) => (
					<NotificationItem
						key={index}
						date={moment(notification.createdAt).fromNow()}
						notificationAvatar={notification.profilePicture}
						name={notification.name}
						description={notification.description}
						url={notification.url}
						announcer={notification.announcer}
					/>
				))}
				{hasMore && (
					<Button
						size="small"
						className={classes.loadMoreButton}
						onClick={loadMoreNotificationsHandler}
					>
						Load more
					</Button>
				)}
			</DialogContent>
		</Dialog>
	);
};

export default NotificationModal;
