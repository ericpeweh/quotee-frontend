import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	errorText: {
		fontSize: "0.9rem",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	error: {
		color: theme.palette.error.main
	}
}));

export default useStyles;
