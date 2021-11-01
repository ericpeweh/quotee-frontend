// Dependencies
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchUserFavorites } from "../../../actions/users";

// Components
import QuoteCard from "../../MainContent/QuoteCards/QuoteCard/QuoteCard";
import FallbackImage from "../../UI/FallbackImage/FallbackImage";
import { Grid, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import FavoritesFallback from "../../../images/fallback/FAVORITES.webp";

const MobileUserFavorites = () => {
	const { posts: quotes, status } = useSelector(state => state.userFavorites, shallowEqual);
	const username = useSelector(state => state.auth.username);
	const dispatch = useDispatch();
	const classes = useStyles();

	const isLoading = status === "loading";

	// Fetch user favories on load
	useEffect(() => {
		if (username && status !== "succeeded") {
			dispatch(fetchUserFavorites(username));
		}
	}, [dispatch, username, status]);

	// Favorites content
	let favoritesContent = "";
	if (quotes.length === 0 && !isLoading) {
		favoritesContent = (
			<>
				<FallbackImage image={FavoritesFallback} text="You don't have any favorites yet." />
			</>
		);
	} else {
		favoritesContent = isLoading
			? [...Array(4).keys()].map(index => (
					<Grid item sm={12} md={6} key={index} className={classes.cardContainer}>
						<QuoteCard favorites quotes={index} mobile status={status} />
					</Grid>
			  ))
			: quotes.map((quote, index) => (
					<Grid item sm={12} md={6} key={quote.quotesId || index} className={classes.cardContainer}>
						<QuoteCard favorites quotes={quote} mobile />
					</Grid>
			  ));
	}

	return (
		<>
			<Grid
				container
				className={classes.favoritesTopBar}
				alignItems="center"
				justifyContent="space-between"
			>
				<Typography className={classes.favoritesTitle}>Favorites</Typography>
			</Grid>
			<Grid
				container
				className={classes.mobileUserFavorites}
				justifyContent="center"
				alignItems="center"
				direction="column"
			>
				<Grid item container className={classes.favoritesContainer} direction="column">
					{favoritesContent}
				</Grid>
			</Grid>
		</>
	);
};

export default MobileUserFavorites;
