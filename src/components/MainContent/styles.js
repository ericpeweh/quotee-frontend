import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;
const sideBarWidth = 250;
const smallSideBarWidth = 60;

const useStyles = makeStyles(theme => ({
	mainContentContainer: {
		marginLeft: `${drawerWidth}px`,
		padding: theme.spacing(3),
		width: `calc(100% - ${drawerWidth}px - ${sideBarWidth}px)`,
		[theme.breakpoints.down("md")]: {
			width: `calc(100% - ${drawerWidth}px - ${smallSideBarWidth}px )`
		},
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3"
	}
}));

export default useStyles;
