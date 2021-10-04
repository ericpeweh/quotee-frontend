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
		height: "100vh",
		paddingTop: "56px",
		paddingBottom: "56px",
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3"
	},
	noUserFound: {
		textAlign: "center",
		marginTop: "-50px"
	}
}));

export default useStyles;
