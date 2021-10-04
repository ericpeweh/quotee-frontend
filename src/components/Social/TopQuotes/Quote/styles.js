import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	quoteContent: {
		minHeight: "150px",
		height: "100%",
		borderRadius: "15px",
		padding: "10px",
		boxShadow: "2px 3px 7px rgb(0 0 0 / 10%)",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	quoteAuthor: {
		fontWeight: 600,
		fontSize: "0.95rem"
	},
	quote0: {
		backgroundColor: theme.palette.type === "dark" ? "#ad7175" : "#ffd6d9"
	},
	quote1: {
		backgroundColor: theme.palette.type === "dark" ? "#bf8c88" : "#fedbd8"
	},
	quote2: {
		backgroundColor: theme.palette.type === "dark" ? "#bf9171" : "#ffe6d5"
	},
	quote3: {
		backgroundColor: theme.palette.type === "dark" ? "#899e65" : "#edf8db"
	},
	quote4: {
		backgroundColor: "#d9faee"
	},
	quote5: {
		backgroundColor: "#d9dff8"
	}
}));

export default useStyles;
