import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	mobileUserDetails: {},
	userDetailsContainer: {
		padding: "56px 0",
		minHeight: "100vh",
		backgroundColor: theme.palette.type === "dark" ? "#3c3c3c" : "#fefefe"
	},
	loadingSpinner: {
		marginTop: theme.spacing(3)
	}
}));

export default useStyles;
