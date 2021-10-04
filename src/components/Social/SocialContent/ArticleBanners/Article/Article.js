// Dependencies
import { useHistory } from "react-router-dom";

// Components
import { Grid, Typography, Card, CardActionArea, CardContent } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const Article = ({ imageSource, subtitle, title, articleId }) => {
	const history = useHistory();
	const classes = useStyles();

	const articleClickHandler = () => {
		history.push(`/articles/${articleId}`);
		window.scrollTo(0, 0);
	};

	return (
		<Grid item xs={12} md={6}>
			<Card className={classes.articleCard}>
				<CardActionArea
					style={{ backgroundImage: `url(${imageSource})` }}
					className={classes.cardAction}
					onClick={articleClickHandler}
				>
					<CardContent className={classes.cardContent}>
						<Typography variant="h6" component="h2">
							{title}
						</Typography>
						<Typography variant="body2" component="p">
							{subtitle}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
};

export default Article;
