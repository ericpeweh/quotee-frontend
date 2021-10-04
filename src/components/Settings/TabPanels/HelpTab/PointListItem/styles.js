import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	listItem: {
		padding: "10px",
		borderRadius: "15px",
		margin: theme.spacing(0.5),
		marginLeft: 0,
		color: "#060606"
	},
	secondary: {
		backgroundColor: theme.palette.secondary.light
	},
	primary: {
		backgroundColor: theme.palette.primary.light
	}
}));

export default useStyles;
