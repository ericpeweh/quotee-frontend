// Dependencies
import { useState } from "react";
import { useHistory } from "react-router";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { modalClose } from "../../store/slices/newQuotesSlice";

// Components
import FormCreate from "./FormCreate/FormCreate";
import CreateDisplay from "./CreateDisplay/CreateDisplay";
import CenterModal from "../UI/CenterModal/CenterModal";
import { Grid, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const Create = ({ mobile }) => {
	const { message, status, isModalOpen, author } = useSelector(
		state => state.newQuotes,
		shallowEqual
	);
	const [quotesDisplay, setQuotesDisplay] = useState("");
	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();

	// Modal close handler
	const closeModalHandler = () => {
		if (status === "failed") {
			dispatch(modalClose());
		} else {
			dispatch(modalClose());
			history.push(`${author}`);
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
		<div className={classes.createElement}>
			{statusContent}
			<Typography variant="h6" className={classes.createTitle}>
				Create New Quotes
			</Typography>
			<Grid item container direction="row" className={classes.createContainer}>
				<FormCreate mobile={mobile} onChangeQuotes={setQuotesDisplay} />
				<CreateDisplay quotesDisplay={quotesDisplay} />
			</Grid>
		</div>
	);
};

export default Create;
