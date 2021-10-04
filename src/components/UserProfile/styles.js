import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	userProfileContainer: {
		marginLeft: `${drawerWidth}px`,
		width: `calc(100% - ${drawerWidth}px)`,
		borderRadius: 0
	},
	failedContainer: {
		height: "100vh"
	},
	userDetailsContainer: {
		minHeight: "210px",
		padding: "15px 0",
		boxSizing: "border-box",
		borderBottom: theme.palette.type === "dark" ? "1px solid #3c3c3c" : "1px solid lightgray",
		boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
		backgroundColor: theme.palette.type === "dark" ? "#3c3c3c" : "#fefefe"
	},
	// Responsive
	[theme.breakpoints.down(725)]: {
		userDetailsContainer: {
			flexDirection: "column"
		},
		profileComponent: {
			alignItems: "center"
		}
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
