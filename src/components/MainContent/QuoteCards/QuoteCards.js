// Dependencies
import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

// Components
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import QuoteCard from "./QuoteCard/QuoteCard";

import { Paper, Grid, CircularProgress, Typography } from "@material-ui/core";

// Actions
import { fetchPosts, fetchMorePosts } from "../../../actions/posts";

// Styles
import useStyles from "./styles";

const QuoteCards = () => {
	const { posts, status, hasMorePosts } = useSelector(state => state.posts, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchPosts());
		}
	}, [status, dispatch]);

	const isLoading = status === "loading";
	const breakpoints = {
		default: 2,
		1920: 1
	};

	return (
		<Paper className={classes.paper} elevation={0}>
			<InfiniteScroll
				dataLength={posts?.length}
				next={() => dispatch(fetchMorePosts(posts?.length))}
				hasMore={hasMorePosts}
				loader={
					<Grid container justifyContent="center" alignItems="center">
						<Typography color="primary" variant="body2" component="div">
							<CircularProgress size={10} />
							&nbsp; Loading more quotes
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
						posts.map((post, index) => (
							<div key={post.quotesId || index}>
								<QuoteCard quotes={post} status={status} />
							</div>
						))}
					{isLoading &&
						[...Array(4).keys()].map(index => (
							<div key={index}>
								<QuoteCard quotes={index} status={status} />
							</div>
						))}
				</Masonry>
			</InfiniteScroll>
		</Paper>
	);
};

export default React.memo(QuoteCards);
