import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	socialTitleContainer: {
		margin: theme.spacing(3),
		marginBottom: 0,
		paddingBottom: 7
	},
	newsAndArticle: {
		fontWeight: 600,
		fontSize: "1.25rem",
		marginBottom: theme.spacing(1)
	},
	success: {
		color: theme.palette.success.dark
	}
}));

export default useStyles;
