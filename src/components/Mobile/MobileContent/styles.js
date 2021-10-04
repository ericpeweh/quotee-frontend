import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	contentContainer: {
		paddingTop: "56px",
		paddingBottom: "40px",
		width: "100%",
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3"
	},
	quoteCard: {
		borderRadius: "0px"
	},
	loadingSpinner: {
		marginTop: theme.spacing(3)
	},
	infiniteScrollSpinner: {
		marginBottom: theme.spacing(3)
	}
}));

export default useStyles;
