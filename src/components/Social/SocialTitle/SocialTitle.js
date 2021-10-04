// Components
import { Typography, Grid, Divider } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const SocialTitle = ({ text, color = "inherit", type }) => {
	const classes = useStyles();

	return (
		<Grid item className={classes.socialTitleContainer}>
			<Typography
				className={`${classes.newsAndArticle} ${type ? classes[type] : ""}`}
				color={color}
			>
				{text}
			</Typography>
			<Divider />
		</Grid>
	);
};

export default SocialTitle;
