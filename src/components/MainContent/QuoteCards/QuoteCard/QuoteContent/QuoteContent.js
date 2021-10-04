// Dependencies
import { useHistory } from "react-router";

// Components
import { CardContent, Typography, Paper, Chip } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

// Styles
import useStyles from "./styles";

const QuoteContent = ({ quotes, status }) => {
	const history = useHistory();
	const classes = useStyles();

	const isLoading = status === "loading";

	const tagClickHandler = event => {
		const tag = event.target.textContent.substring(1);
		window.scrollTo(0, 0);
		history.push(`/p/search?tags=${tag}&advanced=true`);
	};

	return (
		<CardContent className={classes.cardContent}>
			<Typography color="textPrimary" align="center" className={classes.quotes}>
				{isLoading ? (
					<>
						<Skeleton animation="wave" variant="rect" className={classes.quotesSkeleton} />
						<Skeleton animation="wave" variant="rect" className={classes.secondQuotesSkeleton} />
					</>
				) : (
					`"${quotes?.quotes}"`
				)}
			</Typography>
			<Paper component="ul" className={classes.lists} elevation={0}>
				{isLoading ? (
					<Skeleton animation="wave" variant="rect" className={classes.tagsSkeleton} />
				) : (
					quotes?.tags?.map(tag => {
						return (
							<li key={tag}>
								<Chip
									size="small"
									label={`#${tag}`}
									className={classes.chip}
									onClick={tagClickHandler}
									clickable
								/>
							</li>
						);
					})
				)}
			</Paper>
		</CardContent>
	);
};

export default QuoteContent;
