// Components
import {
	SwipeableDrawer,
	Divider,
	Typography,
	List,
	ListItem,
	ListItemText
} from "@material-ui/core";

// Styles
import useStyles from "./styles";

const BottomDrawer = ({ open, onOpen, onClose, listActions }) => {
	const classes = useStyles();

	return (
		<SwipeableDrawer
			anchor="bottom"
			open={open}
			onClose={onClose}
			onOpen={onOpen}
			disableSwipeToOpen
			disableBackdropTransition={false}
			disableDiscovery={false}
		>
			<Divider className={classes.divider} />
			<Typography align="center" variant="body1" className={classes.drawerTitle}>
				Actions
			</Typography>
			<List>
				{listActions.map(list => (
					<ListItem button onClick={list.action} key={list.text}>
						<ListItemText primary={list.text} className={classes[list.color]} />
					</ListItem>
				))}
			</List>
		</SwipeableDrawer>
	);
};

export default BottomDrawer;
