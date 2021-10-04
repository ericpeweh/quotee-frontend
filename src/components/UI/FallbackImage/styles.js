import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	fallbackText: {
		fontWeight: 600,
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	isPosts: {
		marginTop: theme.spacing(5)
	}
}));

export default useStyles;
