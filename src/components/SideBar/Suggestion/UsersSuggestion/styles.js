import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	avatar: {
		width: theme.spacing(4),
		height: theme.spacing(4)
	},
	openButton: {
		fontSize: "0.6rem",
		borderRadius: "15px",
		boxShadow: "none",
		color: "#f3f3f3",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			boxShadow: "none"
		}
	},
	username: {
		fontWeight: 600,
		textDecoration: "none",
		color: theme.palette.secondary.main
	},
	users: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	card: {
		border: 0,
		backgroundColor: "transparent"
	},
	cardAvatar: {
		marginRight: "12px"
	},
	subHeader: {
		fontSize: "0.6rem"
	},
	cardHeader: {
		padding: "10px",
		paddingBottom: "5px"
	},
	action: {
		alignSelf: "center",
		margin: 0
	},
	avatarSkeleton: {
		width: 32,
		height: 32,
		backgroundColor: theme.palette.type === "dark" ? "#545454 " : "#f3f3f3"
	},
	usernameSkeleton: {
		backgroundColor: theme.palette.type === "dark" ? "#545454 " : "#f3f3f3",
		borderRadius: 15,
		width: "100%"
	},
	quotesSkeleton: {
		backgroundColor: theme.palette.type === "dark" ? "#545454 " : "#f3f3f3",
		borderRadius: 15,
		width: "40%",
		marginTop: 3
	}
}));

export default useStyles;
