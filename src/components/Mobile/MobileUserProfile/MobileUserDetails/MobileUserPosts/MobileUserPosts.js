// Dependencies
import React, { useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchMoreUserPosts } from "../../../../../actions/users";

// Components
import InfiniteScroll from "react-infinite-scroll-component";
import QuoteCard from "../../../../MainContent/QuoteCards/QuoteCard/QuoteCard";
import QuoteContent from "../../../../MainContent/QuoteCards/QuoteCard/QuoteContent/QuoteContent";
import FallbackImage from "../../../../UI/FallbackImage/FallbackImage";
import { Grid, Card, Typography, CircularProgress } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import PostsFallback from "../../../../../images/fallback/POSTS.webp";

const MobileUserPosts = React.forwardRef((props, ref) => {
	const {
		posts: quotes,
		hasMorePosts,
		username,
		postSearchStatus,
		postStatus
	} = useSelector(state => state.userProfile, shallowEqual);
	const { displayMode } = props;

	const dispatch = useDispatch();
	const classes = useStyles();

	const isLoading = useMemo(() => postStatus === "loading", [postStatus]);

	// User Posts Content
	let userPostContent = useMemo(
		() =>
			quotes.length === 0 && postSearchStatus === "idle" && !isLoading ? (
				<FallbackImage image={PostsFallback} text="No post found." isPosts />
			) : quotes.length === 0 && postSearchStatus !== "idle" ? (
				<Typography variant="body2" className={classes.noPostFound}>
					No post found.
				</Typography>
			) : (
				<InfiniteScroll
					dataLength={quotes.length}
					next={() => dispatch(fetchMoreUserPosts({ username, current: quotes.length }))}
					hasMore={hasMorePosts}
					loader={
						<Grid container justifyContent="center" alignItems="center">
							<Typography color="primary" variant="body2" component="div">
								<CircularProgress size={10} component="span" />
								&nbsp; Loading more posts
							</Typography>
						</Grid>
					}
					className={classes.infiniteScroll}
				>
					{!isLoading &&
						quotes.map((quote, index) => (
							<Grid item key={quote.quotesId || index} xs={12}>
								{displayMode === "full" ? (
									<QuoteCard mobile quotes={quote} />
								) : (
									<Card className={classes.cardContainer}>
										<QuoteContent quotes={quote} />
									</Card>
								)}
							</Grid>
						))}
					{isLoading &&
						[...Array(4).keys()].map(index => (
							<Grid item key={index} xs={12}>
								{displayMode === "full" ? (
									<QuoteCard mobile quotes={index} status={postStatus} />
								) : (
									<Card className={classes.cardContainer}>
										<QuoteContent quotes={index} status={postStatus} />
									</Card>
								)}
							</Grid>
						))}
					;
				</InfiniteScroll>
			),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[postSearchStatus, postStatus, quotes, dispatch, hasMorePosts, username, displayMode]
	);

	return (
		<Grid
			container
			ref={ref}
			className={`${classes.userPosts} ${quotes.length === 0 ? classes.noPost : ""}`}
		>
			{userPostContent}
		</Grid>
	);
});

export default React.memo(MobileUserPosts);
