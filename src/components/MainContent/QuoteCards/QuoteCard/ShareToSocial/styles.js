import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	shareModal: {
		borderRadius: "15px"
	},
	shareIconContainer: {
		padding: theme.spacing(2)
	},
	sharePostTitle: {
		paddingBottom: theme.spacing(0.5),
		fontWeight: 600,
		fontSize: "1.2rem",
		padding: theme.spacing(4),
		paddingTop: theme.spacing(3)
	},
	shareButton: {
		padding: `4px !important`,
		"&:focus-visible": {
			outline: "none"
		}
	},
	copyButton: {
		display: "flex",
		marginTop: "4px !important",
		marginLeft: "4px"
	},
	tooltip: {
		margin: "4px"
	},
	copyLinkButton: {
		width: 40,
		height: 40,
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#e6e6e6",
		"&:hover": {
			backgroundColor:
				theme.palette.type === "dark" ? "rgba(255, 255, 255, 0.7)" : theme.palette.secondary.light
		}
	},
	cancelButton: {
		borderRadius: "15px"
	}
}));

export default useStyles;
