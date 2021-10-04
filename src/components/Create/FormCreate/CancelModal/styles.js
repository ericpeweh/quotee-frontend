import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
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
