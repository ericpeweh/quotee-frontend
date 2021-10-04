import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	button: {
		color: "white",
		borderRadius: "15px",
		boxShadow: "none",
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
			boxShadow: "none"
		}
	}
}));

export default useStyles;
