// Dependencies
import { Grid, Typography } from "@material-ui/core";
import { useSelector, shallowEqual } from "react-redux";

// Components

// Styles
import useStyles from "./styles";

const PhotographerCredits = () => {
	const { photographer, photographerUrl } = useSelector(state => state.canvas, shallowEqual);
	const classes = useStyles();

	const isFromUnsplash = photographer && photographerUrl;

	return isFromUnsplash ? (
		<Grid
			container
			direction="row"
			className={classes.container}
			justifyContent="center"
			alignItems="center"
		>
			<Grid item>
				<Typography className={classes.text}>
					Photo by{" "}
					<a href={photographerUrl} rel="noreferrer" target="_blank">
						{photographer}
					</a>{" "}
					on{" "}
					<a href="https://unsplash.com/" rel="noreferrer" target="_blank">
						Unsplash
					</a>
				</Typography>
			</Grid>
		</Grid>
	) : (
		<></>
	);
};

export default PhotographerCredits;
