// Dependencies
import { useDispatch } from "react-redux";
import { setImageURL } from "../../../../store/slices/canvasSlice";

// Components
import { Grid, FormControl, InputLabel, OutlinedInput } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ImageURLInput = () => {
	const dispatch = useDispatch();
	const classes = useStyles();

	const imageURLChangeHandler = event => {
		dispatch(setImageURL(event.target.value));
	};

	return (
		<Grid item sm={8} xs={12}>
			<FormControl variant="outlined" size="small" fullWidth>
				<InputLabel htmlFor="quotes">Image URL</InputLabel>
				<OutlinedInput
					label="Image URL"
					className={classes.imageURLInput}
					color="secondary"
					autoComplete="off"
					onChange={imageURLChangeHandler}
				/>
			</FormControl>
		</Grid>
	);
};

export default ImageURLInput;
