import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	textContainer: {
		marginTop: theme.spacing(3),
		textAlign: "justify",
		width: "100%",
		paddingBottom: theme.spacing(4),
		[theme.breakpoints.down("xs")]: {
			paddingTop: 270
		}
	},
	noPadding: {
		paddingTop: 0
	}
}));

export default useStyles;
