// Dependencies
import { shallowEqual, useSelector } from "react-redux";

// Components
import { Avatar, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

// Styles
import useStyles from "./styles";

const MobileProfilePicture = () => {
	const { profilePicture, status } = useSelector(state => state.userProfile, shallowEqual);
	const classes = useStyles();

	const isLoading = status === "loading";

	return (
		<Grid item className={classes.profilePictureContainer}>
			{isLoading ? (
				<Skeleton variant="circle" animation="wave" className={classes.profilePictureSkeleton} />
			) : (
				<Avatar src={profilePicture} className={classes.mobileProfilePicture} />
			)}
		</Grid>
	);
};

export default MobileProfilePicture;
