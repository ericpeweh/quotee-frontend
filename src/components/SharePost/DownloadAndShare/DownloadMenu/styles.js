import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	downloadMenu: {
		borderRadius: "15px"
	},
	divider: {
		height: "1px",
		backgroundColor: theme.palette.text.main,
		width: "100%",
		margin: "10px auto 0"
	},
	downloadQualityText: {
		fontWeight: 600,
		paddingTop: theme.spacing(1)
	},
	listItem: {
		textAlign: "center"
	}
}));

export default useStyles;
