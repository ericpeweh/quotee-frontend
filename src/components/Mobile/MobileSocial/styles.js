import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	usersRecommendation: {
		color: theme.palette.info.main
	},
	mobileSocialContainer: {
		padding: "56px 0",
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3"
	}
}));

export default useStyles;
