// Components
import TopBar from "../TopBar/TopBar";
import UserSuggestion from "../../SideBar/Suggestion/UsersSuggestion/UserSuggestion";
import ScrollContainer from "../ScrollContainer/ScrollContainer";
import SearchBar from "material-ui-search-bar";
import { Grid, CircularProgress, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const MobilePage = ({ title, users, onSearch, status, searchQuery, onChangeQuery }) => {
	const classes = useStyles();

	const isLoading = status === "loading";

	const queryChangeHandler = newQuery => {
		onChangeQuery(newQuery);
	};

	return (
		<>
			<TopBar title={title} />
			{!isLoading && (
				<ScrollContainer>
					<SearchBar
						className={classes.searchBar}
						onRequestSearch={onSearch}
						value={searchQuery}
						onChange={queryChangeHandler}
						onCancelSearch={() => queryChangeHandler("")}
					/>
					<Grid item className={classes.usersContainer}>
						{!isLoading &&
							users.length !== 0 &&
							users.map((user, index) => (
								<UserSuggestion key={user.username || index} user={user} />
							))}
					</Grid>
				</ScrollContainer>
			)}
			{!isLoading && users.length === 0 && (
				<Typography variant="body2" className={classes.noUserFound}>
					No user found.
				</Typography>
			)}
			{isLoading && (
				<Grid
					container
					justifyContent="center"
					alignItems="center"
					className={classes.spinnerContainer}
				>
					<Grid item>
						<CircularProgress color="primary" />
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default MobilePage;
