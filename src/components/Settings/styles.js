import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	settingsContainer: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		padding: theme.spacing(3),
		minHeight: "100vh",
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3"
	},
	titleContainer: {
		width: "100%",
		marginBottom: 0
	},
	settingsTitle: {
		fontSize: "1.25rem",
		fontWeight: 600,
		marginBottom: "8px"
	},
	tabsContainer: {
		border: "1px solid lightgray",
		borderRadius: "15px",
		marginTop: "12px",
		height: "100%"
	},
	[theme.breakpoints.down("xs")]: {
		settingsContainer: {
			margin: 0,
			paddingTop: "56px",
			width: "100%",
			padding: 0
		},
		tabsContainer: {
			border: "none",
			borderTop: "1px solid lightgray",
			borderRadius: 0,
			marginTop: 0,
			maxHeight: "100vh"
		}
	}
}));

export default useStyles;
