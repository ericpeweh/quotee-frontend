import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	profileActionContainer: {
		borderTop: "1px solid lightgray",
		borderBottom: "1px solid lightgray",
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2)
	}
}));

export default useStyles;
