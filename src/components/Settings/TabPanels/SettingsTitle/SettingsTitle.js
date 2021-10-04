// Components
import { Grid, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const SettingsTitle = ({ text }) => {
	const classes = useStyles();

	return (
		<Grid item>
			<Typography variant="h6" className={classes.tabTitle}>
				{text}
			</Typography>
		</Grid>
	);
};

export default SettingsTitle;
