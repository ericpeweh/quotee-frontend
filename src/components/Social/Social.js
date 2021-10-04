// Components
import SocialTitle from "./SocialTitle/SocialTitle";
import SocialContent from "./SocialContent/SocialContent";
import TopQuotes from "./TopQuotes/TopQuotes";
import { Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const Social = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.socialContainer} direction="column">
			<SocialTitle text="News & Article" color="secondary" />
			<SocialContent />
			<SocialTitle text="Top Quotes" color="primary" />
			<TopQuotes />
		</Grid>
	);
};

export default Social;
