import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	divider: {
		height: "3px",
		backgroundColor: theme.palette.secondary.main,
		width: "12%",
		margin: "10px auto 0"
	},
	downloadQualityText: {
		fontWeight: 600,
		paddingTop: theme.spacing(1)
	}
}));

export default useStyles;
