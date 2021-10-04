// Dependencies
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router";
import { fetchPost } from "../../actions/posts";
import { resetPost } from "../../store/slices/postSlice";

// Components
import QuoteCard from "../MainContent/QuoteCards/QuoteCard/QuoteCard";
import { Grid, Button, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

// Images
import ErrorImage from "../../images/fallback/ERROR.webp";

const PostDetails = ({ mobile }) => {
	const { post: quotes, status, postMessage } = useSelector(state => state.post, shallowEqual);
	const { postId } = useParams();
	const location = useLocation();
	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();

	const isLoading = status === "loading";

	// Get URL Params
	const getQuery = useCallback(() => {
		return new URLSearchParams(location.search);
	}, [location]);
	const fromLink = getQuery().get("source") === "copy_link";

	useEffect(() => {
		dispatch(resetPost());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchPost(postId));
	}, [dispatch, postId]);

	const backToMenuHandler = () => {
		if (fromLink) {
			history.push("/");
		} else {
			history.goBack();
		}
	};

	return (
		<Grid
			container
			className={classes.postDetails}
			direction="column"
			justifyContent="center"
			alignItems="center"
			spacing={mobile ? 0 : 3}
		>
			<Button
				startIcon={<KeyboardBackspaceIcon />}
				size="small"
				className={classes.backButton}
				onClick={backToMenuHandler}
			>
				Go Back
			</Button>
			<Grid item xs={12} md={8} className={classes.cardContainer}>
				{!isLoading && quotes && (
					<QuoteCard quotes={quotes} mobile={mobile} isDetailsPage status={status} />
				)}
				{isLoading && <QuoteCard quotes={0} mobile={mobile} isDetailsPage status={status} />}
				{!isLoading && status === "failed" && (
					<Grid container item justifyContent="center" direction="column" alignItems="center">
						<img src={ErrorImage} className={classes.errorImage} alt="error" />
						<Typography className={classes.errorText}>{postMessage}</Typography>
					</Grid>
				)}
			</Grid>
		</Grid>
	);
};

export default PostDetails;
