import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	backdrop: {
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		zIndex: 10000
	}
}));

export default useStyles;
