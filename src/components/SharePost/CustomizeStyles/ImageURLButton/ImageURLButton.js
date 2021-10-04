// Dependencies
import { shallowEqual, useSelector } from "react-redux";

// Components
import { Grid, Button } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ImageURLButton = ({ generateQuotes }) => {
	const canvas = useSelector(state => state.canvas, shallowEqual);
	const classes = useStyles();

	return (
		<Grid item xs={6} sm={4} md={1}>
			<Button
				variant="contained"
				color="primary"
				fullWidth
				className={classes.button}
				disabled={!canvas.imageURL}
				onClick={() => {
					if (canvas.imageURL) generateQuotes(canvas.imageURL);
				}}
			>
				Set
			</Button>
		</Grid>
	);
};

export default ImageURLButton;
