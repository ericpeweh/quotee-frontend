import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	adsDialog: {
		borderRadius: 15
	},
	adsImage: {
		maxWidth: "100%",
		borderRadius: 15
	},
	dialogText: {
		paddingTop: theme.spacing(3),
		textAlign: "justify"
	},
	button: {
		borderRadius: 15
	}
}));

export default useStyles;
