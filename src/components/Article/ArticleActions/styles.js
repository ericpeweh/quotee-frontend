import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	button: {
		color: theme.palette.text.secondary,
		borderRadius: 15
	},
	buttonSkeleton: {
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#e3e3e3",
		borderRadius: 15,
		height: 30,
		width: 130
	}
}));

export default useStyles;
