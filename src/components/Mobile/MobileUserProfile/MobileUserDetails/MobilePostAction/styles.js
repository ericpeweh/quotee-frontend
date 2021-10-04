import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	actionsContainer: {
		width: "95%",
		padding: "5px 0",
		marginBottom: theme.spacing(2),
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#f3f3f3"
	},
	searchBar: {
		boxShadow: "none",
		border: "1px solid lightgray",
		borderRadius: "15px"
	},
	buttonFull: {
		borderRadius: "15px 0 0 15px"
	},
	buttonMinimal: {
		borderRadius: "0px 15px 15px 0"
	}
}));

export default useStyles;
