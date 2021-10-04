// Dependencies
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useRef, useEffect } from "react";
import { fetchUserProfile } from "../../actions/users";
import { resetUserProfile } from "../../store/slices/userProfileSlice";

// Components
import ProfileImage from "./AccountDetails/ProfileImage/ProfileImage";
import ProfileDetails from "./AccountDetails/ProfileDetails/ProfileDetails";
import ProfileDescription from "./AccountDetails/ProfileDescription/ProfileDescription";
import ProfileActions from "./AccountDetails/ProfileActions/ProfileActions";
import AccountPosts from "./AccountPosts/AccountPosts";
import { Grid, Paper, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import ErrorImage from "../../images/fallback/ERROR.webp";

const UserProfile = () => {
	const { status: authStatus } = useSelector(state => state.auth, shallowEqual);
	const { profileMessage, status } = useSelector(state => state.userProfile, shallowEqual);
	const classes = useStyles();
	const dispatch = useDispatch();
	const userPostsRef = useRef();
	const { username } = useParams();

	useEffect(() => {
		dispatch(resetUserProfile());
	}, [dispatch]);

	useEffect(() => {
		if (authStatus === "succeeded") {
			dispatch(fetchUserProfile(username));
		}
	}, [dispatch, username, authStatus]);

	const scrollToPostHandler = () => {
		userPostsRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<Paper
			className={`${classes.userProfileContainer} ${
				status === "failed" ? classes.failedContainer : ""
			}`}
			elevation={0}
		>
			{status !== "failed" && (
				<>
					<Grid
						container
						className={classes.userDetailsContainer}
						direction="row"
						alignItems="center"
						justifyContent="center"
					>
						<ProfileImage />
						<Grid item container xs={8} direction="column" className={classes.profileComponent}>
							<ProfileDetails />
							<ProfileDescription />
							<ProfileActions scrollToPosts={scrollToPostHandler} />
						</Grid>
					</Grid>
					<AccountPosts ref={userPostsRef} />
				</>
			)}
			{status === "failed" && (
				<Grid
					container
					item
					justifyContent="center"
					direction="column"
					alignItems="center"
					className={classes.failedContainer}
				>
					<img src={ErrorImage} className={classes.errorImage} alt="error" />
					<Typography className={classes.errorText}>{profileMessage}</Typography>
				</Grid>
			)}
		</Paper>
	);
};

export default UserProfile;
