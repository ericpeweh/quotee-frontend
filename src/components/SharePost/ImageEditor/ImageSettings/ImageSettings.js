// Dependencies
import { useSelector, useDispatch, shallowEqual } from "react-redux";

// Actions
import { changeImageBlur, changeImageScale } from "../../../../store/slices/canvasSlice";

// Components
import { Slider, Grid, Typography, ButtonGroup, Button } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";

// Utils
import { moveImage } from "../../../../utils/canvasEditor";

const ImageSettings = ({ canvas }) => {
	const { imageBlur, imageScale } = useSelector(state => state.canvas, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const moveImageHandler = type => {
		moveImage({ canvas, type });
	};

	const imageBlurChangeHandler = (e, newValue) => {
		dispatch(changeImageBlur(newValue));
	};

	const imageScaleChangeHandler = (e, newValue) => {
		dispatch(changeImageScale(newValue));
	};

	return (
		<Grid item sm={12} lg={6} className={classes.imageSettingsContainer}>
			<Grid container direction="column">
				<Typography align="center" className={classes.imagePositionTitle}>
					Image Position
				</Typography>
				<ButtonGroup size="medium" color="primary" variant="contained" fullWidth disableElevation>
					<Button
						className={`${classes.sideButton} ${classes.button}`}
						onClick={() => moveImageHandler("left")}
					>
						<ArrowBackOutlinedIcon />
					</Button>
					<Button className={classes.button} onClick={() => moveImageHandler("right")}>
						<ArrowForwardOutlinedIcon />
					</Button>
					<Button className={classes.button} onClick={() => moveImageHandler("up")}>
						<ArrowUpwardOutlinedIcon />
					</Button>
					<Button
						className={`${classes.sideButton} ${classes.button}`}
						onClick={() => moveImageHandler("down")}
					>
						<ArrowDownwardOutlinedIcon />
					</Button>
				</ButtonGroup>
				<Typography align="center" className={classes.imageBlurTitle}>
					Image Blur
				</Typography>
				<Slider
					defaultValue={imageBlur}
					marks
					step={0.01}
					min={0}
					max={0.1}
					color="secondary"
					classes={{ valueLabel: classes.sliderValueLabel }}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					onChange={imageBlurChangeHandler}
					value={imageBlur}
				/>
				<Typography align="center" className={classes.imageBlurTitle}>
					Scale Image
				</Typography>
				<Slider
					defaultValue={1}
					marks
					value={imageScale}
					step={0.1}
					min={0}
					max={2}
					color="secondary"
					classes={{ valueLabel: classes.sliderValueLabel }}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					onChange={imageScaleChangeHandler}
				/>
			</Grid>
		</Grid>
	);
};

export default ImageSettings;
