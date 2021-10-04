// Dependencies
import { useParams, useHistory } from "react-router";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { verifyEmail } from "../../actions/users";

// Components
import { Grid, Typography } from "@material-ui/core";

// Images
import EmailSuccess from "../../images/EMAILSUCCESS.webp";
import EmailFailed from "../../images/EMAILFAILED.webp";

// Styles
import useStyles from "./styles";

const EmailVerification = () => {
	const { token } = useParams();
	const { message, status, redirect } = useSelector(state => state.emailVerification, shallowEqual);
	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		if (token) {
			dispatch(verifyEmail({ token }));
		}
	}, [dispatch, token]);

	if (redirect) {
		setTimeout(() => {
			history.replace("/login");
		}, 5000);
	}

	// Status image
	let statusImage = "";
	if (message && status === "failed") {
		statusImage = <img src={EmailFailed} alt="account status" className={classes.email} />;
	} else {
		statusImage = <img src={EmailSuccess} alt="account status" className={classes.email} />;
	}

	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			justifyContent="center"
			className={classes.emailVerificationContainer}
		>
			{message && statusImage}
			{message && <Typography className={classes.statusText}>{message}</Typography>}
		</Grid>
	);
};

export default EmailVerification;
