import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	qrCodeContainer: {
		height: "100vh",
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3"
	},
	qrcode: {
		border: `2px solid ${theme.palette.primary.main}`,
		borderRadius: "15px"
	},
	username: {
		fontWeight: 600,
		color: theme.palette.primary.main
	}
}));

export default useStyles;
