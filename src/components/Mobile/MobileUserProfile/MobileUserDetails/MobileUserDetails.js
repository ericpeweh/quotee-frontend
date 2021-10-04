// Dependencies
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { fetchUserPosts, fetchUserProfile, followUser } from "../../../../actions/users";

// Components
import PullToRefresh from "react-simple-pull-to-refresh";
import MobileProfilePicture from "./MobileProfilePicture/MobileProfilePicture";
import MobileProfileName from "./MobileProfileName/MobileProfileName";
import MobileProfileActions from "./MobileProfileActions/MobileProfileActions";
import MobileUserPosts from "./MobileUserPosts/MobileUserPosts";
import MobilePostAction from "./MobilePostAction/MobilePostAction";
import MobileFollowButton from "./MobileFollowButton/MobileFollowButton";
import MobileMyProfileBadge from "./MobileMyProfileBadge/MobileMyProfileBadge";
import { Grid, CircularProgress } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const MobileUserDetails = () => {
	const {
		userId,
		posts: quotes,
		postSearchStatus,
		status,
		postStatus
	} = useSelector(state => state.userProfile, shallowEqual);
	const {
		following: userFollowing,
		followers,
		userId: authUserId,
		status: authStatus
	} = useSelector(state => state.auth, shallowEqual);
	const [displayMode, setDisplayMode] = useState("full");
	const [following, setFollowing] = useState(userFollowing);
	const userPostsRef = useRef();
	const authUsername = useSelector(state => state.auth.username);
	const { username } = useParams();
	const dispatch = useDispatch();
	const classes = useStyles();

	const followed = following.find(follow => follow === userId);
	const isFollowingYou = followers.find(follow => follow === userId);

	const isUser = authUsername === username;
	const isLoading = status === "loading";

	useEffect(() => {
		if (
			postStatus !== "succeeded" &&
			postSearchStatus !== "loading" &&
			authStatus === "succeeded"
		) {
			dispatch(fetchUserPosts(username));
		}
	}, [dispatch, username, postStatus, postSearchStatus, authStatus]);

	const displayModeChangeHandler = (event, newDisplayMode) => {
		if (newDisplayMode !== null) {
			setDisplayMode(newDisplayMode);
		}
	};

	const scrollToPostsHandler = () => {
		userPostsRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const followHandler = () => {
		if (userId !== authUserId) dispatch(followUser(userId));

		if (followed) {
			setFollowing(prevFollowing => prevFollowing.filter(id => id !== userId));
		} else {
			setFollowing(prevFollowing => [...prevFollowing, userId]);
		}
	};

	return (
		<Grid
			container
			item
			direction="column"
			alignItems="center"
			className={classes.userDetailsContainer}
		>
			<PullToRefresh
				pullDownThreshold={100}
				maxPullDownDistance={100}
				refreshingContent={
					<CircularProgress size={30} color="primary" className={classes.loadingSpinner} />
				}
				pullingContent={
					<Grid container justifyContent="center" alignItems="center">
						<CircularProgress size={30} color="primary" className={classes.loadingSpinner} />
					</Grid>
				}
				onRefresh={() => {
					dispatch(fetchUserPosts(username));
					dispatch(fetchUserProfile(username));

					return new Promise((resolve, reject) => {
						resolve("OK");
					});
				}}
			>
				<Grid
					container
					item
					direction="column"
					alignItems="center"
					className={classes.mobileUserDetails}
				>
					<MobileProfilePicture />
					<MobileProfileName />
					{isUser
						? !isLoading && <MobileMyProfileBadge />
						: !isLoading && (
								<MobileFollowButton
									onFollow={followHandler}
									isFollowingYou={isFollowingYou}
									followed={followed}
								/>
						  )}
					<MobileProfileActions onScrollPosts={scrollToPostsHandler} />
					{(quotes.length !== 0 || postSearchStatus !== "idle") && (
						<MobilePostAction onChangeMode={displayModeChangeHandler} displayMode={displayMode} />
					)}
					<MobileUserPosts displayMode={displayMode} ref={userPostsRef} />
				</Grid>
			</PullToRefresh>
		</Grid>
	);
};

export default MobileUserDetails;
