import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	fallbackContainer: {
		flex: 1
	},
	fallbackText: {
		fontWeight: 600,
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	isPosts: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4)
	},
	notAccount: {
		marginTop: `${theme.spacing(7)}px !important`,
		marginBottom: "0 !important"
	},
	subtitle: {
		fontSize: "0.7rem",
		textAlign: "center",
		width: "100%",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	icon: {
		fontSize: "0.7rem",
		marginBottom: -1
	}
}));

export default useStyles;
