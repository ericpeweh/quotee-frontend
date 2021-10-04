import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	qrCodeContainer: {
		height: "100vh"
	},
	qrcode: {
		border: `2px solid ${theme.palette.primary.main}`,
		borderRadius: "15px"
	},
	// qrcanvas: {
	// 	display: "none"
	// },
	username: {
		fontWeight: 600,
		color: theme.palette.primary.main
	}
}));

export default useStyles;
