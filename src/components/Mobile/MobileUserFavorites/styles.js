import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	favoritesTopBar: {
		height: "56px",
		borderBottom: "1px solid rgba(0,0,0,0.12)",
		boxShadow: "0 3px 10px rgb(0 0 0 / 10%)",
		position: "fixed",
		width: "100%",
		top: 0,
		left: 0,
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#f3f3f3",
		zIndex: 100,
		color: theme.palette.success.dark
	},
	mobileUserFavorites: {
		width: "100%",
		paddingTop: "56px",
		padding: 0,
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		minHeight: "100vh"
	},
	favoritesTitle: {
		fontWeight: 600,
		fontSize: "1.25rem",
		margin: "8px 12px"
	},
	favoritesSubtitle: {
		fontSize: "0.7rem",
		textAlign: "center",
		width: "100%",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	favoritesIcon: {
		fontSize: "0.7rem"
	},
	favoritesContainer: {
		paddingBottom: "40px"
	},
	cardContainer: {
		width: "100%"
	}
}));

export default useStyles;
