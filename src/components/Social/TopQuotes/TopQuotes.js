// Dependencies
import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchTopQuotes } from "../../../actions/posts";

// Components
import { Grid } from "@material-ui/core";
import Quote from "./Quote/Quote";

// Styles
import useStyles from "./styles";
import { Skeleton } from "@material-ui/lab";

const TopQuotes = () => {
	const { posts: quotes, postsStatus } = useSelector(state => state.social, shallowEqual);
	const { status: authStatus } = useSelector(state => state.auth, shallowEqual);
	const isLoading = postsStatus === "loading";
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		if (authStatus === "succeeded" && postsStatus !== "succeeded" && postsStatus !== "loading") {
			dispatch(fetchTopQuotes());
		}
	}, [dispatch, authStatus, postsStatus]);

	return (
		<Grid container className={classes.topQuotesContainer} spacing={2}>
			{!isLoading &&
				quotes.map((quote, index) => (
					<Quote
						key={index}
						text={quote.quotes}
						author={quote.author}
						color={`quote${index}`}
						quotesId={quote.quotesId}
					/>
				))}
			{isLoading &&
				[...Array(4).keys()].map(index => (
					<Grid item key={index} className={classes.quotesContainerSkeleton} xs={12} md={6}>
						<Skeleton variant="rect" animation="wave" className={classes.quotesSkeleton} />
					</Grid>
				))}
		</Grid>
	);
};

export default TopQuotes;
