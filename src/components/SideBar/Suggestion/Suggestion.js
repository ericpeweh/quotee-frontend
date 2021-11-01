// Components
import { Grid, Typography } from "@material-ui/core";

// Dependencies
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchUserSuggestion } from "../../../actions/users";

// Styles
import useStyles from "./styles";

// Images
import UserSuggestion from "./UsersSuggestion/UserSuggestion";

const Suggestion = () => {
	const { users, status } = useSelector(state => state.userSuggestion, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		if (status !== "succeeded") {
			dispatch(fetchUserSuggestion());
		}
	}, [dispatch, status]);

	return (
		<Grid item container className={classes.suggestionContainer} direction="column">
			<Grid item className={classes.suggestion}>
				<Typography color="textSecondary" variant="body1">
					Suggestions For You
				</Typography>
			</Grid>
			<Grid
				item
				container
				className={classes.usersContainer}
				justifyContent="space-between"
				direction="column"
			>
				{status !== "loading" &&
					users.map(user => <UserSuggestion key={user.username} user={user} status={status} />)}
				{status === "loading" &&
					[...Array(6).keys()].map(index => (
						<UserSuggestion key={index} user={index} status={status} />
					))}
			</Grid>
		</Grid>
	);
};

export default Suggestion;
