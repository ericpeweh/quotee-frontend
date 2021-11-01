import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	usersContainer: {
		flex: 1
	},
	searchBar: {
		border: "1px solid lightgray",
		borderRadius: "15px",
		boxShadow: "none",
		margin: "10px 15px",
		height: "40px"
	},
	spinnerContainer: {
		flex: 1,
		paddingBottom: "56px",
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3"
	},
	spinner: {},
	noUserFound: {
		textAlign: "center",
		flex: 1,
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary,
		paddingTop: 10
	}
}));

export default useStyles;
