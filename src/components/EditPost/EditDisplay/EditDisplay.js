// Dependencies
import { useSelector } from "react-redux";

// Components
import { Card, CardMedia, Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import displayImage from "../../../images/display.jpg";

const EditDisplay = ({ quotesDisplay }) => {
	const username = useSelector(state => state.auth.username);
	const classes = useStyles();

	const longerQuotes = quotesDisplay.length > 125;

	return (
		<Grid container item xs={12} md={6} className={classes.cardContainer}>
			<Grid item component={Card} className={classes.card}>
				<CardMedia image={displayImage} className={classes.cardMedia} />
				<div className={`${classes.quotesText} ${longerQuotes ? classes.quotesTextLonger : ""}`}>
					{`"${quotesDisplay}"`}
					<br />
					<br />
					<span className={classes.quotesAuthor}>{username}</span>
				</div>
				<div className={classes.watermark}>www.quotee.id</div>
			</Grid>
		</Grid>
	);
};

export default EditDisplay;
