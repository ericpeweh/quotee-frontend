import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	textField: {
		"& > .MuiOutlinedInput-root": {
			borderRadius: "15px"
		}
	},
	showPassword: {
		paddingTop: "0 !important",
		marginTop: "0 !important"
	},
	inputContainer: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(2),
		"& > div": {
			marginTop: "10px"
		}
	},
	saveButton: {
		color: "white",
		boxShadow: "none",
		borderRadius: "15px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.main
		}
	}
}));

export default useStyles;
