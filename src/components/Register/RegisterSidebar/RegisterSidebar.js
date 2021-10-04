// Components
import { Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import RegisterImage from "../../../images/REGISTER.webp";

const RegisterSidebar = () => {
	const classes = useStyles();

	return (
		<Grid
			xs={12}
			sm={6}
			container
			item
			justifyContent="center"
			alignItems="center"
			className={classes.registerSidebar}
		>
			<img src={RegisterImage} alt="register thumbnail" className={classes.registerImage} />
		</Grid>
	);
};

export default RegisterSidebar;
