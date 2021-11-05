import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	title: {
		fontWeight: 600,
		fontSize: "1.25rem",
		marginBottom: "8px"
	},
	primary: {
		color: theme.palette.primary.main
	},
	secondary: {
		color: theme.palette.secondary.main
	},
	info: {
		color: theme.palette.info.main
	},
	success: {
		color: theme.palette.success.dark
	},
	backButton: {
		color: theme.palette.text.secondary,
		borderRadius: "15px",
		padding: theme.spacing(1),
		marginBottom: theme.spacing(1),
		marginRight: theme.spacing(1),
		[theme.breakpoints.down("xs")]: {
			display: "none"
		}
	}
}));

export default useStyles;
