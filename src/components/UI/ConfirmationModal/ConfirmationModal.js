// Dependencies
import { useHistory } from "react-router";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { confirmationChange, confirmationPostIdChange } from "../../../store/slices/modalSlice";
import { deletePost } from "../../../actions/posts";

// Components
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button
} from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ConfirmationModal = () => {
	const username = useSelector(state => state.auth.username);
	const { isConfirmationModalOpen, confirmationPostId } = useSelector(
		state => state.modal,
		shallowEqual
	);
	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();

	const cancelHandler = () => {
		dispatch(confirmationChange(false));
		dispatch(confirmationPostIdChange(""));
	};

	const deleteHandler = () => {
		dispatch(confirmationChange(false));
		dispatch(deletePost({ postId: confirmationPostId, history, username }));
	};

	return (
		<Dialog
			open={isConfirmationModalOpen}
			onClose={cancelHandler}
			aria-labelledby="confirmation-title"
			aria-describedby="confirmation-desc"
			maxWidth="xs"
			fullWidth
			classes={{ paper: classes.dialog }}
		>
			<DialogTitle id="confirmation-title">Delete Post Confirmation</DialogTitle>
			<DialogContent>
				<DialogContentText id="confirmation-desc">
					Are you sure you want to delete this item ?
				</DialogContentText>
			</DialogContent>
			<DialogActions className={classes.buttonContainer}>
				<Button onClick={cancelHandler} color="primary" className={classes.cancelButton}>
					Cancel
				</Button>
				<Button onClick={deleteHandler} color="primary" autoFocus className={classes.deleteButton}>
					Delete
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ConfirmationModal;
