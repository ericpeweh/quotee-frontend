import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	preferencesContainer: {
		paddingTop: 0,
		padding: theme.spacing(2),
		borderRight: theme.palette.type === "dark" ? "2px solid #545454" : "2px solid #bfbfbf",
		[theme.breakpoints.down("xl")]: {
			borderRight: 0
		},
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(0)
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
