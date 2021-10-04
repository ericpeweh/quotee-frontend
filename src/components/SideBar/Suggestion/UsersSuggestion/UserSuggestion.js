// Dependencies
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchUserProfile, fetchUserPosts } from "../../../../actions/users";

// Components
import { Link } from "react-router-dom";
import { Grid, CardHeader, Avatar, Card, Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

// Styles
import useStyles from "./styles";

const UserSuggestion = ({ user, onClose, status }) => {
	const { username } = useSelector(state => state.auth, shallowEqual);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	const isLoading = status === "loading";

	const scrollToTop = () => {
		window.scrollTo(0, 0);
		dispatch(fetchUserProfile(user.username));
		dispatch(fetchUserPosts(user.username));
		onClose && onClose();
	};

	const openClickHandler = () => {
		onClose && onClose();
		window.scrollTo(0, 0);
		history.push(`/${user?.username}`);
	};

	const actionButton =
		!isLoading && username !== user?.username ? (
			<Button
				size="small"
				color="secondary"
				variant="contained"
				className={classes.openButton}
				onClick={openClickHandler}
			>
				Open
			</Button>
		) : (
			<></>
		);

	return (
		<Grid item className={classes.users}>
			<Card className={classes.card} elevation={0}>
				<CardHeader
					avatar={
						isLoading ? (
							<Skeleton animation="wave" variant="circle" className={classes.avatarSkeleton} />
						) : (
							<Link to={`/${user?.username}`} onClick={scrollToTop}>
								<Avatar className={classes.avatar} src={user?.profilePicture} />
							</Link>
						)
					}
					action={actionButton}
					title={
						<Link
							to={`/${user?.username}`}
							color="secondary"
							className={classes.username}
							onClick={scrollToTop}
						>
							{isLoading ? (
								<Skeleton animation="wave" variant="rect" className={classes.usernameSkeleton} />
							) : (
								user.username
							)}
						</Link>
					}
					subheader={
						isLoading ? (
							<Skeleton animation="wave" variant="rect" className={classes.quotesSkeleton} />
						) : (
							`${user?.posts} Quotes`
						)
					}
					classes={{
						subheader: classes.subHeader,
						action: classes.action,
						avatar: classes.cardAvatar
					}}
					className={classes.cardHeader}
				/>
			</Card>
		</Grid>
	);
};

export default UserSuggestion;
