import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	toolsContainer: {
		paddingBottom: theme.spacing(1),
		flex: 1
	},
	buttonContainer: {
		[theme.breakpoints.down("md")]: {
			marginBottom: theme.spacing(1.5)
		}
	}
}));

export default useStyles;
