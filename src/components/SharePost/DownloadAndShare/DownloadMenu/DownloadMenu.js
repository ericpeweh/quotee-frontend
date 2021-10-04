// Components
import { Dialog, List, ListItem, ListItemText, Typography, Divider } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const DownloadMenu = ({ isOpen, onClose, onSave }) => {
	const classes = useStyles();

	return (
		<Dialog
			onClose={onClose}
			classes={{ paper: classes.downloadMenu }}
			open={isOpen}
			maxWidth="xs"
			fullWidth
		>
			<List>
				<Typography align="center" variant="body1" className={classes.downloadQualityText}>
					Download Quality
				</Typography>
				<Divider className={classes.divider} />
				<ListItem button onClick={() => onSave(2)}>
					<ListItemText primary="Small (600x800)" className={classes.listItem} />
				</ListItem>
				<ListItem button onClick={() => onSave(3)}>
					<ListItemText primary="Medium (900x1200)" className={classes.listItem} />
				</ListItem>
				<ListItem button onClick={() => onSave(4)}>
					<ListItemText primary="Large (1200x1600)" className={classes.listItem} />
				</ListItem>
			</List>
		</Dialog>
	);
};

export default DownloadMenu;
