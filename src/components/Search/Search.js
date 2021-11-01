// Dependencies
import moment from "moment";
import { useCallback, useEffect, useMemo } from "react";
import { useLocation, useHistory } from "react-router";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchPostsBySearchQuotes, fetchPostsByAdvancedSearch } from "../../actions/posts";
import {
	changeSearch,
	changeAuthor,
	setTags,
	changeFromDate,
	changeToDate
} from "../../store/slices/searchSlice";

// Components
import { Grid, Typography } from "@material-ui/core";
import SearchForm from "../MainContent/SearchForm/SearchForm";
import TopBar from "../UI/TopBar/TopBar";
import SearchResult from "./SearchResult/SearchResult";

// Styles
import useStyles from "./styles";

const Search = ({ mobile }) => {
	const {
		searchStatus,
		posts: searchResults,
		searchQuery
	} = useSelector(state => state.search, shallowEqual);
	const history = useHistory();
	const dispatch = useDispatch();
	const location = useLocation();
	const classes = useStyles();

	// Get URL Params
	const getQuery = useCallback(() => {
		return new URLSearchParams(location.search);
	}, [location]);
	const quotesQuery = getQuery().get("quotes");
	const authorQuery = getQuery().get("author");
	const tagsQuery = getQuery().get("tags");
	const fromDateQuery = getQuery().get("fromDate");
	const toDateQuery = getQuery().get("toDate");
	const advancedSearch = getQuery().get("advanced");

	const isAdvancedSearch = advancedSearch === "true";
	const isLoading = searchStatus === "loading";

	const queryData = useMemo(
		() => ({
			quotes: quotesQuery || "",
			author: authorQuery || "",
			tags: tagsQuery || "",
			fromDate: fromDateQuery || "01/01/2021",
			toDate: toDateQuery || moment.utc().format("DD/MM/YYYY")
		}),
		[quotesQuery, authorQuery, tagsQuery, fromDateQuery, toDateQuery]
	);

	useEffect(() => {
		// Set search slice value from query
		dispatch(changeSearch(quotesQuery || ""));
		dispatch(changeAuthor(authorQuery || ""));
		dispatch(setTags(!tagsQuery ? [] : tagsQuery.split(",")));
		dispatch(changeFromDate(fromDateQuery || "01/01/2021"));
		dispatch(changeToDate(toDateQuery || moment.utc().format("DD/MM/YYYY")));

		// Do search automatically
		if (!isAdvancedSearch) {
			dispatch(fetchPostsBySearchQuotes({ query: { quotes: quotesQuery } }));
		} else {
			dispatch(
				fetchPostsByAdvancedSearch({
					query: queryData
				})
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		dispatch,
		quotesQuery,
		authorQuery,
		tagsQuery,
		fromDateQuery,
		toDateQuery,
		isAdvancedSearch,
		queryData
	]);

	const searchHandler = () => {
		history.push(`/p/search?quotes=${searchQuery}&advanced=false`);
	};

	let searchResultsText = `Showing ${searchResults.length} result${
		searchResults.length > 1 ? "s" : ""
	}`;
	if (searchResults.length === 0 && !isLoading) {
		searchResultsText = "No quotes found.";
	}
	if (isLoading) {
		searchResultsText = "Loading...";
	}

	return (
		<>
			{mobile && <TopBar title="Search results" />}
			<Grid container className={classes.searchContainer} direction="column">
				{!mobile && (
					<>
						<SearchForm onSearch={searchHandler} />
						<Typography variant="body2" className={classes.searchResultText}>
							{searchResultsText}
						</Typography>
					</>
				)}
				{mobile && searchResults.length === 0 && !isLoading && (
					<Typography variant="body2" className={classes.searchResultText}>
						{searchResultsText}
					</Typography>
				)}
				<SearchResult
					mobile={mobile}
					results={searchResults}
					status={searchStatus}
					queryData={queryData}
				/>
			</Grid>
		</>
	);
};

export default Search;
