// Dependencies
import moment from "moment";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { fetchNotifications } from "../../../actions/users";

// Components
import NotificationItem from "./NotificationItem/NotificationItem";
import { Drawer, Divider, Typography, Button, CircularProgress } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const Notification = ({ isOpen, onNotificationClick }) => {
	const { notifications, hasMore, status } = useSelector(
		state => state.notifications,
		shallowEqual
	);
	const dispatch = useDispatch();
	const classes = useStyles();

	const isLoading = status === "loading";

	const loadMoreHandler = () => {
		dispatch(fetchNotifications(notifications.length));
	};

	return (
		<Drawer
			anchor="right"
			open={isOpen}
			onClose={() => onNotificationClick(false)}
			classes={{ paper: classes.notificationDrawer }}
		>
			<Typography variant="h6" className={classes.drawerTitle} color="secondary">
				Notifications and News
				<Divider />
			</Typography>
			{notifications.length === 0 && !isLoading && (
				<Typography variant="body2" align="center" className={classes.notificationText}>
					Notifications is empty.
				</Typography>
			)}
			{isLoading && <CircularProgress className={classes.spinner} />}
			{notifications &&
				!isLoading &&
				notifications.map((notification, index) => (
					<NotificationItem
						key={index}
						date={moment(notification.createdAt).fromNow()}
						notificationAvatar={notification.profilePicture}
						name={`${notification.name},`}
						description={notification.description}
						url={notification.url}
						announcer={notification.announcer}
					/>
				))}
			{hasMore && (
				<Button
					size="small"
					color="secondary"
					className={classes.loadMoreButton}
					onClick={loadMoreHandler}
				>
					Load more
				</Button>
			)}
		</Drawer>
	);
};

export default Notification;
