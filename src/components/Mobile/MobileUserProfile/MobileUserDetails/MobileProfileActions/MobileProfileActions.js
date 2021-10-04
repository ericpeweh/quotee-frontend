// Dependencies
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useRouteMatch } from "react-router";
import { fetchPopulatedFollowers, fetchPopulatedFollowing } from "../../../../../actions/users";

// Components
import MobileProfileAction from "./MobileProfileAction/MobileProfileAction";
import { Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const MobileProfileActions = ({ onScrollPosts }) => {
	const { username, postAmount, followers, following, status } = useSelector(
		state => state.userProfile,
		shallowEqual
	);
	const { url } = useRouteMatch();
	const dispatch = useDispatch();
	const classes = useStyles();

	const followersClickHandler = () => {
		dispatch(fetchPopulatedFollowers(username));
	};

	const followingClickHandler = () => {
		dispatch(fetchPopulatedFollowing(username));
	};

	return (
		<>
			<Grid container direction="row" className={classes.profileActionContainer}>
				<MobileProfileAction
					amount={postAmount}
					amountDescription="Quotes"
					onScrollPosts={onScrollPosts}
					status={status}
				/>
				<MobileProfileAction
					amount={followers.length}
					amountDescription="Followers"
					link={`${url}/followers`}
					onButtonClick={followersClickHandler}
					status={status}
				/>
				<MobileProfileAction
					amount={following.length}
					amountDescription="Following"
					link={`${url}/following`}
					onButtonClick={followingClickHandler}
					status={status}
				/>
			</Grid>
		</>
	);
};

export default MobileProfileActions;
