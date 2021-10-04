import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	container: {
		marginLeft: `calc(100% - ${drawerWidth}px)`,
		width: `250px`,
		borderRadius: 0,
		height: "100vh",
		position: "fixed",
		top: 0,
		right: 0,
		boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
		[theme.breakpoints.down("md")]: {
			width: "60px"
		}
	}
}));

export default useStyles;
