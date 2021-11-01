import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(2),
		width: "100%"
	},
	masonryGrid: {
		display: "flex",
		width: "100%",
		"& > div:nth-child(1)": {
			paddingLeft: 0,
			paddingRight: theme.spacing(0)
		}
	},
	newPostsButton: {
		color: "#f3f3f3",
		backgroundColor: "#c4c4c4",
		boxShadow: "none",
		borderRadius: "15px",
		position: "absolute",
		marginTop: -theme.spacing(1),
		minWidth: 120,
		height: 30,
		"&:hover": {
			boxShadow: "none",
			backgroundColor: theme.palette.secondary.main
		},
		"&:active": {
			boxShadow: "none"
		}
	},
	masonryGridColumn: {
		backgroundClip: "padding-box",
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3",
		"& > div": {
			marginBottom: theme.spacing(2)
		}
	},
	loadingMoreQuotes: {
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3",
		padding: 15
	},
	[theme.breakpoints.up("xl")]: {
		masonryGrid: {
			"& > div:nth-child(1)": {
				paddingLeft: 0,
				paddingRight: theme.spacing(1)
			}
		},
		masonryGridColumn: {
			paddingLeft: theme.spacing(1) /* gutter size */
		}
	}
}));

export default useStyles;
