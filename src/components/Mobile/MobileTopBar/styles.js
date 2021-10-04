import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	mobileTopNavbar: {
		position: "fixed",
		top: 0,
		zIndex: 20,
		width: "100%",
		height: "56px",
		padding: "8px 12px",
		boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
		border: theme.palette.type === "dark" ? "none" : "1px solid rgba(0, 0, 0, 0.12)",
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#f3f3f3"
	},
	logo: {
		height: "24px"
	}
}));

export default useStyles;
