// Dependencies
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
	const dispatch = useDispatch();
	const classes = useStyles();

	const searchQueryHandler = newQuery => {
		dispatch(changeSearch(newQuery));
	};

	const cancelSearchHandler = () => {
		dispatch(changeSearch(""));
	};

	return (
		<>
			<Paper className={mobile ? classes.searchFormContainerMobile : classes.searchFormContainer}>
				<Grid container alignItems="center" justifyContent="space-between">
					<Grid item md={11} xs={10}>
						<SearchBar
							className={classes.searchBar}
							onRequestSearch={onSearch}
							onCancelSearch={cancelSearchHandler}
							onChange={searchQueryHandler}
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
