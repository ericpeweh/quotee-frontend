import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	topBar: {
		height: "56px",
		position: "fixed",
		top: 0,
		left: 0,
		borderBottom: theme.palette.type === "dark" ? "1px solid #424242" : "1px solid lightgray",
		boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#f3f3f3",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	}
}));

export default useStyles;
