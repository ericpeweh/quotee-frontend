// Dependencies
import moment from "moment";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchArticle } from "../../actions/articles";

// Components
import ArticleActions from "./ArticleActions/ArticleActions";
import ArticleTitle from "./ArticleTitle/ArticleTitle";
import ArticleImage from "./ArticleImage/ArticleImage";
import ArticleContent from "./ArticleContent/ArticleContent";
import TopBar from "../UI/TopBar/TopBar";
import { Grid, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

// Styles
import useStyles from "./styles";

// Images
import ErrorImage from "../../images/fallback/ERROR.webp";

const Article = ({ mobile }) => {
	const { articleStatus, title, author, subtitle, bannerImage, body, createdAt, articleMessage } =
		useSelector(state => state.article, shallowEqual);
	const { status: authStatus } = useSelector(state => state.auth, shallowEqual);
	const { articleId } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	const articleContent = body.split("<break>");
	const isLoading = articleStatus === "loading";

	const mobileBackHandler = () => {
		history.replace("/social");
	};

	useEffect(() => {
		if (authStatus === "succeeded") {
			dispatch(fetchArticle(articleId));
		}
	}, [dispatch, articleId, authStatus]);

	return (
		<Grid
			elevation={0}
			className={`${classes.articleContainer} ${
				articleStatus === "failed" ? classes.noPadding : ""
			}`}
			direction="column"
			container
		>
			{mobile && <TopBar title="Back to social" modal onClose={mobileBackHandler} />}
			{!mobile && articleStatus !== "failed" && <ArticleActions status={articleStatus} />}
			{articleStatus !== "failed" && (
				<>
					{isLoading ? (
						<>
							<Skeleton variant="rect" animation="wave" className={classes.publishDateSkeleton} />
							<Skeleton variant="rect" animation="wave" className={classes.articleTitleSkeleton} />
						</>
					) : (
						<ArticleTitle
							text={title}
							date={`Published ${moment.utc(createdAt).format("LL")}`}
							subtitle={subtitle}
						/>
					)}
					<ArticleImage source={bannerImage} status={articleStatus} />
					<ArticleContent className={classes.articleContent} status={articleStatus}>
						{!isLoading &&
							articleContent.map(paragraph => (
								<React.Fragment key={paragraph}>
									<Typography
										variant="body1"
										className={paragraph.includes("<notab>") ? "" : classes.articleText}
									>
										{paragraph.includes("<notab>") ? paragraph.replace("<notab>", "") : paragraph}
									</Typography>
									<br />
								</React.Fragment>
							))}
						{isLoading &&
							[...Array(3).keys()].map(skeleton => (
								<React.Fragment key={skeleton}>
									<Skeleton
										variant="rect"
										animation="wave"
										className={`${classes.paragraphSkeleton} ${classes.paragraphSkeleton1}`}
									/>
									<Skeleton
										variant="rect"
										animation="wave"
										className={`${classes.paragraphSkeleton}`}
									/>
									<Skeleton
										variant="rect"
										animation="wave"
										className={`${classes.paragraphSkeleton}`}
									/>
									<br />
								</React.Fragment>
							))}
						{!isLoading && (
							<Typography variant="body2" className={classes.articleAuthor}>
								Posted by: {author}
							</Typography>
						)}
					</ArticleContent>
				</>
			)}
			{articleMessage && articleStatus === "failed" && (
				<Grid
					container
					item
					justifyContent="center"
					direction="column"
					alignItems="center"
					className={classes.errorContainer}
				>
					<img src={ErrorImage} className={classes.errorImage} alt="error" />
					<Typography className={classes.errorText}>{articleMessage}</Typography>
				</Grid>
			)}
		</Grid>
	);
};

export default Article;
