import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	dialogContent: {
		marginTop: "56px",
		paddingTop: theme.spacing(1),
		padding: theme.spacing(2)
	},
	loadMoreButton: {
		width: "100%",
		borderRadius: "15px",
		color: theme.palette.secondary.main
	},
	notificationText: {
		paddingTop: theme.spacing(2)
	}
}));

export default useStyles;
