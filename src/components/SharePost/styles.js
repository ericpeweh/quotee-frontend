import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	sharePostContainer: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		padding: theme.spacing(3),
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	customizeImage: {
		marginTop: theme.spacing(2)
	},
	textField: {
		borderRadius: "15px"
	},
	editorTitle: {
		[theme.breakpoints.down(820)]: {
			textAlign: "center",
			paddingBottom: theme.spacing(1)
		}
	},
	[theme.breakpoints.down("xs")]: {
		sharePostContainer: {
			marginLeft: 0,
			width: "100%",
			marginTop: "56px",
			marginBottom: "56px",
			paddingTop: 0
		}
	}
}));

export default useStyles;
