// Dependencies
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import {
	closeModal,
	openModal,
	changeWhichModal,
	followerAndFollowingQueryChange
} from "../../../../store/slices/userProfileSlice";
import {
	fetchPopulatedFollowing,
	fetchPopulatedFollowers,
	fetchMorePopulatedFollowing,
	fetchMorePopulatedFollowers,
	searchPopulatedFollowing,
	searchPopulatedFollowers
} from "../../../../actions/users";

// Components
import Action from "./Action/Action";
import Modal from "../../../UI/Modal/Modal";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

// Utils
import formatNumber from "../../../../utils/formatNumber";

// Styles
import useStyles from "./styles";

const ProfileActions = ({ scrollToPosts }) => {
	const {
		following,
		followers,
		isProfileModalOpen,
		whichModal,
		populateFollowersStatus,
		populateFollowingStatus,
		followerAndFollowingQuery,
		postAmount,
		username,
		status: profileStatus,
		populatedFollowers,
		populatedFollowing,
		hasMoreFollowing,
		hasMoreFollowers
	} = useSelector(state => state.userProfile, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const isLoading = profileStatus === "loading";

	let users = [];
	let status = "";
	let searchHandler = () => {};
	let fetchMoreHandler = () => {};
	let hasMore = "";
	if (whichModal === "Followers") {
		users = populatedFollowers;
		status = populateFollowersStatus;
		searchHandler = searchQuery =>
			dispatch(searchPopulatedFollowers({ username, usernameQuery: searchQuery }));
		fetchMoreHandler = current => dispatch(fetchMorePopulatedFollowers({ username, current }));
		hasMore = hasMoreFollowers;
	} else {
		users = populatedFollowing;
		status = populateFollowingStatus;
		searchHandler = searchQuery =>
			dispatch(searchPopulatedFollowing({ username, usernameQuery: searchQuery }));
		fetchMoreHandler = current => dispatch(fetchMorePopulatedFollowing({ username, current }));
		hasMore = hasMoreFollowing;
	}

	const followersHandler = () => {
		dispatch(fetchPopulatedFollowers(username));
		dispatch(openModal());
	};

	const followingHandler = () => {
		dispatch(fetchPopulatedFollowing(username));
		dispatch(openModal());
	};

	return (
		<>
			{isLoading ? (
				<Skeleton className={classes.skeleton} variant="rect" animation="wave" />
			) : (
				<Grid item container xs={7} sm={10} lg={7} className={classes.buttonContainer}>
					<Action
						type="quotesButton"
						amount={postAmount}
						amountDescription="Quotes"
						onOpenModal={scrollToPosts}
					/>
					<Action
						amount={formatNumber(followers.length)}
						amountDescription="Followers"
						onOpenModal={followersHandler}
						onChangeModal={type => dispatch(changeWhichModal(type))}
					/>
					<Action
						amount={formatNumber(following.length)}
						type="followingButton"
						amountDescription="Following"
						onOpenModal={followingHandler}
						onChangeModal={type => dispatch(changeWhichModal(type))}
					/>
				</Grid>
			)}
			<Modal
				open={isProfileModalOpen}
				onClose={() => dispatch(closeModal())}
				title={whichModal}
				users={users}
				status={status}
				onSearch={searchHandler}
				searchQuery={followerAndFollowingQuery}
				queryChange={newQuery => dispatch(followerAndFollowingQueryChange(newQuery))}
				onFetchMore={fetchMoreHandler}
				hasMore={hasMore}
			/>
		</>
	);
};

export default ProfileActions;
