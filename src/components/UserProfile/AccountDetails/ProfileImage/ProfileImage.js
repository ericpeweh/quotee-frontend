// Dependencies
import { shallowEqual, useSelector } from "react-redux";

// Components
import { Skeleton } from "@material-ui/lab";
import { Grid, Avatar } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ProfileImage = () => {
	const { status, profilePicture } = useSelector(state => state.userProfile, shallowEqual);
	const classes = useStyles();

	const isLoading = status === "loading";

	return (
		<Grid
			item
			className={classes.profilePictureContainer}
			xs={4}
			md={4}
			container
			justifyContent="flex-end"
		>
			{isLoading ? (
				<Skeleton className={classes.skeleton} variant="circle" animation="wave" />
			) : (
				<Avatar src={profilePicture} className={classes.profilePicture} />
			)}
		</Grid>
	);
};

export default ProfileImage;
