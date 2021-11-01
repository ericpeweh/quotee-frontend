import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	userDescription: {
		fontSize: "0.9rem"
	},
	[theme.breakpoints.down(725)]: {
		userDescription: {
			fontSize: "0.7rem",
			textAlign: "center",
			width: "100%"
		},
		userDescriptionContatiner: {
			maxWidth: "100%"
		}
	}
}));

export default useStyles;
