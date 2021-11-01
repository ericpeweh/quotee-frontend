// Dependencies
import { shallowEqual, useSelector } from "react-redux";

// Components
import { Grid, Typography, ButtonGroup, Button } from "@material-ui/core";

// Utils
import { moveQuotes, moveAuthor } from "../../../../utils/canvasEditor";

// Styles
import useStyles from "./styles";

// Icons
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";

const TextPositions = ({ canvas }) => {
	const { hideAuthor } = useSelector(state => state.canvas, shallowEqual);
	const classes = useStyles();

	const moveQuotesHandler = type => {
		moveQuotes({ canvas, type });
	};

	const moveAuthorHandler = type => {
		moveAuthor({ canvas, type });
	};

	return (
		<Grid item sm={12} md={6} className={classes.textPositionsContainer}>
			<Typography align="center" className={classes.quotesPositionTitle}>
				Quotes position
			</Typography>
			<ButtonGroup size="medium" color="primary" variant="contained" fullWidth disableElevation>
				<Button
					className={`${classes.sideButton} ${classes.button}`}
					onClick={() => moveQuotesHandler("left")}
				>
					<ArrowBackOutlinedIcon />
				</Button>
				<Button className={classes.button} onClick={() => moveQuotesHandler("right")}>
					<ArrowForwardOutlinedIcon />
				</Button>
				<Button className={classes.button} onClick={() => moveQuotesHandler("up")}>
					<ArrowUpwardOutlinedIcon />
				</Button>
				<Button
					className={`${classes.sideButton} ${classes.button}`}
					onClick={() => moveQuotesHandler("down")}
				>
					<ArrowDownwardOutlinedIcon />
				</Button>
			</ButtonGroup>
			<Typography align="center" className={classes.authorPositionTitle}>
				Author position
			</Typography>
			<ButtonGroup
				size="medium"
				color="primary"
				variant="contained"
				fullWidth
				disableElevation
				disabled={hideAuthor}
			>
				<Button
					className={`${classes.sideButton} ${classes.button}`}
					onClick={() => moveAuthorHandler("left")}
				>
					<ArrowBackOutlinedIcon />
				</Button>
				<Button className={classes.button} onClick={() => moveAuthorHandler("right")}>
					<ArrowForwardOutlinedIcon />
				</Button>
				<Button className={classes.button} onClick={() => moveAuthorHandler("up")}>
					<ArrowUpwardOutlinedIcon />
				</Button>
				<Button
					className={`${classes.sideButton} ${classes.button}`}
					onClick={() => moveAuthorHandler("down")}
				>
					<ArrowDownwardOutlinedIcon />
				</Button>
			</ButtonGroup>
		</Grid>
	);
};

export default TextPositions;
