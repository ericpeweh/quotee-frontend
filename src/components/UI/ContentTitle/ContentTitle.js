// Components
import { Grid, Typography, Divider } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ContentTitle = ({ title, color = "primary" }) => {
	const classes = useStyles();

	return (
		<Grid item xs={12}>
			<Typography className={`${classes.title} ${classes[color]}`}>{title}</Typography>
			<Divider />
		</Grid>
	);
};

export default ContentTitle;
