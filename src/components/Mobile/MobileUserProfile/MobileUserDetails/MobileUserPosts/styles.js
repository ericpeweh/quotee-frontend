import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	userPosts: {
		scrollMarginTop: "56px",
		"& > .infinite-scroll-component__outerdiv": {
			width: "100%"
		},
		minHeight: "100%",
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#ffffff"
	},
	noPost: {
		backgroundColor: theme.palette.type === "dark" ? "#3c3c3c" : "#ffffff"
	},
	cardContainer: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		boxShadow: "none",
		borderBottom: "1px solid #5c5c5c",
		width: "100%"
	},
	noPostFound: {
		textAlign: "center",
		width: "100%",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary,
		marginTop: theme.spacing(2)
	},
	loadingMorePosts: {
		paddingBottom: 15
	},
	[theme.breakpoints.down("xs")]: {
		userPosts: {
			"& > div > div > div:last-child div": {
				marginBottom: 0
			}
		}
	}
}));

export default useStyles;
