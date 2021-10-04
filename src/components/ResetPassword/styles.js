import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	resetPasswordContainer: {
		height: "100vh",
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	resetPasswordForm: {
		padding: theme.spacing(3),
		paddingLeft: theme.spacing(10),
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(3)
		}
	},
	changePasswordText: {
		fontWeight: 600
	},
	textField: {
		"& > .MuiOutlinedInput-root": {
			borderRadius: "15px",
			width: "100%"
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
			backgroundColor: theme.palette.secondary.main,
			boxShadow: "none"
		}
	},
	resetPasswordImage: {
		maxWidth: "100%",
		paddingRight: theme.spacing(10)
	}
}));

export default useStyles;
