import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	socialContainer: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3",
		paddingBottom: theme.spacing(2)
	}
}));

export default useStyles;
