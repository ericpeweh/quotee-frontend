import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	canvasContainer: {
		height: 400,
		width: 300,
		borderRadius: "15px",
		overflow: "hidden",
		margin: theme.spacing(2),
		marginTop: theme.spacing(1),
		marginLeft: 0,
		[theme.breakpoints.down(820)]: {
			margin: "auto"
		}
	},
	canvas: {
		height: "100%",
		width: "100%"
	}
}));

export default useStyles;
