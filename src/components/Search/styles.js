import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	searchContainer: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		padding: theme.spacing(3),
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		minHeight: "100vh"
	},
	searchResultText: {
		marginTop: theme.spacing(2),
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	[theme.breakpoints.down("xs")]: {
		searchContainer: {
			marginTop: 56,
			marginBottom: 56,
			marginLeft: 0,
			width: "100%",
			padding: 0
		},
		searchResultText: {
			textAlign: "center"
		}
	}
}));

export default useStyles;
