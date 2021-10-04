// Components
import { Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ScrollContainer = ({ children }) => {
	const classes = useStyles();

	return (
		<Grid container className={classes.scrollContainer} direction="column" justifyContent="center">
			{children}
		</Grid>
	);
};

export default ScrollContainer;
