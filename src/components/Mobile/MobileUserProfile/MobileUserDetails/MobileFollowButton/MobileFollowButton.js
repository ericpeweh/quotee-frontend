// Components
import { Button } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const MobileFollowButton = ({ onFollow, isFollowingYou, followed }) => {
	const classes = useStyles();

	return (
		// <Button color="primary" variant="contained" className={classes.followButton} onClick={onFollow}>
		// 	Follow
		// </Button>
		<Button
			variant={followed ? "contained" : "outlined"}
			color="primary"
			className={`${followed ? classes.followingButton : classes.followButton}`}
			disableElevation
			size="small"
			onClick={onFollow}
		>
			{followed ? "Unfollow" : isFollowingYou ? "Follow back" : "Follow"}
		</Button>
	);
};

export default MobileFollowButton;
