// Dependencies
import { useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { changeProfilePicture, deleteProfilePicture } from "../../../../../actions/users";

// Components
import CenterSpinner from "../../../../UI/CenterSpinner/CenterSpinner";
import { Grid, Typography, Button, Avatar } from "@material-ui/core";

// Styles
import useStyles from "./styles";
import { Skeleton } from "@material-ui/lab";

const AvatarSettings = () => {
	const { profilePicture, changePictureStatus, status } = useSelector(
		state => state.settings,
		shallowEqual
	);
	const fileInput = useRef();
	const dispatch = useDispatch();
	const classes = useStyles();

	const isLoading = status === "loading";
	const changingPicture = changePictureStatus === "loading";

	const changeProfilePictureHandler = event => {
		if (event.target.files[0]) {
			const newImage = event.target.files[0];
			const imageData = new FormData();
			imageData.append("profilePicture", newImage);

			dispatch(changeProfilePicture(imageData));

			fileInput.current.value = "";
		}
	};

	const deleteProfilePictureHandler = () => {
		dispatch(deleteProfilePicture());
	};

	return (
		<>
			<Grid item>
				<Typography variant="body2" className={classes.pictureTitle}>
					Profile Image
				</Typography>
			</Grid>
			<Grid item container direction="row" className={classes.avatarContainer} alignItems="center">
				{isLoading ? (
					<Skeleton variant="circle" animation="wave" width={50} height={50} />
				) : (
					<Avatar className={classes.userAvatar} src={profilePicture} />
				)}
				{changingPicture && <CenterSpinner open={changingPicture} />}
				<input
					accept="image/*"
					className={classes.fileInput}
					id="inputImage"
					type="file"
					ref={fileInput}
					onChange={changeProfilePictureHandler}
				/>
				<label htmlFor="inputImage">
					{isLoading ? (
						<Skeleton variant="rect" animation="wave" className={classes.buttonSkeleton} />
					) : (
						<Button
							size="small"
							variant="outlined"
							color="secondary"
							className={classes.changeAvatarButton}
							component="span"
						>
							Change
						</Button>
					)}
				</label>
				{isLoading ? (
					<Skeleton variant="rect" animation="wave" className={classes.buttonSkeleton} />
				) : (
					<Button
						size="small"
						variant="outlined"
						color="primary"
						className={classes.removeAvatarButton}
						onClick={deleteProfilePictureHandler}
					>
						Remove
					</Button>
				)}
			</Grid>
		</>
	);
};

export default AvatarSettings;
