import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	shareDisplay: {
		marginBottom: 0
	},
	canvasContainer: {
		height: 400,
		width: 300,
		borderRadius: "15px",
		overflow: "hidden",
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(2),
		marginLeft: 0,
		position: "relative"
	},
	canvas: {
		height: "100%",
		width: "100%"
	},
	spinnerContainer: {
		position: "absolute",
		height: "100%",
		width: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.75)",
		"-webkit-touch-callout": "none",
		"-webkit-user-select": "none",
		"-khtml-user-select": "none",
		"-moz-user-select": "none",
		"-ms-user-select": "none",
		"user-select": "none"
	},
	spinner: {
		marginBottom: theme.spacing(1)
	}
}));

export default useStyles;
