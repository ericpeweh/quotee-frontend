import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	suggestion: {
		margin: theme.spacing(2),
		marginBottom: 0,
		[theme.breakpoints.down("md")]: {
			display: "none"
		}
	},
	usersContainer: {
		display: "block",
		marginBottom: theme.spacing(1),
		[theme.breakpoints.down("md")]: {
			display: "none"
		}
	}
}));

export default useStyles;
