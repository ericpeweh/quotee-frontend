import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	title: {
		fontWeight: 600
	},
	changeImageContainer: {
		padding: theme.spacing(2),
		borderRight: theme.palette.type === "dark" ? "2px solid #545454" : "2px solid #bfbfbf",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			borderRight: "none"
		},
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(0)
		}
	},
	button: {
		marginTop: theme.spacing(1),
		borderRadius: 15,
		boxShadow: "none",
		transition: "0.3s ease-out",
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
			boxShadow: "none",
			color: "#f3f3f3"
		}
	},
	imageUrlContainer: {
		marginTop: theme.spacing(1)
	},
	setImageUrlButton: {
		color: "white",
		borderRadius: "0px 15px 15px 0px",
		boxShadow: "none",
		padding: theme.spacing(1),
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
			boxShadow: "none"
		}
	},
	imageURLInput: {
		borderRadius: "15px 0px 0px 15px"
	},
	divider: {
		margin: theme.spacing(1)
	}
}));

export default useStyles;
