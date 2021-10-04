// Dependencies
import { useMediaQuery } from "react-responsive";

// Components
import { Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ShareDisplay = () => {
	const classes = useStyles();
	// Media queries for responsive
	const isSmallerScreen = useMediaQuery({ maxWidth: 1270 });
	const isTabletScreen = useMediaQuery({ maxWidth: 930 });
	const isMobile = useMediaQuery({ maxWidth: 820 });

	return (
		<Grid container item xs={isSmallerScreen ? (isTabletScreen ? (isMobile ? 12 : 7) : 6) : 4}>
			<Grid item className={classes.canvasContainer}>
				<canvas id="canvas" width="1200" height="1600" className={classes.canvas}></canvas>
			</Grid>
		</Grid>
	);
};
export default ShareDisplay;
