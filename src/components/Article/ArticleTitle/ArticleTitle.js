// Components
import { Grid, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ArticleTitle = ({ text, date, subtitle }) => {
	const classes = useStyles();

	return (
		<Grid container direction="column" xs={12} item>
			<Typography className={classes.dateOfPublish}>{date}</Typography>
			<Typography className={classes.articleTitle}>{text}</Typography>
			<Typography className={classes.subtitle}>{subtitle}</Typography>
		</Grid>
	);
};

export default ArticleTitle;
