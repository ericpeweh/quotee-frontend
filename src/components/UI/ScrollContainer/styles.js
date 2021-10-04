import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	scrollContainer: {
		height: "100%",
		overflowY: "scroll",
		paddingTop: 56 + theme.spacing(1),
		paddingBottom: 56 + theme.spacing(1),
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		[theme.breakpoints.down("xs")]: {
			minHeight: `100vh`,
			paddingTop: 56,
			paddingBottom: 56
		}
	}
}));

export default useStyles;
