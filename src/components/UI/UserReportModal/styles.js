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
		color: theme.palette.primary.main,
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
	descriptionInputContainer: {
		padding: theme.spacing(1),
		marginBottom: theme.spacing(1)
	},
	descriptionTitle: {
		padding: theme.spacing(1),
		marginBottom: theme.spacing(1),
		paddingLeft: 4
	},
	descriptionInput: {
		borderRadius: "15px"
	},
	cancelButton: {
		backgroundColor: theme.palette.type === "dark" ? "#646464  !important" : "#e4e4e4 !important",
		borderRadius: 0,
		minWidth: "30%",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary,
		"&:hover": {
			backgroundColor: theme.palette.type === "dark" ? "#545454 !important" : "#bdbdbd !important"
		},
		[theme.breakpoints.down("xs")]: {
			borderRadius: "0",
			minWidth: "100%",
			"&:hover": {
				backgroundColor: theme.palette.type === "dark" ? "#545454 !important" : "#bdbdbd !important"
			},
			color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.error.primary,
			borderTop: "1px solid rgba(255,255,255,0.1)"
		}
	},
	submitButton: {
		borderRadius: 0,
		"&:hover": {
			backgroundColor: theme.palette.type === "dark" ? theme.palette.primary.light : "#ffa3aa"
		}
	}
}));

export default useStyles;
