// Dependencies
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchUserFavorites } from "../../actions/users";

// Components
import Masonry from "react-masonry-css";
import QuoteCard from "../MainContent/QuoteCards/QuoteCard/QuoteCard";
import FallbackImage from "../UI/FallbackImage/FallbackImage";
import { Divider, Grid, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import FavoritesFallback from "../../images/fallback/FAVORITES.webp";

// Icons
import BookmarkIcon from "@material-ui/icons/Bookmark";

const UserFavorites = () => {
	const { posts: quotes, status } = useSelector(state => state.userFavorites, shallowEqual);
	const username = useSelector(state => state.auth.username);
	const classes = useStyles();
	const dispatch = useDispatch();

	const isLoading = status === "loading";

	useEffect(() => {
		if (username && status !== "succeeded" && status !== "loading") {
			dispatch(fetchUserFavorites(username));
		}
	}, [dispatch, username, status]);

	const breakpoints = {
		default: 2,
		850: 1
	};

	// Favorites content
	let favoritesContent = "";
	if (quotes.length === 0 && status !== "loading") {
		favoritesContent = (
			<Grid
				item
				container
				xs={12}
				spacing={2}
				className={classes.favoritesContainer}
				justifyContent="center"
				alignItems="center"
				direction="column"
			>
				<FallbackImage image={FavoritesFallback} text="You don't have any favorites yet." />
				<Typography className={classes.favoritesSubtitle}>
					To favorite a quotes, click the " Add to favorites{" "}
					<BookmarkIcon className={classes.favoritesIcon} />" button
				</Typography>
			</Grid>
		);
	} else {
		favoritesContent = (
			<Masonry
				breakpointCols={breakpoints}
				className={classes.masonryGrid}
				columnClassName={classes.masonryGridColumn}
			>
				{!isLoading &&
					quotes.map((quote, index) => (
						<div key={quote.quotesId || index}>
							<QuoteCard favorites quotes={quote} />
						</div>
					))}
				{isLoading &&
					[...Array(4).keys()].map(index => (
						<QuoteCard favorites quotes={index} status={status} key={index} />
					))}
			</Masonry>
		);
	}

	return (
		<Grid container className={classes.userFavorites} direction="column">
			<Grid item xs={12}>
				<Typography className={classes.favoritesTitle}>Favorites</Typography>
				<Divider />
			</Grid>
			{favoritesContent}
		</Grid>
	);
};

export default UserFavorites;
