import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	cancelDialog: {
		borderRadius: "15px"
	},
	listItem: {
		textAlign: "center"
	},
	exitText: {
		color: theme.palette.error.main
	}
}));

export default useStyles;
