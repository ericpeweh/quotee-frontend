import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	topQuotesContainer: {
		maxWidth: "100%",
		marginTop: theme.spacing(0.5),
		padding: theme.spacing(3),
		paddingRight: "6px",
		paddingTop: 0,
		[theme.breakpoints.down("xs")]: {
			padding: "5px",
			margin: 0
		}
	},
	quotesSkeleton: {
		borderRadius: 15,
		height: 150
	},
	quotesContainerSkeleton: {
		width: "100%"
	}
}));

export default useStyles;
