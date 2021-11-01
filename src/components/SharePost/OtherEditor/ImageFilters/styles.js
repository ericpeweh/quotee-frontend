import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	imageFiltersContainer: {
		paddingTop: 0,
		padding: theme.spacing(2),
		paddingLeft: theme.spacing(4),
		[theme.breakpoints.down("md")]: {
			paddingLeft: theme.spacing(2)
		},
		[theme.breakpoints.down("xs")]: {
			paddingLeft: theme.spacing(0),
			paddingTop: theme.spacing(2)
		}
	},
	preferencesTitle: {
		marginLeft: -12,
		[theme.breakpoints.down("md")]: {
			marginLeft: 0
		}
	},
	noSelect: {
		"-webkit-touch-callout": "none",
		"-webkit-user-select": "none",
		"-khtml-user-select": "none",
		"-moz-user-select": "none",
		"-ms-user-select": "none",
		"user-select": "none"
	}
}));

export default useStyles;
