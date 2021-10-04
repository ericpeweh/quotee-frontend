// Components
import { Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import LoginImage from "../../../images/LOGIN.webp";

const LoginSidebar = () => {
	const classes = useStyles();

	return (
		<Grid
			xs={12}
			sm={6}
			container
			item
			justifyContent="center"
			alignItems="center"
			className={classes.loginSidebar}
		>
			<img src={LoginImage} alt="login thumbnail" className={classes.loginImage} />
		</Grid>
	);
};

export default LoginSidebar;
