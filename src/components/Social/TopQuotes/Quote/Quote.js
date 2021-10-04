// Dependencies
import { useHistory } from "react-router";

// Components
import { Grid, Typography, ButtonBase } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

const Quote = ({ text, author, color, quotesId }) => {
	const history = useHistory();
	const classes = useStyles();

	const quotesClickHandler = () => {
		history.push(`/${author}/p/${quotesId}`);
	};

	return (
		<Grid
			container
			item
			xs={12}
			md={6}
			className={classes.quoteCard}
			justifyContent="center"
			alignItems="center"
		>
			<Grid
				container
				className={`${classes.quoteContent} ${classes[color]}`}
				component={ButtonBase}
				onClick={quotesClickHandler}
			>
				<Grid item>
					<FormatQuoteIcon />
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body2">{`"${text}"`}</Typography>
				</Grid>
				<Grid item>
					-
					<Typography variant="body2" className={classes.quoteAuthor}>
						{`${author}`}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Quote;
