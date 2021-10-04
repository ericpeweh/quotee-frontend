import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	dialog: {
		borderRadius: 15
	},
	dialogTitle: {
		"& > h2": {
			fontWeight: 600
		},
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		color: theme.palette.primary.main
	},
	container: {
		padding: theme.spacing(4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	},
	loadingText: {
		marginTop: theme.spacing(2)
	},
	successIcon: {
		color: theme.palette.secondary.main,
		fontSize: 60
	},
	successText: {
		marginTop: theme.spacing(2)
	},
	errorIcon: {
		color: theme.palette.primary.main,
		fontSize: 60
	},
	errorText: {
		marginTop: theme.spacing(2)
	}
}));

export default useStyles;
