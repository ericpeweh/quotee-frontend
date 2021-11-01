// Dependencies
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { snackbarChange, snackbarMessageChange } from "../../../../store/slices/modalSlice";
import { followUser } from "../../../../actions/users";
import {
	reportModalChange,
	resetReport,
	usernameChange
} from "../../../../store/slices/userReportSlice";

// Components
import MenuElement from "../../../UI/MenuElement/MenuElement";
import { Skeleton } from "@material-ui/lab";
import { Grid, Typography, Button, ButtonBase, Chip } from "@material-ui/core";

// Icons
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

// Styles
import useStyles from "./styles";

const ProfileDetails = () => {
	const { username, userId, status } = useSelector(state => state.userProfile, shallowEqual);
	const {
		username: authUsername,
		userId: authUserId,
		following: userFollowing,
		followers
	} = useSelector(state => state.auth, shallowEqual);
	const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(null);
	const [following, setFollowing] = useState(userFollowing);

	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	const followed = following.find(follow => {
		return follow === userId;
	});

	useEffect(() => {
		setFollowing(userFollowing);
	}, [userFollowing]);

	const isFollowingYou = followers.find(follow => follow === userId);

	const isLoading = status === "loading";

	const moreMenuOpenHandler = event => {
		setIsMoreMenuOpen(event.currentTarget);
	};

	const moreMenuCloseHandler = () => {
		setIsMoreMenuOpen(null);
	};

	const followHandler = () => {
		if (userId !== authUserId) dispatch(followUser(userId));

		if (followed) {
			setFollowing(prevFollowing => prevFollowing.filter(id => id !== userId));
		} else {
			setFollowing(prevFollowing => [...prevFollowing, userId]);
		}
	};

	// List Actions
	const listActions = [
		{
			text: "Copy Profile URL",
			action: () => {
				navigator.clipboard.writeText(window.location.href);
				moreMenuCloseHandler();
				dispatch(snackbarMessageChange("Profile URL copied."));
				dispatch(snackbarChange(true));
			}
		}
	];

	if (authUsername !== username) {
		listActions.unshift({
			text: "Report User",
			action: () => {
				dispatch(resetReport());
				dispatch(usernameChange(username));
				dispatch(reportModalChange(true));
			},
			color: "primary"
		});
	}

	if (authUsername === username) {
		listActions.push({
			text: "Edit Profile",
			action: () => history.push("/settings/account")
		});
	}

	return (
		<Grid
			item
			container
			direction="row"
			alignItems="center"
			className={classes.profileDetailsContainer}
			sm={10}
		>
			<Grid item>
				{isLoading ? (
					<Skeleton animation="wave" className={classes.skeleton} />
				) : (
					<Typography variant="h5" className={classes.username} color="secondary">
						{username}
					</Typography>
				)}
			</Grid>
			{!isLoading && authUsername !== username && (
				<Grid item className={classes.followButtonContainer}>
					<Button
						variant={followed ? "contained" : "outlined"}
						color="primary"
						className={`${followed ? classes.followingButton : classes.followButton}`}
						disableElevation
						size="small"
						onClick={followHandler}
					>
						{followed ? "Unfollow" : isFollowingYou ? "Follow back" : "Follow"}
					</Button>
				</Grid>
			)}
			{!isLoading && authUsername === username && (
				<Grid item className={classes.myProfileContainer}>
					<Chip color="secondary" className={classes.myProfileBadge} label="MY PROFILE" />
				</Grid>
			)}
			{!isLoading && (
				<>
					<Grid item className={classes.moreButtonContainer}>
						<ButtonBase className={classes.moreButton} onClick={moreMenuOpenHandler}>
							<MoreHorizIcon />
						</ButtonBase>
					</Grid>
					<MenuElement
						anchorEl={isMoreMenuOpen}
						onCloseMenu={moreMenuCloseHandler}
						menuLists={listActions}
					/>
				</>
			)}
		</Grid>
	);
};

export default ProfileDetails;
