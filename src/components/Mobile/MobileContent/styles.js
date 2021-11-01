import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	contentContainer: {
		paddingTop: "56px",
		paddingBottom: "40px",
		width: "100%",
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#ebebeb"
	},
	quoteCard: {
		borderRadius: "0px"
	},
	loadingSpinner: {
		marginTop: theme.spacing(3)
	},
	infiniteScrollContainer: {
		padding: 10
	},
	infiniteScrollSpinner: {
		marginBottom: theme.spacing(3)
	},
	newPostsButton: {
		color: "#f3f3f3",
		backgroundColor: "#c4c4c4",
		boxShadow: "none",
		borderRadius: "15px",
		position: "fixed",
		marginTop: theme.spacing(1),
		minWidth: 120,
		height: 30,
		zIndex: 100,
		"&:hover": {
			boxShadow: "none",
			backgroundColor: theme.palette.secondary.main
		},
		"&:active": {
			boxShadow: "none"
		}
	}
}));

export default useStyles;
