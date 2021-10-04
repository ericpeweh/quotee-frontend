import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	searchModal: {
		borderRadius: "15px",
		padding: "16px 5px"
	},
	searchModalMobile: {
		borderRadius: 0,
		padding: "16px 6px"
	},
	modalTitle: {
		fontSize: "1.2rem",
		marginLeft: theme.spacing(3),
		marginBottom: theme.spacing(1),
		fontWeight: 600
	},
	dialogContent: {
		marginTop: theme.spacing(1)
	},
	dialogContentRoot: {
		padding: theme.spacing(1),
		paddingTop: "56px"
	},
	textField: {
		margin: theme.spacing(1)
	},
	dateInputMobile: {
		paddingTop: "0 !important",
		paddingBottom: "0 !important"
	},
	input: {
		borderRadius: "15px"
	},
	dateInput: {
		"& .MuiInputBase-root": {
			borderRadius: "15px"
		}
	},
	searchButton: {
		color: "white",
		boxShadow: "none",
		borderRadius: "15px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
			boxShadow: "none"
		}
	},
	cancelButton: {
		boxShadow: "none",
		borderRadius: "15px",
		marginRight: theme.spacing(1),
		border: 0,
		"&:hover": {
			backgroundColor: "lightgray",
			boxShadow: "none"
		}
	},
	[theme.breakpoints.down("xs")]: {
		searchButton: {
			width: "100%"
		},
		cancelButton: {
			width: "100%",
			marginRight: 0,
			marginTop: theme.spacing(1)
		}
	}
}));

export default useStyles;
