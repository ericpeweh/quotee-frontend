// Dependencies
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchUserArchived } from "../../actions/users";

// Components
import Masonry from "react-masonry-css";
import ContentTitle from "../UI/ContentTitle/ContentTitle";
import QuoteCard from "../MainContent/QuoteCards/QuoteCard/QuoteCard";
import FallbackImage from "../UI/FallbackImage/FallbackImage";
import { Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import ArchivedFallback from "../../images/fallback/ARCHIVED.webp";

const Archived = ({ mobile }) => {
	const { posts: quotes, status } = useSelector(state => state.userArchived, shallowEqual);
	const username = useSelector(state => state.auth.username);
	const dispatch = useDispatch();
	const classes = useStyles();

	const isLoading = status === "loading";

	useEffect(() => {
		if (username && status !== "succeeded") {
			dispatch(fetchUserArchived(username));
		}
	}, [dispatch, username, status]);

	const breakpoints = {
		default: 2,
		850: 1
	};

	// Archived Content
	let archivedContent = "";
	if (quotes.length === 0 && status !== "loading") {
		archivedContent = (
			<Grid item container spacing={mobile ? 0 : 2} className={classes.archivedContainer}>
				<FallbackImage text="You have no archived post." image={ArchivedFallback} />
			</Grid>
		);
	} else {
		archivedContent = (
			<Masonry
				breakpointCols={breakpoints}
				className={classes.masonryGrid}
				columnClassName={classes.masonryGridColumn}
			>
				{!isLoading &&
					quotes.map((quote, index) => (
						<div key={quote.quotesId || index}>
							<QuoteCard quotes={quote} mobile={mobile} />
						</div>
					))}
				{isLoading &&
					[...Array(4).keys()].map(index => (
						<QuoteCard quotes={index} mobile={mobile} key={index} status={status} />
					))}
			</Masonry>
		);
	}

	return (
		<>
			<Grid container className={classes.archived} direction="column">
				{!mobile && <ContentTitle title="Archived" />}
				{archivedContent}
			</Grid>
		</>
	);
};

export default Archived;
