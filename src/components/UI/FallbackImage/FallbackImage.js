// Components
import { Grid, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const FallbackImage = ({ image, text, isPosts }) => {
	const classes = useStyles();

	return (
		<Grid
			container
			justifyContent="center"
			direction="column"
			alignItems="center"
			className={`${classes.fallbackContainer} ${isPosts ? classes.isPosts : ""}`}
		>
			<Grid item>
				<img src={image} alt={"No drafts"} width={isPosts ? 200 : 250} />
			</Grid>
			<Grid item>
				<Typography
					component={Grid}
					item
					xs={12}
					align="center"
					variant="body2"
					className={classes.fallbackText}
				>
					{text}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default FallbackImage;
