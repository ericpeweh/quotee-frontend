// Components
import { Alert } from "@material-ui/lab";

// Styles
import useStyles from "./styles";

const AlertBox = ({ children, type }) => {
	const classes = useStyles();

	return (
		<Alert severity={type} className={classes.alertBox}>
			{children}
		</Alert>
	);
};

export default AlertBox;
