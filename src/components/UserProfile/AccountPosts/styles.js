import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	accountPostsContainer: {
		padding: theme.spacing(3),
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3",
		borderRadius: 0,
		minHeight: `calc(100vh - ${210}px)`
	},
	accountQuotes: {
		marginTop: theme.spacing(1)
	},
	masonryGrid: {
		display: "flex",
		width: "100%",
		"& > div:nth-child(1)": {
			paddingLeft: 0,
			paddingRight: theme.spacing(1)
		}
	},
	masonryGridColumn: {
		paddingLeft: theme.spacing(1) /* gutter size */,
		backgroundClip: "padding-box",
		"& > div": {
			marginBottom: theme.spacing(2),
			marginTop: theme.spacing(2)
		}
	},
	postsTitle: {
		fontWeight: 600,
		fontSize: "1.25rem"
	},
	searchBar: {
		border: "1px solid lightgray",
		boxShadow: "none",
		maxWidth: "220px",
		borderRadius: "15px",
		height: "40px"
	},
	divider: {
		marginTop: theme.spacing(1)
	},
	noPostFound: {
		paddingTop: theme.spacing(3),
		textAlign: "center"
	}
}));

export default useStyles;
