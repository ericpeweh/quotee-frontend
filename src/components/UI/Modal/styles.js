import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	modal: {
		maxHeight: 435,
		borderRadius: "15px"
	},
	modalMobile: {
		height: "100%"
	},
	modalTitle: {
		marginLeft: theme.spacing(2)
	},
	noLikesText: {
		textAlign: "center",
		fontSize: "0.9rem",
		color: theme.palette.text.secondary
	},
	dialogHeader: {
		padding: theme.spacing(1)
	},
	dialogContent: {
		padding: theme.spacing(1)
	},
	dialogContentMobile: {
		marginTop: "56px"
	},
	searchBar: {
		boxShadow: "none",
		border: "1px solid lightgray",
		height: "40px",
		borderRadius: "15px"
	},
	searchBarMobile: {
		margin: "5px 10px"
	},
	loadingSpinnerContainer: {
		padding: theme.spacing(1.5),
		width: "100%",
		display: "flex",
		justifyContent: "center"
	},
	loadingSpinner: {
		margin: "auto"
	}
}));

export default useStyles;
