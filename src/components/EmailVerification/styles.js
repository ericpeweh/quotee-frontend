import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	emailVerificationContainer: {
		height: "100vh",
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3"
	},
	email: {
		width: 300
	},
	statusText: {
		fontSize: "1.1rem",
		color: theme.palette.type === "dark" ? "#f3f3f3 !important" : theme.palette.text.primary
	}
}));

export default useStyles;
