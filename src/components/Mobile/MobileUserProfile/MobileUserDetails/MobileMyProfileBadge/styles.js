import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	profileBadge: {
		width: "85%",
		color: "white",
		marginTop: theme.spacing(1.5),
		marginBottom: theme.spacing(1),
		borderRadius: "15px",
		boxShadow: "none",
		"&:hover": {
			boxShadow: "none"
		}
	}
}));

export default useStyles;
