// Dependencies
import PullToRefresh from "react-simple-pull-to-refresh";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchMorePosts } from "../../../actions/posts";
import { loadNewPosts } from "../../../store/slices/postsSlice";

// Components
import { Grid, CircularProgress, Button } from "@material-ui/core";
import QuoteCard from "../../MainContent/QuoteCards/QuoteCard/QuoteCard";

// Styles
import useStyles from "./styles";

const MobileContent = () => {
	const { status, posts, hasMorePosts } = useSelector(state => state.posts, shallowEqual);
	const hasNewPosts = useSelector(state => state.posts.hasNewPosts);
	const tempPosts = useSelector(state => state.tempPosts.tempPosts);
	const dispatch = useDispatch();
	const classes = useStyles();
	const quotes = posts;

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchPosts());
		}
	}, [status, dispatch]);

	const isLoading = status === "loading";

	const loadNewPostHandler = () => {
		window.scrollTo(0, 0);
		if (hasNewPosts) {
			dispatch(loadNewPosts({ posts: tempPosts }));
		}
	};

	return (
		<Grid container className={classes.contentContainer}>
			{hasNewPosts && (
				<Grid container justifyContent="center">
					<Button
						variant="contained"
						className={classes.newPostsButton}
						onClick={loadNewPostHandler}
					>
						New Posts
					</Button>
				</Grid>
			)}
			<PullToRefresh
				pullDownThreshold={100}
				maxPullDownDistance={100}
				refreshingContent={
					<CircularProgress size={30} color="primary" className={classes.loadingSpinner} />
				}
				pullingContent={
					<Grid container justifyContent="center" alignItems="center">
						<CircularProgress size={30} color="primary" className={classes.loadingSpinner} />
					</Grid>
				}
				onRefresh={() => dispatch(fetchPosts())}
			>
				<InfiniteScroll
					dataLength={quotes.length}
					next={() => dispatch(fetchMorePosts(quotes.length))}
					hasMore={hasMorePosts}
					loader={
						<Grid
							container
							justifyContent="center"
							alignItems="center"
							className={classes.infiniteScrollContainer}
						>
							<CircularProgress
								size={30}
								color="secondary"
								className={classes.infiniteScrollSpinner}
							/>
						</Grid>
					}
				>
					{!isLoading &&
						quotes.map((quote, index) => (
							<Grid item xs={12} key={quote?.quotesId}>
								<QuoteCard mobile quotes={quote} />
							</Grid>
						))}
					{isLoading &&
						[...Array(4).keys()].map(index => (
							<QuoteCard mobile quotes={index} status={status} key={index} />
						))}
				</InfiniteScroll>
			</PullToRefresh>
		</Grid>
	);
};

export default React.memo(MobileContent);
