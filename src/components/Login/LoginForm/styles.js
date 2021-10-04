import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	loginForm: {
		padding: theme.spacing(15),
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(5),
			backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3"
		},
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(3),
			backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3"
		}
	},
	loginTitle: {
		paddingBottom: theme.spacing(2),
		fontWeight: 600,
		fontSize: "1.4rem",
		width: "100%"
	},
	logo: {
		width: 150,
		paddingBottom: theme.spacing(1)
	},
	textField: {
		"& > .MuiOutlinedInput-root": {
			borderRadius: "15px"
		}
	},
	showPassword: {
		paddingTop: "0 !important"
	},
	showPasswordLabel: {
		fontSize: "0.8rem",
		userSelect: "none"
	},
	forgotPassword: {
		fontSize: "0.8rem",
		textAlign: "right",
		paddingTop: theme.spacing(1),
		textDecoration: "underline",
		cursor: "pointer"
	},
	loginButton: {
		color: "white",
		boxShadow: "none",
		borderRadius: "15px",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			boxShadow: "none"
		}
	},
	cancelButton: {
		color: "white",
		boxShadow: "none",
		borderRadius: "15px",
		backgroundColor: "#b3b3b3",
		"&:hover": {
			backgroundColor: "#bfbfbf",
			boxShadow: "none"
		}
	},
	signUpText: {
		textAlign: "center",
		fontSize: "0.8rem"
	},
	signUpLink: {
		color: theme.palette.secondary.main
	},
	[theme.breakpoints.down("xs")]: {
		logo: {
			width: 120,
			marginBottom: theme.spacing(4)
		}
	}
}));

export default useStyles;
