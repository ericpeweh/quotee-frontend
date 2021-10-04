// Components
import Masonry from "react-masonry-css";
import QuoteCard from "../../MainContent/QuoteCards/QuoteCard/QuoteCard";

// Styles
import useStyles from "./styles";

const SearchResult = ({ mobile, results, status }) => {
	const classes = useStyles();
	const quotes = results;

	const breakpoints = {
		default: 2,
		850: 1
	};

	const isLoading = status === "loading";

	return (
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
						<QuoteCard quotes={index} status={status} />
					</div>
				))}
		</Masonry>
	);
};

export default SearchResult;
