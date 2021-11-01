import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	downloadButton: {
		color: "white",
		width: 300,
		borderRadius: "15px",
		boxShadow: "none",
		marginBottom: theme.spacing(2),
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			boxShadow: "none"
		}
	}
}));

export default useStyles;
