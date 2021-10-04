// Dependencies
import { shallowEqual, useSelector } from "react-redux";

// Components
import RegisterForm from "./RegisterForm/RegisterForm";
import RegisterSidebar from "./RegisterSidebar/RegisterSidebar";
import CenterSpinner from "../UI/CenterSpinner/CenterSpinner";
import { Grid, Paper } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const Register = ({ mobile }) => {
	const { isLoading, status } = useSelector(state => state.auth, shallowEqual);
	const classes = useStyles();

	return (
		<Grid
			container
			direction="row"
			component={Paper}
			elevation={0}
			className={classes.registerContainer}
		>
			{!isLoading && status !== "idle" && (
				<>
					<CenterSpinner open={isLoading || status === "idle"} />
					{!mobile && <RegisterSidebar />}
					<RegisterForm mobile={mobile} />
				</>
			)}
		</Grid>
	);
};

export default Register;
