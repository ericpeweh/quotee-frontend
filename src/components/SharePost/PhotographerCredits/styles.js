import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	container: {
		width: "100%",
		marginTop: -theme.spacing(1),
		paddingBottom: theme.spacing(1)
	},
	text: {
		fontSize: "0.8rem",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary,
		"& > a": {
			color: theme.palette.type === "dark" ? "#c4c4c4" : "#4a4a4a"
		}
	}
}));

export default useStyles;
