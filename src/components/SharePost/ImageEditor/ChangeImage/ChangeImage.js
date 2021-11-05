// Dependencies
import { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

// Components
import ImagePicker from "./ImagePicker/ImagePicker";
import {
	Grid,
	Button,
	Typography,
	Divider,
	FormControl,
	InputLabel,
	OutlinedInput
} from "@material-ui/core";

// Actions
import { imageURLChange } from "../../../../store/slices/canvasSlice";

// Styles
import useStyles from "./styles";

// Utils
import { changeImageFromURL, changeImageFromUpload } from "../../../../utils/canvasEditor";

// Icons
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";

const ChangeImage = ({ canvas, mobile }) => {
	const { imageURL, imageBlur, grayscale, sepia, oldPhoto, vintage, kodachrome, polaroid } =
		useSelector(state => state.canvas, shallowEqual);
	const [browseImageModal, setBrowseImageModal] = useState(false);

	const dispatch = useDispatch();
	const classes = useStyles();

	const profile = {
		imageBlur,
		grayscale,
		sepia,
		oldPhoto,
		vintage,
		kodachrome,
		polaroid
	};

	const imageURLChangeHandler = e => {
		dispatch(imageURLChange(e.target.value));
	};

	const changeImageFromURLHandler = () => {
		if (imageURL) changeImageFromURL({ canvas, imageURL, dispatch, profile });
	};

	const changeImageFromUploadHandler = event => {
		changeImageFromUpload({ event, canvas, dispatch, profile });
	};

	const browseImageToggleHandler = value => {
		setBrowseImageModal(value);
	};

	return (
		<Grid item sm={12} lg={6} className={classes.changeImageContainer}>
			<Typography align="center" className={classes.imagePositionTitle}>
				Image Source
			</Typography>
			<Button
				fullWidth
				variant="contained"
				className={classes.button}
				startIcon={<ImageSearchIcon />}
				onClick={() => browseImageToggleHandler(true)}
			>
				Browse Image
			</Button>
			<ImagePicker
				isOpen={browseImageModal}
				mobile={mobile}
				onClose={browseImageToggleHandler}
				profile={profile}
				canvas={canvas}
			/>
			<input
				style={{ display: "none" }}
				accept="image/*"
				id="fileInput"
				type="file"
				onChange={changeImageFromUploadHandler}
			/>
			<label htmlFor="fileInput">
				<Button
					fullWidth
					variant="contained"
					component="span"
					className={classes.button}
					startIcon={<PublishOutlinedIcon />}
				>
					Upload Image
				</Button>
			</label>
			<Divider className={classes.divider} />
			<Grid container className={classes.imageUrlContainer}>
				<Grid item xs={8}>
					<FormControl variant="outlined" size="small" fullWidth>
						<InputLabel htmlFor="quotes">Image URL</InputLabel>
						<OutlinedInput
							label="Image URL"
							className={classes.imageURLInput}
							color="secondary"
							autoComplete="off"
							value={imageURL}
							onChange={imageURLChangeHandler}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={4}>
					<Button
						variant="contained"
						color="primary"
						fullWidth
						className={classes.setImageUrlButton}
						disabled={!imageURL}
						onClick={changeImageFromURLHandler}
					>
						Use
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ChangeImage;
