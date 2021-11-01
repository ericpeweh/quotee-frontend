import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	scannerContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		minHeight: "100vh",
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3"
	},
	QRReaderContainer: {
		width: "100%"
	},
	QRReader: {
		width: "80%",
		borderRadius: "15px",
		"& > section": {
			borderRadius: 15
		}
	},
	submitButton: {
		color: "#f3f3f3",
		borderRadius: 15,
		width: "80%",
		padding: theme.spacing(1),
		marginTop: theme.spacing(1),
		boxShadow: "none",
		"&: hover": {
			boxShadow: "none !important"
		},
		"&: active": {
			boxShadow: "none !important"
		}
	}
}));

export default useStyles;
