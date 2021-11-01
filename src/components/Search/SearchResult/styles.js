import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	searchResultContatainer: {
		paddingTop: theme.spacing(2)
	},
	[theme.breakpoints.down("xs")]: {
		searchResultContatainer: {
			paddingTop: 0
		}
	},
	loadingMoreQuotes: {
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		padding: 15
	},
	masonryGrid: {
		display: "flex",
		width: "100%",
		"& > div:nth-child(1)": {
			paddingLeft: 0,
			paddingRight: "16px"
		},
		"& > div:nth-child(2)": {
			paddingLeft: 0,
			paddingRight: 0
		},
		[theme.breakpoints.down("sm")]: {
			"& > div:nth-child(1)": {
				paddingRight: 0
			}
		}
	},
	masonryGridColumn: {
		paddingLeft: theme.spacing(1) /* gutter size */,
		backgroundClip: "padding-box",
		"& > div": {
			marginBottom: theme.spacing(2),
			marginTop: theme.spacing(2)
		},
		[theme.breakpoints.down("xs")]: {
			"& > div": {
				marginTop: 0
			},
			"& > div:last-child": {
				marginBottom: 0
			},
			"& > div:last-child div": {
				marginBottom: 0
			}
		}
	}
}));

export default useStyles;
