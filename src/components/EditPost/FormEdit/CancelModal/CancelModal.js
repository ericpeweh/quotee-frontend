// Components
import { Dialog, List, ListItem, ListItemText } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const CancelModal = ({ onClose, onExit, isOpen }) => {
	const classes = useStyles();

	return (
		<Dialog
			onClose={onClose}
			classes={{ paper: classes.cancelDialog }}
			open={isOpen}
			maxWidth="xs"
			fullWidth
		>
			<List>
				<ListItem button onClick={onClose}>
					<ListItemText primary="Back to edit" className={classes.listItem} />
				</ListItem>
				<ListItem button onClick={onExit}>
					<ListItemText
						primary="Exit without saving"
						className={`${classes.listItem} ${classes.exitText}`}
					/>
				</ListItem>
			</List>
		</Dialog>
	);
};

export default CancelModal;
