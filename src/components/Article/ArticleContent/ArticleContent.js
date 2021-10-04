// Components
import { Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ArticleContent = ({ children, status }) => {
	const classes = useStyles();

	const isLoading = status === "loading";

	return (
		<Grid item container direction="column" alignItems="center">
			<Grid
				sm={11}
				xs={12}
				item
				className={`${classes.textContainer}  ${isLoading ? classes.noPadding : ""}`}
			>
				{children}
			</Grid>
		</Grid>
	);
};

export default ArticleContent;
