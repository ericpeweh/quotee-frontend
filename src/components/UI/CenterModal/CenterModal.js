// Components
import { Dialog, Grid, CircularProgress, Button, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";

const CenterModal = ({ text, type, onClose, open }) => {
	const classes = useStyles();

	// Message icon
	let messageIcon = "";
	if (type === "success") {
		messageIcon = <CheckCircleIcon className={classes.successIcon} />;
	} else {
		messageIcon = <ErrorIcon className={classes.errorIcon} />;
	}

	return (
		<Dialog
			open={open}
			onClose={() => {}}
			maxWidth="xs"
			fullWidth
			classes={{ paper: classes.centerModalContainer }}
		>
			<Grid container direction="column" justifyContent="center" alignItems="center">
				{text === "" ? (
					<CircularProgress />
				) : (
					<>
						<Grid item>{messageIcon}</Grid>
						<Grid item>
							<Typography className={classes.dialogText}>{text}</Typography>
						</Grid>
						<Button
							onClick={onClose}
							size="small"
							variant="outlined"
							color="primary"
							fullWidth
							className={`${classes.cancelButton} ${
								type === "success" ? classes.successButton : classes.errorButton
							}`}
						>
							Close
						</Button>
					</>
				)}
			</Grid>
		</Dialog>
	);
};

export default CenterModal;
