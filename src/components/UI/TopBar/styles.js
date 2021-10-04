import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	topBar: {
		height: "56px",
		position: "fixed",
		top: 0,
		left: 0,
		borderBottom: theme.palette.type === "dark" ? "#424242" : "#f3f3f3",
		boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary,
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#f3f3f3",
		zIndex: 1000
	},
	title: {
		fontSize: "1.25rem",
		margin: "8px 12px"
	}
}));

export default useStyles;
