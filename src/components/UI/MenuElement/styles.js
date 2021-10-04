import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	menu: {
		borderRadius: "15px",
		width: 180,
		margin: 0,
		"& > ul": {
			padding: "3px"
		}
	},
	menuItem: {
		borderRadius: "15px"
	},
	error: {
		color: theme.palette.error.main
	},
	primary: {
		color: theme.palette.primary.main
	},
	secondary: {
		color: theme.palette.secondary.main
	}
}));

export default useStyles;
