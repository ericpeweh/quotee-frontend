// Dependencies
import { useState } from "react";
import { useHistory } from "react-router";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { modalClose } from "../../store/slices/editQuotesSlice";

// Components
import FormEdit from "./FormEdit/FormEdit";
import EditDisplay from "./EditDisplay/EditDisplay";
import CenterModal from "../UI/CenterModal/CenterModal";
import { Grid, Typography, CircularProgress } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const EditPost = ({ mobile }) => {
	const username = useSelector(state => state.auth.username);
	const { message, status, isModalOpen, quotesId, fetchPostStatus } = useSelector(
		state => state.editQuotes,
		shallowEqual
	);
	const [quotesDisplay, setQuotesDisplay] = useState("");
	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();
	const isLoading = fetchPostStatus === "loading";

	// Modal close handler
	const closeModalHandler = () => {
		if (status === "failed") {
			dispatch(modalClose());
			history.push(`/${username}`);
		} else {
			dispatch(modalClose());
			history.push(`/${username}/p/${quotesId}`);
		}
	};

	// Status modal
	const statusContent = (
		<CenterModal
			text={message}
			type={status === "failed" ? "error" : "success"}
			onClose={closeModalHandler}
			open={isModalOpen}
		/>
	);

	return (
		<div className={`${classes.createElement} ${isLoading ? classes.noPadding : ""}`}>
			{isLoading ? (
				<Grid
					container
					className={classes.spinnerContainer}
					justifyContent="center"
					alignItems="center"
					direction="column"
				>
					<CircularProgress color="primary" />
				</Grid>
			) : (
				<>
					{statusContent}
					<Typography variant="h6" className={classes.createTitle}>
						Edit Quotes
					</Typography>
					<Grid item container direction="row" className={classes.createContainer}>
						<FormEdit mobile={mobile} onChangeQuotes={setQuotesDisplay} />
						<EditDisplay quotesDisplay={quotesDisplay} />
					</Grid>
				</>
			)}
		</div>
	);
};

export default EditPost;
