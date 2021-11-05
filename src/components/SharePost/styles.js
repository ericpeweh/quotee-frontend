import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	sharePostContainer: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		padding: theme.spacing(3),
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary,
		flexDirection: "column",
		minHeight: "100vh"
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
		marginBottom: theme.spacing(2),
		alignSelf: "flex-start",
		[theme.breakpoints.down(1270)]: {
			maxWidth: "40%",
			flexBasis: "40%"
		},
		[theme.breakpoints.down(1120)]: {
			maxWidth: "45%",
			flexBasis: "45%"
		},
		[theme.breakpoints.down(1000)]: {
			maxWidth: "50%",
			flexBasis: "50%"
		},
		[theme.breakpoints.down(950)]: {
			maxWidth: "100%",
			flexBasis: "100%"
		}
	},
	editorContainer: {
		padding: theme.spacing(1),
		paddingTop: 0,
		overflowY: "auto",
		overflowX: "hidden",
		justifyContent: "flex-start",
		flexDirection: "column",
		height: "91vh",
		flexWrap: "nowrap",
		[theme.breakpoints.down(1270)]: {
			maxWidth: "60%",
			flexBasis: "60%"
		},
		[theme.breakpoints.down(1120)]: {
			maxWidth: "55%",
			flexBasis: "55%"
		},
		[theme.breakpoints.down(1000)]: {
			maxWidth: "50%",
			flexBasis: "50%"
		},
		[theme.breakpoints.down(950)]: {
			maxWidth: "100%",
			flexBasis: "100%",
			padding: 0,
			height: "100%"
		}
	},
	customizeImage: {
		marginTop: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			flexDirection: "row !important"
		}
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
	spinnerContainer: {
		height: "calc(100vh - 100px)"
	}
}));

export default useStyles;
