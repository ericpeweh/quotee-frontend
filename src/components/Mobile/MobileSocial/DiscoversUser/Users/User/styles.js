import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	userAvatar: {
		marginBottom: theme.spacing(1),
		border: "1px solid lightgray"
	},
	username: {
		fontWeight: 600,
		fontSize: "1.1rem"
	},
	userButton: {
		borderRadius: "15px",
		width: "100%",
		flexDirection: "column",
		padding: "12px 10px",
		boxShadow: "0 3px 3px rgb(0 0 0 / 0.1)"
	},
	user0: {
		backgroundColor: theme.palette.type === "dark" ? "#bf9171" : "#ffe6d5"
	},
	user1: {
		backgroundColor: theme.palette.type === "dark" ? "#899e65" : "#edf8db"
	},
	user2: {
		backgroundColor: theme.palette.type === "dark" ? "#609c86" : "#d9faee"
	},
	user3: {
		backgroundColor: theme.palette.type === "dark" ? "#6c76a3" : "#d9dff8"
	}
}));

export default useStyles;
