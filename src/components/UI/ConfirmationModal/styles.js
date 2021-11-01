import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	dialog: {
		borderRadius: 15
	},
	buttonContainer: {
		padding: theme.spacing(2),
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
			overflow: "hidden",
			padding: 0
		}
	},
	cancelButton: {
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c  !important" : "#c2c2c2 !important",
		borderRadius: 15,
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
	deleteButton: {
		backgroundColor: `${theme.palette.error.main} !important`,
		color: "#f3f3f3 !important",
		borderRadius: 15,
		minWidth: "30%",
		"&:hover": {
			backgroundColor: `${theme.palette.error.dark} !important`
		},
		[theme.breakpoints.down("xs")]: {
			borderRadius: "0 0 15px 15px",
			minWidth: "100%",
			backgroundColor: `${theme.palette.error.main} !important`,
			"&:hover": {
				backgroundColor: theme.palette.type === "dark" ? "#545454 !important" : "#bdbdbd !important"
			},
			borderTop: "1px solid rgba(255,255,255,0.1)",
			marginLeft: "0 !important"
		}
	}
}));

export default useStyles;
