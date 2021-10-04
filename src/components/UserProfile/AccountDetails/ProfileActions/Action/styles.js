import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	quotesButton: {
		borderRadius: "15px 0 0 15px",
		borderRight: `1px solid ${theme.palette.secondary.main}`,
		padding: "3px"
	},
	touchRipple: {
		color: theme.palette.secondary.main
	},
	followingButton: {
		borderRadius: "0 15px 15px 0",
		borderLeft: `1px solid ${theme.palette.secondary.main}`
	},
	amount: {
		display: "block",
		color: theme.palette.text.primary
	},
	amountDescription: {
		fontSize: "0.9rem",
		[theme.breakpoints.down(725)]: {
			fontSize: "0.7rem"
		}
	}
}));

export default useStyles;
