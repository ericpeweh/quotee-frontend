import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	usersRecommendation: {
		color: theme.palette.info.main
	},
	mobileSocialContainer: {
		padding: "56px 0",
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3"
	}
}));

export default useStyles;
