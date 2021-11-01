import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	articleContainer: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		padding: theme.spacing(3),
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	noPadding: {
		padding: 0
	},
	articleText: {
		textIndent: "2rem"
	},
	articleAuthor: {
		fontWeight: 600,
		textAlign: "right",
		borderTop: "1px solid #696969",
		paddingTop: theme.spacing(2),
		marginTop: theme.spacing(1)
	},
	articleContent: {
		width: "100%"
	},
	publishDateSkeleton: {
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#e3e3e3",
		borderRadius: 15,
		height: 10,
		width: "30%",
		margin: "auto"
	},
	articleTitleSkeleton: {
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#e3e3e3",
		borderRadius: 15,
		height: 30,
		marginTop: theme.spacing(1),
		width: "60%",
		margin: "auto"
	},
	paragraphSkeleton: {
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#e3e3e3",
		borderRadius: 15,
		height: 14,
		marginTop: theme.spacing(1),
		width: "100%",
		margin: "auto"
	},
	paragraphSkeleton1: {
		width: "92%",
		marginRight: 0
	},
	errorImage: {
		maxWidth: 270
	},
	errorText: {
		fontWeight: 600,
		fontSize: "1.1rem",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	errorContainer: {
		minHeight: "100vh"
	},
	wordWrap: {
		wordWrap: "break-word"
	},
	[theme.breakpoints.down("xs")]: {
		articleContainer: {
			width: "100%",
			marginLeft: 0,
			padding: theme.spacing(3),
			paddingBottom: 100,
			paddingTop: 80
		}
	}
}));

export default useStyles;
