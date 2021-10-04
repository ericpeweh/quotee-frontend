import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	stylesAndOtherText: {
		paddingTop: theme.spacing(2)
	},
	editorTitle: {
		[theme.breakpoints.down(820)]: {
			textAlign: "center",
			paddingBottom: theme.spacing(1)
		}
	},
	downloadButton: {
		color: "white",
		borderRadius: "15px",
		boxShadow: "none",
		marginTop: theme.spacing(1.5),
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			boxShadow: "none"
		}
	}
}));

export default useStyles;
