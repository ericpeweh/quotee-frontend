import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	notificationDrawer: {
		width: "25%",
		padding: theme.spacing(2),
		[theme.breakpoints.down("md")]: {
			width: "35%"
		},
		[theme.breakpoints.down("sm")]: {
			width: "45%"
		}
	},
	drawerTitle: {
		fontSize: "1.1rem",
		fontWeight: 600,
		paddingBottom: theme.spacing(1)
	},
	loadMoreButton: {
		borderRadius: "15px"
	},
	notificationText: {
		paddingTop: theme.spacing(2)
	},
	spinner: {
		margin: "auto"
	}
}));

export default useStyles;
