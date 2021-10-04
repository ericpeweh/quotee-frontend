import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	form: {
		marginTop: theme.spacing(2)
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
	},
	textField: {
		"& > .MuiOutlinedInput-root": {
			borderRadius: "15px"
		}
	},
	noEditLabel: {
		fontSize: "0.75rem",
		color: theme.palette.type === "dark" ? "#f3f3f3" : "rgba(0, 0, 0, 0.54)",
		paddingLeft: theme.spacing(2),
		marginTop: "-8px"
	},
	noEditValue: {
		paddingLeft: theme.spacing(2)
	},
	verifiedBadge: {
		backgroundColor: theme.palette.success.main,
		color: theme.palette.type === "dark" ? "#464646" : "#f3f3f3",
		marginLeft: theme.spacing(1)
	},
	verifiedIcon: {
		color: theme.palette.type === "dark" ? "#464646" : "#f3f3f3"
	}
}));

export default useStyles;
