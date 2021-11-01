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
			<ScrollContainer>
				<SearchBar
					className={classes.searchBar}
					onRequestSearch={onSearch}
					value={searchQuery}
					onChange={queryChangeHandler}
					onCancelSearch={() => queryChangeHandler("")}
				/>
				{isLoading && (
					<Grid
						container
						justifyContent="center"
						alignItems="center"
						className={classes.spinnerContainer}
					>
						<Grid item className={classes.spinner}>
							<CircularProgress color="primary" />
						</Grid>
					</Grid>
				)}
				{!isLoading && users.length !== 0 && (
					<Grid item className={classes.usersContainer}>
						{users.map((user, index) => (
							<UserSuggestion key={user.username || index} user={user} />
						))}
					</Grid>
				)}
				{!isLoading && searchQuery && users.length === 0 && (
					<Typography variant="body2" className={classes.noUserFound}>
						No user found.
					</Typography>
				)}
				{!isLoading && !searchQuery && users.length === 0 && (
					<Typography variant="body2" className={classes.noUserFound}>
						{`No ${title.toLowerCase()} yet.`}
					</Typography>
				)}
			</ScrollContainer>
		</>
	);
};

export default MobilePage;
