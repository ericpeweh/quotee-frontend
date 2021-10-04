// Dependencies
import { useHistory } from "react-router";

// Components
import { Dialog, List, ListItem, ListItemText } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const CancelModal = ({ onClose, onExit, onSave, isOpen, isDraft, draftId }) => {
	const history = useHistory();
	const classes = useStyles();

	const deleteHandler = () => {
		localStorage.removeItem(draftId);
		onClose();
		history.push("/draft");
	};

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
					<ListItemText primary="Back to create" className={classes.listItem} />
				</ListItem>
				<ListItem button onClick={onSave}>
					<ListItemText
						primary="Save to draft"
						className={`${classes.listItem} ${classes.saveText}`}
					/>
				</ListItem>
				{isDraft && (
					<ListItem button onClick={deleteHandler}>
						<ListItemText
							primary="Delete draft"
							className={`${classes.listItem} ${classes.deleteText}`}
						/>
					</ListItem>
				)}
				<ListItem
					button
					onClick={() => {
						if (isDraft && draftId) {
							onExit("/draft");
						} else {
							onExit("/");
						}
					}}
				>
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
