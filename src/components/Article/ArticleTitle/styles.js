import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	dateOfPublish: {
		fontSize: "0.8rem",
		color: theme.palette.text.secondary,
		textAlign: "center"
	},
	articleTitle: {
		fontWeight: 600,
		fontSize: "1.5rem",
		textAlign: "center",
		color: theme.palette.secondary.main
	},
	subtitle: {
		fontSize: "0.9rem",
		textAlign: "center",
		color: theme.palette.primary.main,
		fontWeight: 600
	}
}));

export default useStyles;
