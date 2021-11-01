import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	draftContainer: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		padding: theme.spacing(3),
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3",
		minHeight: "100vh"
	},
	fallbackContainer: {
		flex: 1,
		flexDirection: "column",
		paddingTop: 12,
		[theme.breakpoints.down("xs")]: {
			paddingTop: 0
		}
	},
	fallbackImageContainer: {
		flex: 1
	},
	[theme.breakpoints.down("xs")]: {
		draftContainer: {
			marginLeft: 0,
			padding: "56px 0",
			width: "100%"
			// padding: theme.spacing(0)
		},
		paper: {
			marginTop: 0
		}
	}
}));

export default useStyles;
