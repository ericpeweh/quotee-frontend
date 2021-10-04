import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	bannerElement: {
		margin: theme.spacing(2),
		marginBottom: 0,
		[theme.breakpoints.down("md")]: {
			display: "none"
		}
	},
	bannerContainer: {
		margin: theme.spacing(2),
		marginBottom: 0,
		[theme.breakpoints.down("md")]: {
			display: "none"
		}
	},
	banner: {
		maxWidth: "100%",
		borderRadius: "15px"
	}
}));

export default useStyles;
