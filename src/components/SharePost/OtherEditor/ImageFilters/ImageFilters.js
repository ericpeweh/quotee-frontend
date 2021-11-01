// Dependencies
import { useSelector, useDispatch, shallowEqual } from "react-redux";

// Components
import { Grid, Typography, FormControlLabel, Checkbox } from "@material-ui/core";

// Styles
import useStyles from "./styles";
import {
	changeGrayscale,
	changeKodachrome,
	changeOldPhoto,
	changePolaroid,
	changeSepia,
	changeVintage
} from "../../../../store/slices/canvasSlice";

const ImageFilters = () => {
	const { grayscale, sepia, oldPhoto, vintage, kodachrome, polaroid } = useSelector(
		state => state.canvas,
		shallowEqual
	);
	const dispatch = useDispatch();
	const classes = useStyles();

	const grayscaleChangeHandler = e => {
		dispatch(changeGrayscale(e.target.checked));
	};

	const sepiaChangeHandler = e => {
		dispatch(changeSepia(e.target.checked));
	};

	const oldPhotoChangeHandler = e => {
		dispatch(changeOldPhoto(e.target.checked));
	};

	const vintageChangeHandler = e => {
		dispatch(changeVintage(e.target.checked));
	};

	const kodachromeChangeHandler = e => {
		dispatch(changeKodachrome(e.target.checked));
	};

	const polaroidChangeHandler = e => {
		dispatch(changePolaroid(e.target.checked));
	};

	return (
		<Grid
			item
			container
			sm={12}
			md={6}
			className={classes.imageFiltersContainer}
			direction="column"
		>
			<Typography align="center" className={classes.preferencesTitle}>
				Image Filters
			</Typography>
			<Grid container justifyContent="center">
				<Grid item container xs={12} direction="row">
					<Grid item container lg={4} xs={6}>
						<FormControlLabel
							control={
								<Checkbox checked={grayscale} onChange={grayscaleChangeHandler} name="grayscale" />
							}
							label="Grayscale"
							className={classes.noSelect}
						/>
					</Grid>
					<Grid item container lg={4} xs={6}>
						<FormControlLabel
							control={<Checkbox checked={sepia} onChange={sepiaChangeHandler} name="sepia" />}
							label="Sepia"
							className={classes.noSelect}
						/>
					</Grid>
					<Grid item container lg={4} xs={6}>
						<FormControlLabel
							control={
								<Checkbox checked={oldPhoto} onChange={oldPhotoChangeHandler} name="oldPhoto" />
							}
							label="Old Photo"
							className={classes.noSelect}
						/>
					</Grid>
					<Grid item lg={4} xs={6}>
						<FormControlLabel
							control={
								<Checkbox checked={vintage} onChange={vintageChangeHandler} name="vintage" />
							}
							label="Vintage"
							className={classes.noSelect}
						/>
					</Grid>
					<Grid item container lg={4} xs={6}>
						<FormControlLabel
							control={
								<Checkbox
									checked={kodachrome}
									onChange={kodachromeChangeHandler}
									name="kodachrome"
								/>
							}
							label="Kodachrome"
							className={classes.noSelect}
						/>
					</Grid>
					<Grid item container lg={4} xs={6}>
						<FormControlLabel
							control={
								<Checkbox checked={polaroid} onChange={polaroidChangeHandler} name="polaroid" />
							}
							label="Polaroid"
							className={classes.noSelect}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ImageFilters;
