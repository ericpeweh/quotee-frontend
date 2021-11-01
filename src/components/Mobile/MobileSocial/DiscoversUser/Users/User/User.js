// Dependencies
import { useHistory } from "react-router";

// Components
import { Avatar, Grid, Typography, ButtonBase } from "@material-ui/core";

// Utils
import formatNumber from "../../../../../../utils/formatNumber";

// Styles
import useStyles from "./styles";

const User = ({ index, user }) => {
	const history = useHistory();
	const classes = useStyles();

	const clickHandler = () => {
		window.scrollTo(0, 0);

		history.push(`/${user.username}`);
	};

	return (
		<Grid item xs={6}>
			<Grid
				item
				className={`${classes.userButton} ${classes[index]}`}
				component={ButtonBase}
				onClick={clickHandler}
			>
				<Avatar className={classes.userAvatar} src={user.profilePicture} />
				<Typography variant="h6" className={classes.username}>
					{user.username}
				</Typography>
				<Typography variant="body2">{formatNumber(user.followers)} Followers</Typography>
			</Grid>
		</Grid>
	);
};

export default User;
