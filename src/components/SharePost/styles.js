import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	sharePostContainer: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		padding: theme.spacing(3),
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	divider: {
		margin: 10,
		[theme.breakpoints.down("xs")]: {
			marginTop: 0
		}
	},
	previewContainer: {
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#fbfbfb",
		boxShadow:
			"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
		borderRadius: 15,
		marginBottom: theme.spacing(2)
	},
	customizeImage: {
		marginTop: theme.spacing(2),
		position: "relative"
	},
	textField: {
		borderRadius: "15px"
	},
	editorTitle: {
		fontSize: "1.3rem",
		fontWeight: "bold",
		color: theme.palette.type === "dark" ? "#f3f3f3" : "#4c4c4c",
		paddingTop: theme.spacing(1),
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
			padding: 12,
			paddingTop: 0
		}
	},
	backButton: {
		color: theme.palette.text.secondary,
		borderRadius: "15px",
		position: "absolute",
		top: 10,
		left: 10,
		[theme.breakpoints.down("xs")]: {
			display: "none"
		}
	},
	spinnerContainer: {
		height: "calc(100vh - 100px)"
	}
}));

export default useStyles;
