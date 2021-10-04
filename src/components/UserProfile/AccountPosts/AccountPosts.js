// Dependencies
import React, { useEffect, useCallback, useMemo } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchMoreUserPosts, fetchUserPosts, searchUserPosts } from "../../../actions/users";
import { postSearchQueryChange } from "../../../store/slices/userProfileSlice";

// Components
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import QuoteCard from "../../MainContent/QuoteCards/QuoteCard/QuoteCard";
import SearchBar from "material-ui-search-bar";
import FallbackImage from "../../UI/FallbackImage/FallbackImage";
import { Paper, Grid, Typography, Divider, CircularProgress } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import PostsFallback from "../../../images/fallback/POSTS.webp";

const AccountPosts = React.forwardRef((props, ref) => {
	const {
		posts: quotes,
		postSearchQuery,
		postSearchStatus,
		hasMorePosts,
		postStatus
	} = useSelector(state => state.userProfile, shallowEqual);
	const { username } = useParams();
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		dispatch(fetchUserPosts(username));
	}, [dispatch, username]);

	const searchHandler = useCallback(
		searchQuery => {
			dispatch(searchUserPosts({ username, quotes: searchQuery }));
		},
		[dispatch, username]
	);

	const searchQueryChangeHandler = useCallback(
		newQuery => {
			dispatch(postSearchQueryChange(newQuery));
		},
		[dispatch]
	);

	const isLoading = useMemo(() => postStatus === "loading", [postStatus]);

	const breakpoints = useMemo(
		() => ({
			default: 2,
			1000: 1
		}),
		[]
	);

	// User Posts Content
	let userPostContent = useMemo(
		() =>
			quotes.length === 0 && postSearchStatus === "idle" && !isLoading ? (
				<FallbackImage image={PostsFallback} text="No post yet." isPosts />
			) : quotes.length === 0 && postSearchStatus === "succeeded" && !isLoading ? (
				<Typography variant="body2" className={classes.noPostFound}>
					No post found.
				</Typography>
			) : (
				<InfiniteScroll
					dataLength={quotes.length}
					next={() => dispatch(fetchMoreUserPosts(quotes.length))}
					hasMore={hasMorePosts}
					loader={
						<Grid container justifyContent="center" alignItems="center">
							<Typography color="primary" variant="body2">
								<CircularProgress size={10} />
								&nbsp; Loading more posts
							</Typography>
						</Grid>
					}
				>
					<Masonry
						breakpointCols={breakpoints}
						className={classes.masonryGrid}
						columnClassName={classes.masonryGridColumn}
					>
						{!isLoading &&
							quotes.map((quote, index) => (
								<div key={quote.quoteId || index}>
									<QuoteCard quotes={quote} />
								</div>
							))}
						{isLoading &&
							[...Array(4).keys()].map(index => (
								<div key={index}>
									<QuoteCard quotes={index} status={postStatus} />
								</div>
							))}
					</Masonry>
				</InfiniteScroll>
			),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[postSearchStatus, isLoading, breakpoints, postStatus, quotes, dispatch, hasMorePosts]
	);

	return (
		<Paper elevation={0} className={classes.accountPostsContainer} ref={ref}>
			{(quotes.length !== 0 || postSearchStatus !== "idle") && (
				<>
					<Grid container direction="row" alignItems="center" justifyContent="space-between">
						<Typography component={Grid} item className={classes.postsTitle} color="secondary">
							Quotes
						</Typography>
						<Grid item className={classes.search}>
							<SearchBar
								className={classes.searchBar}
								onRequestSearch={searchHandler}
								onCancelSearch={() => searchQueryChangeHandler("")}
								onChange={searchQueryChangeHandler}
								value={postSearchQuery}
							/>
						</Grid>
					</Grid>
					<Divider className={classes.divider} />
				</>
			)}
			{userPostContent}
		</Paper>
	);
});

export default React.memo(AccountPosts);
