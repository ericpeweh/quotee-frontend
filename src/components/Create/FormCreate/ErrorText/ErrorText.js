// Components
import { Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ErrorText = ({ text, color }) => {
	const classes = useStyles();

	return (
		<Typography className={`${classes.errorText} ${color === "error" ? classes.error : ""}`}>
			{text}
		</Typography>
	);
};

export default ErrorText;
