import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	cardContainer: {
		paddingLeft: theme.spacing(3),
		[theme.breakpoints.down("sm")]: {
			paddingLeft: 0,
			paddingTop: theme.spacing(4)
		}
	},
	card: {
		width: "100%",
		borderRadius: "15px",
		position: "relative"
	},
	cardMedia: {
		height: "100%",
		paddingTop: "100%",
		filter: "blur(2px)"
	},
	quotesText: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		textAlign: "center",
		color: "#f3f3f3",
		fontWeight: 600,
		fontSize: "1.4rem",
		width: "80%",
		textShadow: "1px 2px 4px #000000",
		wordWrap: "break-word"
	},
	quotesTextLonger: {
		fontSize: "1.1rem"
	},
	quotesAuthor: {
		fontWeight: 600,
		fontSize: "1rem",
		color: "#f3f3f3",
		textShadow: "2px 2px 10px #000000"
	},
	watermark: {
		position: "absolute",
		top: "95%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		color: "#f3f3f3",
		fontWeight: 600,
		fontSize: "0.8rem"
	}
}));

export default useStyles;
