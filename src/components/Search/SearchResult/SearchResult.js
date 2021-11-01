// Dependencies
import { useDispatch, useSelector } from "react-redux";

// Components
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import Masonry from "react-masonry-css";
import QuoteCard from "../../MainContent/QuoteCards/QuoteCard/QuoteCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMorePostsBySearchQuotes } from "../../../actions/posts";

// Styles
import useStyles from "./styles";

const SearchResult = ({ mobile, results, status, queryData }) => {
	const hasMorePosts = useSelector(state => state.search.hasMore);
	const classes = useStyles();
	const dispatch = useDispatch();
	const quotes = results;

	const breakpoints = {
		default: 2,
		850: 1
	};

	const isLoading = status === "loading";

	return (
		<InfiniteScroll
			dataLength={quotes?.length}
			next={() =>
				dispatch(
					fetchMorePostsBySearchQuotes({
						query: queryData,
						current: quotes?.length
					})
				)
			}
			hasMore={hasMorePosts}
			loader={
				<Grid
					container
					justifyContent="center"
					alignItems="center"
					className={classes.loadingMoreQuotes}
				>
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
					quotes.map((quote, index) => (
						<div key={index}>
							<QuoteCard mobile={mobile} quotes={quote} status={status} />
						</div>
					))}
				{isLoading &&
					[...Array(4).keys()].map(index => (
						<div key={index}>
							<QuoteCard quotes={index} status={status} mobile={mobile} />
						</div>
					))}
			</Masonry>
		</InfiniteScroll>
	);
};

export default SearchResult;
