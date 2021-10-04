import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	followButton: {
		width: "85%",
		color: "#f3f3f3",
		marginTop: theme.spacing(1.5),
		marginBottom: theme.spacing(1),
		borderRadius: "15px",
		boxShadow: "none",
		padding: "6px 16px",
		"&:hover": {
			boxShadow: "none"
		}
	},
	followingButton: {
		width: "85%",
		color: "#f3f3f3",
		marginTop: theme.spacing(1.5),
		marginBottom: theme.spacing(1),
		borderRadius: "15px",
		boxShadow: "none",
		padding: "6px 16px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
			boxShadow: "none"
		}
	}
}));

export default useStyles;
