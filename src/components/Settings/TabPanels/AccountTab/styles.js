import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	accountTab: {
		padding: theme.spacing(3),
		paddingTop: theme.spacing(1.5),
		color: theme.palette.type === "dark" ? "#ffffff" : theme.palette.text.primary,
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#fefefe",
		width: "100%",
		borderRadius: "0 15px 15px 0"
	},
	loadingSpinner: {
		margin: "auto",
		height: 20,
		width: 20,
		marginTop: theme.spacing(15),
		marginBottom: theme.spacing(15)
	},
	logoutButton: {
		borderRadius: "15px",
		boxShadow: "none",
		marginTop: theme.spacing(2),
		"&:hover": {
			boxShadow: "none"
		},
		"&:active": {
			boxShadow: "none"
		}
	},
	[theme.breakpoints.down(700)]: {
		header: {
			flexDirection: "column",
			justifyContent: "center"
		},
		qrCodeContainer: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			width: "100%"
		},
		accountTab: {
			borderRadius: 0
		}
	}
}));

export default useStyles;
