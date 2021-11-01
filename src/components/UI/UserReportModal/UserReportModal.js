// Dependencies
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
	reportModalChange,
	selectCode,
	descriptionChange
} from "../../../store/slices/userReportSlice";
import { reportUser } from "../../../actions/users";

// Components
import {
	Grid,
	Dialog,
	DialogTitle,
	List,
	ListItem,
	ListItemText,
	CircularProgress,
	Typography,
	FormControl,
	InputLabel,
	OutlinedInput,
	Button
} from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";

const reportReasons = [
	{ text: "Konten tidak pantas", code: "001" },
	{ text: "Melakukan spam", code: "002" },
	{ text: "Akun palsu", code: "003" },
	{ text: "Alasan lainnya", code: "004" }
];

const UserReportModal = () => {
	const { isReportModalOpen, username, reportStatus, reportMessage, code, description } =
		useSelector(state => state.userReport, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const isIdle = reportStatus === "idle";
	const isLoading = reportStatus === "loading";

	const submitHandler = () => {
		if (code && username && description) {
			dispatch(reportUser({ code, username, description }));
		}
	};

	const selectCodeHandler = code => {
		dispatch(selectCode(code));
	};

	const closeHandler = () => {
		dispatch(reportModalChange(false));
	};

	return (
		<Dialog
			onClose={isLoading ? () => {} : closeHandler}
			aria-labelledby="dialogTitle"
			open={isReportModalOpen}
			fullWidth
			maxWidth="xs"
			classes={{ paper: classes.dialog }}
		>
			{isIdle && (
				<>
					<DialogTitle id="dialogTitle" classes={{ root: classes.dialogTitle }}>
						Report post
					</DialogTitle>
					{!code && (
						<List>
							{reportReasons.map(reason => (
								<ListItem button onClick={() => selectCodeHandler(reason.code)} key={reason.code}>
									<ListItemText primary={reason.text} />
								</ListItem>
							))}
						</List>
					)}
					{code && (
						<div className={classes.descriptionInputContainer}>
							<Typography variant="body2" className={classes.descriptionTitle}>
								Please provide report description:
							</Typography>
							<FormControl variant="outlined" size="small" fullWidth>
								<InputLabel htmlFor="quotes">Description</InputLabel>
								<OutlinedInput
									label="Description"
									className={classes.descriptionInput}
									color="secondary"
									autoComplete="off"
									onChange={event => {
										dispatch(descriptionChange(event.target.value));
									}}
									value={description}
									multiline
									rows={5}
								/>
							</FormControl>
						</div>
					)}
					{code && (
						<Button
							color="primary"
							variant="contained"
							className={classes.submitButton}
							disabled={description === ""}
							onClick={submitHandler}
						>
							Submit
						</Button>
					)}
					<Button className={classes.cancelButton} onClick={closeHandler}>
						Cancel
					</Button>
				</>
			)}
			{isLoading && (
				<Grid className={classes.container}>
					<CircularProgress color="primary" size={60} />
					<Typography variant="body2" className={classes.loadingText}>
						Submitting your report...
					</Typography>
				</Grid>
			)}
			{reportStatus === "succeeded" && reportMessage && (
				<Grid className={classes.container}>
					<ThumbUpOutlinedIcon className={classes.successIcon} />
					<Typography variant="body2" align="center" className={classes.successText}>
						{reportMessage}
					</Typography>
				</Grid>
			)}
			{reportStatus === "failed" && reportMessage && (
				<Grid className={classes.container}>
					<ErrorOutlineOutlinedIcon className={classes.errorIcon} />
					<Typography variant="body2" align="center" className={classes.errorText}>
						{reportMessage}
					</Typography>
				</Grid>
			)}
		</Dialog>
	);
};

export default UserReportModal;
