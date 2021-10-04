// Components
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

// Styles
import useStyles from "./styles";

const ArticleImage = ({ source, status }) => {
	const classes = useStyles();

	const isLoading = status === "loading";

	return (
		<Grid container direction="row" justifyContent="center">
			{isLoading ? (
				<Skeleton variant="rect" animation="wave" className={classes.imageSkeleton} />
			) : (
				<Grid
					sm={11}
					xs={12}
					item
					style={{ backgroundImage: `url(${source})` }}
					alt="Article  thumbnail"
					className={classes.thumbnail}
				/>
			)}
		</Grid>
	);
};

export default ArticleImage;
