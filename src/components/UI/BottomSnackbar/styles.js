import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	bottomSnackbar: {
		"& > .MuiSnackbarContent-root": {
			borderRadius: "15px",
			boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
			color: theme.palette.primary.main,
			fontWeight: 600
		}
	}
}));

export default useStyles;
