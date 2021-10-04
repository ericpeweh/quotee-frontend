// Dependencies
import SearchBar from "material-ui-search-bar";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { postSearchQueryChange } from "../../../../../store/slices/userProfileSlice";
import { searchUserPosts } from "../../../../../actions/users";

// Components
import { Grid } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

// Icons
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import ReorderIcon from "@material-ui/icons/Reorder";

// Styles
import useStyles from "./styles";

const MobilePostAction = ({ onChangeMode, displayMode }) => {
	const { postSearchQuery, username } = useSelector(state => state.userProfile, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const searchHandler = searchQuery => {
		dispatch(searchUserPosts({ username, quotes: searchQuery }));
	};

	const searchQueryChangeHandler = newQuery => {
		dispatch(postSearchQueryChange(newQuery));
	};

	return (
		<Grid container justifyContent="center" className={classes.actionsContainer} spacing={1}>
			<Grid item xs={8}>
				<SearchBar
					className={classes.searchBar}
					onRequestSearch={searchHandler}
					onCancelSearch={() => searchQueryChangeHandler("")}
					onChange={searchQueryChangeHandler}
					value={postSearchQuery}
				/>
			</Grid>
			<Grid item xs={4} container justifyContent="flex-end">
				<ToggleButtonGroup value={displayMode} exclusive onChange={onChangeMode}>
					<ToggleButton value="full" className={classes.buttonFull}>
						<ViewStreamIcon color={displayMode === "full" ? "secondary" : "action"} />
					</ToggleButton>
					<ToggleButton value="minimal" className={classes.buttonMinimal}>
						<ReorderIcon color={displayMode === "minimal" ? "secondary" : "action"} />
					</ToggleButton>
				</ToggleButtonGroup>
			</Grid>
		</Grid>
	);
};

export default MobilePostAction;
