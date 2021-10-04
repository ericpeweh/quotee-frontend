import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	loginSidebar: {
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#e9e9e9"
	},
	loginImage: {
		width: 450
	}
}));

export default useStyles;
