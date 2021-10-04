import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	registerForm: {
		padding: theme.spacing(15),
		paddingTop: theme.spacing(6),
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(5)
		},
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(3),
			backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3"
		}
	},
	registerTitle: {
		paddingBottom: theme.spacing(2),
		fontWeight: 600,
		fontSize: "1.4rem",
		width: "100%"
	},
	logo: {
		width: 150
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
	registerButton: {
		color: "white",
		boxShadow: "none",
		borderRadius: "15px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
			boxShadow: "none"
		}
	},
	signInText: {
		textAlign: "center",
		fontSize: "0.8rem"
	},
	signInLink: {
		color: theme.palette.primary.main
	},
	[theme.breakpoints.down("xs")]: {
		logo: {
			width: 120,
			marginBottom: theme.spacing(4)
		}
	}
}));

export default useStyles;
