// Components
import { Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ErrorText = ({ text }) => {
	const classes = useStyles();

	return (
		<Typography color="error" className={classes.errorText}>
			{text}
		</Typography>
	);
};

export default ErrorText;
