import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	card: {
		minWidth: "250px",
		borderRadius: "15px",
		border: "1px solid rgba(0, 0, 0, 0.12)",
		boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)"
	},
	mobile: {
		borderRadius: "0px",
		width: "100%",
		boxShadow: "none",
		marginBottom: theme.spacing(2)
	},
	details: {
		marginTop: "56px"
	}
}));

export default useStyles;
