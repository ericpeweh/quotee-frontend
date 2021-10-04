// Dependencies
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

// Components
import { Grid, Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

// Styles
import useStyles from "./styles";

// Icons
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

const ArticleActions = ({ status }) => {
	const articles = useSelector(state => state.social.articles);
	const currentArticleId = useSelector(state => state.article.articleId);
	const history = useHistory();
	const classes = useStyles();

	const isLoading = status === "loading";

	let nextArticleId = "";
	if (articles.length !== 0) {
		const currentArticleIndex = articles.findIndex(
			article => article.articleId === currentArticleId
		);

		nextArticleId =
			currentArticleIndex === 3
				? articles[0].articleId
				: articles[currentArticleIndex + 1].articleId;
	}

	const backClickHandler = () => {
		window.scrollTo(0, 0);
		history.replace("/social");
	};

	const nextClickHandler = () => {
		window.scrollTo(0, 0);
		history.push(`/articles/${nextArticleId}`);
	};

	return (
		<Grid item container direction="column" justifyContent="center">
			<Grid item container justifyContent="space-between" xs={12} direction="row">
				{!isLoading && (
					<>
						<Button
							className={classes.button}
							startIcon={<KeyboardBackspaceIcon />}
							size="small"
							disableElevation
							disableRipple
							onClick={backClickHandler}
						>
							Back to social
						</Button>
						{articles.length !== 0 && (
							<Button
								className={classes.button}
								endIcon={<TrendingFlatIcon />}
								size="small"
								disableElevation
								disableRipple
								onClick={nextClickHandler}
							>
								Next article
							</Button>
						)}
					</>
				)}
				{isLoading && (
					<>
						<Skeleton variant="rect" animation="wave" className={classes.buttonSkeleton} />
						<Skeleton variant="rect" animation="wave" className={classes.buttonSkeleton} />
					</>
				)}
			</Grid>
		</Grid>
	);
};

export default ArticleActions;
