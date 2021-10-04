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
	masonryGridColumn: {
		backgroundClip: "padding-box",
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		"& > div": {
			marginBottom: theme.spacing(2)
		}
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
