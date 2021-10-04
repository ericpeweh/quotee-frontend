import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	socialContentContainer: {
		marginTop: 0,
		marginRight: 0,
		padding: theme.spacing(3),
		paddingLeft: theme.spacing(3) - 12,
		paddingRight: theme.spacing(3) - 12,
		paddingTop: 0,
		[theme.breakpoints.down("xs")]: {
			padding: "5px"
		}
	}
}));

export default useStyles;
