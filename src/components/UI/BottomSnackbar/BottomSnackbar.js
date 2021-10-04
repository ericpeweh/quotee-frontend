// Dependencies
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { snackbarChange } from "../../../store/slices/modalSlice";

// Components
import { Snackbar } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const BottomSnackbar = () => {
	const { isSnackbarOpen, snackbarMessage } = useSelector(state => state.modal, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	return (
		<Snackbar
			open={isSnackbarOpen}
			classes={{ root: classes.bottomSnackbar }}
			autoHideDuration={1000}
			onClose={() => dispatch(snackbarChange(false))}
			message={snackbarMessage}
		/>
	);
};

export default BottomSnackbar;
