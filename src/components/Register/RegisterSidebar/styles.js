import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	registerSidebar: {
		padding: theme.spacing(15),
		paddingTop: theme.spacing(8),
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#e9e9e9",
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(5)
		}
	},
	registerImage: {
		width: 450
	}
}));

export default useStyles;
