// Dependencies
import { shallowEqual, useSelector } from "react-redux";

// Components
import LoginSidebar from "./LoginSidebar/LoginSidebar";
import LoginForm from "./LoginForm/LoginForm";
import CenterSpinner from "../UI/CenterSpinner/CenterSpinner";
import { Grid, Paper } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const Login = ({ mobile }) => {
	const { isLoading, status, signOutStatus } = useSelector(state => state.auth, shallowEqual);
	const classes = useStyles();

	return (
		<Grid
			container
			direction="row"
			component={Paper}
			elevation={0}
			className={classes.loginContainer}
		>
			{!isLoading && status !== "idle" && (
				<>
					<CenterSpinner open={isLoading || status === "idle"} />
					{!mobile && <LoginSidebar />}
				</>
			)}
			{(status === "succeeded" || status === "failed" || signOutStatus === "succeeded") && (
				<LoginForm mobile={mobile} />
			)}
		</Grid>
	);
};

export default Login;
