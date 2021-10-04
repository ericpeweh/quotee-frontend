// Dependencies
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { resetSearch } from "../../store/slices/searchSlice";

// Components
import { Grid } from "@material-ui/core";
import QuoteCards from "./QuoteCards/QuoteCards";
import SearchForm from "./SearchForm/SearchForm";

// Styles
import useStyles from "./styles";

const MainContent = () => {
	const searchQuery = useSelector(state => state.search.searchQuery);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	useEffect(() => {
		dispatch(resetSearch());
	}, [dispatch]);

	const searchHandler = () => {
		history.push(`/p/search?quotes=${searchQuery}&advanced=false`);
	};

	return (
		<Grid container className={classes.mainContentContainer}>
			<SearchForm onSearch={searchHandler} />
			<QuoteCards />
		</Grid>
	);
};

export default MainContent;
