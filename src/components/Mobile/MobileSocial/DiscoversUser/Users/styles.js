import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	usersContainer: {
		margin: "12px"
	},
	userCardSkeleton: {
		width: "100%",
		backgroundColor: "#f3f3f3",
		borderRadius: "15px",
		padding: "20px 10px",
		height: 120
	}
}));

export default useStyles;
