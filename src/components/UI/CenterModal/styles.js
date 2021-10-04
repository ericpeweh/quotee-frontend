import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	centerModalContainer: {
		padding: theme.spacing(3),
		borderRadius: "15px"
	},
	successIcon: {
		fontSize: "4rem",
		color: theme.palette.success.main
	},
	errorIcon: {
		fontSize: "4rem",
		color: theme.palette.primary.main
	},
	dialogText: {
		fontSize: "0.9rem",
		textAlign: "center",
		marginTop: theme.spacing(1)
	},
	cancelButton: {
		marginTop: theme.spacing(2),
		borderRadius: "15px"
	},
	successButton: {
		color: theme.palette.success.main,
		border: `1px solid ${theme.palette.success.main}`,
		"&:hover": {
			border: `1px solid ${theme.palette.success.main}`
		}
	},
	errorButton: {
		color: theme.palette.primary.main,
		border: `1px solid ${theme.palette.primary.main}`,
		"&:hover": {
			border: `1px solid ${theme.palette.primary.main}`
		}
	}
}));

export default useStyles;
