// Dependencies
import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchTopUsers } from "../../../../../actions/users";

// Components
import User from "./User/User";
import { Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";
import { Skeleton } from "@material-ui/lab";

const Users = () => {
	const { status: authStatus } = useSelector(state => state.auth, shallowEqual);
	const { topUsersStatus, topUsers } = useSelector(state => state.social, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();
	const users = topUsers;

	const isLoading = topUsersStatus === "loading";

	useEffect(() => {
		if (authStatus === "succeeded" && topUsersStatus !== "succeeded") {
			dispatch(fetchTopUsers());
		}
	}, [dispatch, authStatus, topUsersStatus]);

	return (
		<Grid container item className={classes.usersContainer} spacing={1}>
			{!isLoading &&
				users.map((user, index) => <User key={index} index={`user${index}`} user={user} />)}
			{isLoading &&
				[...Array(4).keys()].map(index => (
					<Grid item xs={6} key={index}>
						<Skeleton variant="rect" animation="wave" className={classes.userCardSkeleton} />
					</Grid>
				))}
		</Grid>
	);
};

export default Users;
