// Dependencies
import { shallowEqual, useSelector } from "react-redux";

// Components
import { Grid, Typography, Avatar, Badge } from "@material-ui/core";

// Utils
import { generateGreetings } from "../../../utils/generateGreetings";

// Styles
import useStyles from "./styles";

const UserBadge = () => {
	const { username, profilePicture } = useSelector(state => state.auth, shallowEqual);
	const classes = useStyles();
	const greetings = generateGreetings();

	return (
		<Grid
			container
			className={classes.badgeContainer}
			direction="row"
			justifyContent="space-between"
			alignItems="center"
		>
			<Grid item>
				<Typography className={classes.userGreeting}>{greetings}</Typography>
				<Typography className={classes.userBadgeName} color="primary">
					{username}
				</Typography>
			</Grid>
			<Grid item className={classes.userAvatar}>
				<Badge
					color="secondary"
					variant="dot"
					badgeContent=""
					overlap="circular"
					anchorOrigin={{ vertical: "top", horizontal: "left" }}
				>
					<Avatar
						src={profilePicture}
						variant="circular"
						alt="image"
						className={classes.userProfileImage}
					/>
				</Badge>
			</Grid>
		</Grid>
	);
};

export default UserBadge;
