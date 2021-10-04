import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	createElement: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		padding: theme.spacing(3),
		justifyContent: "flex-start",
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		minHeight: "100vh",
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(2),
			width: "100%",
			marginLeft: 0,
			paddingTop: "70px",
			paddingBottom: "70px"
		}
	},
	createContainer: {
		[theme.breakpoints.down("xs")]: {
			flexDirection: "row-reverse"
		}
	},
	createTitle: {
		fontSize: "1.25rem",
		fontWeight: 600,
		color: theme.palette.primary.main,
		flex: 1,
		paddingBottom: theme.spacing(2),
		[theme.breakpoints.down("xs")]: {
			paddingLeft: 0,
			paddingTop: 0,
			padding: theme.spacing(2.5)
		}
	},
	backButton: {
		textDecoration: "none"
	}
}));

export default useStyles;
