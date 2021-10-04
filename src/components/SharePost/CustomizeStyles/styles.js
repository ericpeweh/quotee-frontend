import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	customizeStyles: {
		marginTop: theme.spacing(2)
	},
	stylesAndOtherText: {
		paddingTop: theme.spacing(2)
	},
	editorTitle: {
		[theme.breakpoints.down(820)]: {
			textAlign: "center",
			paddingBottom: theme.spacing(1)
		}
	}
}));

export default useStyles;
