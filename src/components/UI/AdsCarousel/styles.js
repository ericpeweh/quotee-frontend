import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	banner: {
		maxWidth: "100%",
		borderRadius: 15
	},
	buttonBase: {
		borderRadius: 15
	},
	navButton: {
		"& > div > button": {
			height: "0.5rem",
			width: "0.5rem"
		}
	}
}));

export default useStyles;
