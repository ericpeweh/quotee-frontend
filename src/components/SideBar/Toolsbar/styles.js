import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	toolsContainer: {
		paddingBottom: theme.spacing(1),
		flex: 1,
		position: "absolute",
		bottom: 0,
		right: 0
	},
	buttonContainer: {
		[theme.breakpoints.down("md")]: {
			marginBottom: theme.spacing(1.5)
		}
	}
}));

export default useStyles;
