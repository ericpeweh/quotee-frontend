// Dependencies
import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { changeSearch, openSearchModal, closeSearchModal } from "../../../store/slices/searchSlice";

// Components
import SearchBar from "material-ui-search-bar";
import AdvancedSearchModal from "./AdvancedSearchModal/AdvancedSearchModal";
import { Paper, IconButton, Tooltip, Zoom, Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import AppsIcon from "@material-ui/icons/Apps";

const SearchForm = ({ mobile, onSearch }) => {
	const { searchQuery, isSearchModalOpen } = useSelector(state => state.search, shallowEqual);
	const [hideSearchBar, setHideSearchBar] = useState(false);
	const [focusSearchBar, setFocusSearchBar] = useState(false);
	const paperRef = useRef();
	const dispatch = useDispatch();
	const classes = useStyles();

	const searchQueryHandler = newQuery => {
		dispatch(changeSearch(newQuery));
	};

	const cancelSearchHandler = () => {
		dispatch(changeSearch(""));
	};

	useEffect(() => {
		const scrollHandler = () => setHideSearchBar(window.scrollY > 50);

		window.addEventListener("scroll", scrollHandler);

		return () => window.removeEventListener("scroll", scrollHandler);
	}, [focusSearchBar]);

	return (
		<>
			<Paper
				className={`${mobile ? classes.searchFormContainerMobile : classes.searchFormContainer} ${
					hideSearchBar && !focusSearchBar ? classes.hide : ""
				}`}
				ref={paperRef}
			>
				<Grid container alignItems="center" justifyContent="space-between">
					<Grid item md={11} xs={10}>
						<SearchBar
							className={classes.searchBar}
							onRequestSearch={onSearch}
							onCancelSearch={cancelSearchHandler}
							onChange={searchQueryHandler}
							onFocus={() => setFocusSearchBar(true)}
							onBlur={() => setFocusSearchBar(false)}
							value={searchQuery}
							placeholder="Search quotes"
						/>
					</Grid>
					<Grid item md={1} xs={2} className={classes.advancedSearchContainer}>
						<Tooltip title="Advanced Search" TransitionComponent={Zoom}>
							<IconButton onClick={() => dispatch(openSearchModal())}>
								<AppsIcon />
							</IconButton>
						</Tooltip>
					</Grid>
				</Grid>
			</Paper>
			<AdvancedSearchModal
				mobile={mobile}
				open={isSearchModalOpen}
				onClose={() => dispatch(closeSearchModal())}
			/>
		</>
	);
};

export default SearchForm;
