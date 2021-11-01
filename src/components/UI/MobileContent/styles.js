import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	mobileContent: {
		marginTop: "56px",
		marginBottom: "56px"
	},
	mobileContentFixed: {
		marginTop: "56px",
		marginBottom: "56px",
		position: "fixed",
		top: 0,
		left: 0
	},
	contentStyle: {
		backgroundColor: "white",
		zIndex: 90,
		width: "100%",
		minHeight: "100vh"
	}
}));

export default useStyles;
