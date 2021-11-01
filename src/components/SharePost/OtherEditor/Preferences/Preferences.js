// Dependencies
import { shallowEqual, useSelector, useDispatch } from "react-redux";

// Actions
import { changeHideAuthor } from "../../../../store/slices/canvasSlice";

// Components
import { Grid, Typography, FormControl, FormControlLabel, Checkbox } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const Preferences = () => {
	const { hideAuthor } = useSelector(state => state.canvas, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const hideAuthorChangeHandler = e => {
		dispatch(changeHideAuthor(e.target.checked));
	};

	return (
		<Grid item container sm={12} md={6} className={classes.preferencesContainer} direction="column">
			<Typography align="center" className={classes.preferencesTitle}>
				Preferences
			</Typography>
			<FormControl>
				<FormControlLabel
					control={
						<Checkbox checked={hideAuthor} onChange={hideAuthorChangeHandler} name="hideAuthor" />
					}
					label="Hide author name"
					className={classes.noSelect}
				/>
			</FormControl>
		</Grid>
	);
};

export default Preferences;
