// Dependencies
import { useHistory } from "react-router";

// Components
import {
	List,
	ListItem,
	ListSubheader,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Typography
} from "@material-ui/core";

// Styles
import useStyles from "./styles";

const NotificationItem = ({ date, notificationAvatar, name, description, url, announcer }) => {
	const history = useHistory();
	const classes = useStyles();

	const clickHandler = () => {
		history.push(url.replace("https://www.quoteequotes.xyz/", ""));
	};

	return (
		<List
			subheader={
				<ListSubheader className={classes.listSubHeader} component="div" disableSticky>
					{date}
				</ListSubheader>
			}
		>
			<ListItem button className={classes.listItem} onClick={clickHandler}>
				<ListItemAvatar>
					<Avatar alt="profile avatar" src={notificationAvatar} />
				</ListItemAvatar>
				<ListItemText
					primary={announcer}
					secondary={
						<>
							<Typography
								component="span"
								variant="body2"
								className={classes.inline}
								color="textPrimary"
							>
								{name}
							</Typography>
							{description}
						</>
					}
					className={classes.listItemText}
					classes={{ primary: classes.listItemPrimary }}
				/>
			</ListItem>
		</List>
	);
};

export default NotificationItem;
