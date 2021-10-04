// Dependencies
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { reportModalChange } from "../../../store/slices/reportSlice";
import { reportPost } from "../../../actions/posts";

// Components
import {
	Grid,
	Dialog,
	DialogTitle,
	List,
	ListItem,
	ListItemText,
	CircularProgress,
	Typography
} from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";

const reportReasons = [
	{ text: "Spam", code: "001" },
	{ text: "Kata kasar atau tidak pantas", code: "002" },
	{ text: "Berisi ujaran kebencian atau kekerasan", code: "003" },
	{ text: "Plagiarisme", code: "004" }
];

const ReportModal = () => {
	const { isReportModalOpen, postId, reportStatus, reportMessage } = useSelector(
		state => state.report,
		shallowEqual
	);
	const dispatch = useDispatch();
	const classes = useStyles();

	const isIdle = reportStatus === "idle";
	const isLoading = reportStatus === "loading";

	const clickHandler = code => {
		dispatch(reportPost({ code, postId }));
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
					<List>
						{reportReasons.map(reason => (
							<ListItem button onClick={() => clickHandler(reason.code)} key={reason.code}>
								<ListItemText primary={reason.text} />
							</ListItem>
						))}
					</List>
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

export default ReportModal;
