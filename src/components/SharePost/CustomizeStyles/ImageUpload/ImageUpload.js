// Components
import { Grid, Button } from "@material-ui/core";

// Utils
import { changeImageFromURL } from "../../../../utils/canvasEditor";

// Styles
import useStyles from "./styles";

const ImageUpload = ({ generateQuotes }) => {
	const classes = useStyles();

	return (
		<Grid item xs={6} sm={12} md={1}>
			<input
				style={{ display: "none" }}
				accept="image/*"
				id="fileInput"
				type="file"
				onChange={event => changeImageFromURL(event, generateQuotes)}
			/>
			<label htmlFor="fileInput">
				<Button
					variant="contained"
					color="primary"
					component="span"
					className={classes.button}
					fullWidth
				>
					Upload
				</Button>
			</label>
		</Grid>
	);
};

export default ImageUpload;
