import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	quotesInput: {
		borderRadius: "15px"
	},
	tagsInput: {
		"& > .MuiOutlinedInput-root": {
			borderRadius: "15px"
		}
	},
	createButton: {
		color: "#f3f3f3",
		boxShadow: "none",
		borderRadius: "15px",
		height: 40,
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
			boxShadow: "none"
		},
		"&:active": {
			boxShadow: "none"
		}
	},
	cancelButton: {
		color: "#404040",
		boxShadow: "none",
		borderRadius: "15px",
		height: 40,
		"&:hover": {
			backgroundColor: "#d6d6d6",
			boxShadow: "none"
		},
		"&:active": {
			boxShadow: "none",
			backgroundColor: "#ebebeb"
		},
		"&:focus-visible": {
			boxShadow: "none",
			backgroundColor: "#d6d6d6"
		}
	}
}));

export default useStyles;
