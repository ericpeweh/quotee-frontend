// Components
import { Grid, Typography } from "@material-ui/core";
import AdsCarousel from "../../UI/AdsCarousel/AdsCarousel";
import AdsDialog from "../../UI/AdsDialog/AdsDialog";

// Styles
import useStyles from "./styles";

const Banner = () => {
	const classes = useStyles();

	return (
		<>
			<AdsDialog />
			<Grid item className={classes.bannerElement}>
				<Typography color="textSecondary" variant="body1">
					News & Ads
				</Typography>
			</Grid>
			<Grid item className={classes.bannerContainer}>
				<AdsCarousel />
			</Grid>
		</>
	);
};

export default Banner;
