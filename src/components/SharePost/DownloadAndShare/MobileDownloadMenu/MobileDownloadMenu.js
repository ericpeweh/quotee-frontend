// Components
import {
	SwipeableDrawer,
	Divider,
	List,
	ListItem,
	ListItemText,
	Typography
} from "@material-ui/core";

// Styles
import useStyles from "./styles";

const MobileDownloadMenu = ({ open, onClose, onDownload, onOpen }) => {
	const classes = useStyles();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	return (
		<SwipeableDrawer
			anchor="bottom"
			open={open}
			onClose={onClose}
			onOpen={onOpen}
			disableBackdropTransition={!iOS}
			disableDiscovery={iOS}
		>
			<Divider className={classes.divider} />
			<Typography align="center" variant="body1" className={classes.downloadQualityText}>
				Download Quality
			</Typography>
			<List>
				<ListItem button onClick={() => onDownload(2)}>
					<ListItemText primary="Small (600x800)" />
				</ListItem>
				<ListItem button onClick={() => onDownload(3)}>
					<ListItemText primary="Medium (900x1200)" />
				</ListItem>
				<ListItem button onClick={() => onDownload(4)}>
					<ListItemText primary="Large (1200x1600)" />
				</ListItem>
			</List>
		</SwipeableDrawer>
	);
};

export default MobileDownloadMenu;
