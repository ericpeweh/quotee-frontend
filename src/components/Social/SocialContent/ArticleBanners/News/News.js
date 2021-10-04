// Components
import { Grid, Card, Typography, Button } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const News = ({ onInstall, installed, installable }) => {
	const classes = useStyles();

	return (
		<Grid item xs={12}>
			<Card
				className={classes.newsBannerCard}
				container
				component={Grid}
				direction="column"
				justifyContent="center"
				alignItems="center"
			>
				<Grid item>
					<Typography variant="h6" className={classes.newsTitle}>
						Quotee on your phone!
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="body1" className={classes.newsDescription}>
						Push notification & more mobile apps features!
					</Typography>
				</Grid>
				<Grid item>
					<Button
						variant="contained"
						color="secondary"
						className={`${classes.newsButton} ${installed ? classes.installed : ""}`}
						onClick={onInstall}
						disabled={installed}
					>
						{installed ? "Apps is already installed" : "Get it now!"}
					</Button>
				</Grid>
			</Card>
		</Grid>
	);
};

export default News;
