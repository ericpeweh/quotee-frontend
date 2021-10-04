import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	divider: {
		height: "3px",
		backgroundColor: theme.palette.secondary.main,
		width: "12%",
		margin: "10px auto 0"
	},
	cancelDialog: {
		borderRadius: "15px"
	},
	listItem: {
		textAlign: "center"
	},
	deleteText: {
		color: theme.palette.error.main
	},
	saveText: {
		color: theme.palette.secondary.dark
	},
	exitText: {
		color: theme.palette.text.secondary
	}
}));

export default useStyles;
