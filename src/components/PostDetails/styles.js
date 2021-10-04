import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	postDetails: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		minHeight: "100vh",
		padding: theme.spacing(3),
		position: "relative",
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		marginTop: 0,
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0,
			width: "100%",
			padding: 0
		}
	},
	cardContainer: {
		width: "100%"
	},
	backButton: {
		color: theme.palette.text.secondary,
		borderRadius: "15px",
		position: "absolute",
		top: 28,
		left: 24
	},
	errorImage: {
		maxWidth: 270
	},
	errorText: {
		fontWeight: 600,
		fontSize: "1.1rem"
	}
}));

export default useStyles;
