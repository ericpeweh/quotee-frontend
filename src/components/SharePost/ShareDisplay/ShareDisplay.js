// Dependenciess
import { shallowEqual, useSelector } from "react-redux";

// Components
import { Grid, CircularProgress } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ShareDisplay = () => {
	const { status } = useSelector(state => state.canvas, shallowEqual);
	const classes = useStyles();

	const isLoading = status === "loading";

	return (
		<Grid
			item
			container
			justifyContent="center"
			direction="row"
			alignItems="center"
			className={classes.shareDisplay}
		>
			<Grid item className={classes.canvasContainer}>
				{isLoading && (
					<Grid
						container
						direction="column"
						justifyContent="center"
						alignItems="center"
						className={classes.spinnerContainer}
					>
						<CircularProgress color="secondary" className={classes.spinner} />
						Loading...
					</Grid>
				)}
				<canvas id="canvas" width="1200" height="1600" className={classes.canvas}></canvas>
			</Grid>
		</Grid>
	);
};

export default ShareDisplay;
