import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	linkContainer: {
		padding: "0 1rem 1rem 0"
	},
	listItem: {
		borderRadius: "0 20px 20px 0",
		paddingLeft: "20px"
	},
	selectedIcon: {
		color: theme.palette.primary.main
	},
	selectedText: {
		color: theme.palette.primary.main
	},
	listText: {
		fontSize: "0.9rem"
	},
	menuTitle: {
		paddingLeft: "15px",
		fontSize: "0.85rem"
	}
}));

export default useStyles;
