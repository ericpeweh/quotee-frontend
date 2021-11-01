import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	textPositionsContainer: {
		// backgroundColor: "#545454",
		width: "100%",
		borderRadius: 15,
		padding: theme.spacing(2),
		[theme.breakpoints.down("xs")]: {
			paddingTop: theme.spacing(1),
			padding: theme.spacing(0)
		}
	},
	sideButton: {
		borderRadius: 15
	},
	quotesPositionTitle: {
		paddingBottom: theme.spacing(1)
	},
	authorPositionTitle: {
		paddingBottom: theme.spacing(1),
		paddingTop: theme.spacing(1)
	},
	button: {
		boxShadow: "none",
		transition: "0.3s ease-out",
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
			boxShadow: "none",
			color: "#f3f3f3"
		}
	}
}));

export default useStyles;
