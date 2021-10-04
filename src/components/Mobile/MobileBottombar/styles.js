import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	bottomNavigation: {
		width: "100%",
		position: "fixed",
		bottom: 0,
		boxShadow: theme.palette.type === "dark" ? "1px solid #424242" : "0 3px 10px rgb(0 0 0 / 0.1)",
		border: theme.palette.type === "dark" ? "none" : "1px solid rgba(0, 0, 0, 0.12)",
		zIndex: 100
	},
	searchIcon: {
		fontSize: "1.6rem"
	},
	profilePicture: {
		width: theme.spacing(4),
		height: theme.spacing(4)
	},
	menuSelected: {
		paddingTop: "16px !important"
	},
	menuSelectedAvatar: {
		border: `2px solid ${theme.palette.primary.main}`,
		boxSizing: "content-box"
	}
}));

export default useStyles;
