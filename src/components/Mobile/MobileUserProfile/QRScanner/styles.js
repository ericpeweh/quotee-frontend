import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	scannerContainer: {
		paddingTop: 56,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column"
	},
	QRReaderContainer: {
		width: "100%"
	},
	QRReader: {
		width: "80%",
		marginTop: theme.spacing(15),
		margin: "auto",
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
