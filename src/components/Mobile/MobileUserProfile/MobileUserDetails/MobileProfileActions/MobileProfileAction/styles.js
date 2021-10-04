import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	amountDescription: {
		margin: theme.spacing(1.5)
	},
	touchRipple: {
		color: theme.palette.secondary.main
	},
	amount: {
		display: "block",
		color: theme.palette.text.primary
	},
	actionButtonSkeleton: {
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		height: 70,
		width: "100%"
	}
}));

export default useStyles;
