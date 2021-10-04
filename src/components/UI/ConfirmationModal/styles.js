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
		backgroundColor: theme.palette.type === "dark" ? "#464646 !important" : "#c2c2c2 !important",
		borderRadius: 15,
		minWidth: "30%",
		color: theme.palette.type === "dark" ? "#464646" : "#f3f3f3",
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
		backgroundColor: `${theme.palette.primary.main} !important`,
		color: theme.palette.type === "dark" ? "#464646" : "#f3f3f3",
		borderRadius: 15,
		minWidth: "30%",
		"&:hover": {
			backgroundColor: theme.palette.type === "dark" ? "#545454 !important" : "#bdbdbd !important"
		},
		[theme.breakpoints.down("xs")]: {
			borderRadius: "0 0 15px 15px",
			minWidth: "100%",
			backgroundColor: theme.palette.type === "dark" ? "#464646 !important" : "#c2c2c2 !important",
			"&:hover": {
				backgroundColor: theme.palette.type === "dark" ? "#545454 !important" : "#bdbdbd !important"
			},
			borderTop: "1px solid rgba(255,255,255,0.1)",
			color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.error.primary,
			marginLeft: "0 !important"
		}
	}
}));

export default useStyles;
