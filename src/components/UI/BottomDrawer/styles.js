import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	divider: {
		height: "3px",
		backgroundColor: theme.palette.secondary.main,
		width: "12%",
		margin: "10px auto 0"
	},
	drawerTitle: {
		fontWeight: 600,
		paddingTop: theme.spacing(1)
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
