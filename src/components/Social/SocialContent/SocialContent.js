// Components
import ArticleBanners from "./ArticleBanners/ArticleBanners";
import { Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const SocialContent = () => {
	const classes = useStyles();

	return (
		<Grid
			container
			direction="row"
			className={classes.socialContentContainer}
			justifyContent="center"
		>
			<ArticleBanners />
		</Grid>
	);
};

export default SocialContent;
