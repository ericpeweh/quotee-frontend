import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	dialog: {
		borderRadius: 15,
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3"
	},
	dialogTitle: {
		"& > h2": {
			fontWeight: 600
		},
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#f3f3f3",
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
		marginTop: theme.spacing(2),
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	cancelButton: {
		backgroundColor: theme.palette.type === "dark" ? "#646464  !important" : "#e4e4e4 !important",
		borderRadius: 0,
		minWidth: "30%",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary,
		"&:hover": {
			backgroundColor: theme.palette.type === "dark" ? "#5c5c5c !important" : "#bdbdbd !important"
		},
		[theme.breakpoints.down("xs")]: {
			borderRadius: "0",
			minWidth: "100%",
			"&:hover": {
				backgroundColor: theme.palette.type === "dark" ? "#5c5c5c !important" : "#bdbdbd !important"
			},
			color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.error.primary,
			borderTop: "1px solid rgba(255,255,255,0.1)"
		}
	}
}));

export default useStyles;
