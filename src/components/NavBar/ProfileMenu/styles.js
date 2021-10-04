import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	navLink: {
		color: "black",
		textDecoration: "none"
	},
	selectedIcon: {
		color: theme.palette.primary.main
	},
	selectedText: {
		color: theme.palette.primary.main
	},
	linkContainer: {
		padding: "1rem 1rem 1rem 0"
	},
	listItem: {
		borderRadius: "0 20px 20px 0",
		paddingLeft: "20px"
	},
	menuTitle: {
		paddingLeft: "15px",
		fontSize: "0.85rem"
	},
	listText: {
		fontSize: "0.9rem"
	}
}));

export default useStyles;
