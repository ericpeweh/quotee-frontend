// Dependencies
import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchArticles } from "../../../../actions/articles.js";
import { promptChange } from "../../../../store/slices/pwaSlice.js";

// Components
import Article from "./Article/Article.js";
import News from "./News/News.js";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

// Styles
import useStyles from "./styles";

// let prompt = null;

const ArticleBanners = () => {
	const { prompt, installed, installable } = useSelector(state => state.pwa, shallowEqual);
	const { articles, articlesStatus } = useSelector(state => state.social, shallowEqual);
	const { status: authStatus } = useSelector(state => state.auth, shallowEqual);
	const classes = useStyles();
	const dispatch = useDispatch();

	const articlesIsLoading = articlesStatus === "loading";

	useEffect(() => {
		if (
			authStatus === "succeeded" &&
			articlesStatus !== "succeeded" &&
			articlesStatus !== "loading"
		) {
			dispatch(fetchArticles());
		}
	}, [dispatch, authStatus, articlesStatus]);

	const installHandler = async () => {
		if (prompt) prompt.prompt();
		let result = await prompt?.userChoice;
		if (result && result.outcome === "accepted") {
			dispatch(promptChange(null));
		}
	};

	return (
		<Grid
			container
			item
			xs={12}
			justifyContent="center"
			alignItems="center"
			spacing={2}
			className={classes.articlesContainer}
		>
			<News onInstall={installHandler} installed={installed} installable={installable} />
			{!articlesIsLoading &&
				articles.map((article, index) => (
					<Article
						key={index}
						imageSource={article.bannerImage}
						title={article.title}
						subtitle={article.subtitle}
						articleId={article.articleId}
						status={articlesStatus}
					/>
				))}
			{articlesIsLoading &&
				[...Array(4).keys()].map(index => (
					<Grid item key={index} className={classes.articleContainerSkeleton} xs={12} md={6}>
						<Skeleton variant="rect" animation="wave" className={classes.articleSkeleton} />
					</Grid>
				))}
		</Grid>
	);
};

export default ArticleBanners;
