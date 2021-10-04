import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	subheader: {
		fontSize: "0.7rem"
	},
	cardHeader: {
		paddingBottom: "10px",
		backgroundColor: theme.palette.type === "dark" ? "#3c3c3c " : "#fafafa"
	},
	username: {
		fontWeight: 600
	},
	usernameLink: {
		textDecoration: "none",
		color: theme.palette.primary.main,
		fontWeight: 600,
		fontSize: "0.875rem"
	},
	usernameFavorites: {
		color: theme.palette.success.dark
	},
	usernameDetails: {
		color: theme.palette.secondary.main
	},
	avatarSkeleton: {
		height: 40,
		width: 40,
		backgroundColor: theme.palette.type === "dark" ? "#545454 " : "#f0f0f0"
	},
	authorSkeleton: {
		width: 130,
		backgroundColor: theme.palette.type === "dark" ? "#545454 " : "#f0f0f0",
		borderRadius: 15
	},
	subheaderSkeleton: {
		borderRadius: 15,
		width: 100,
		backgroundColor: theme.palette.type === "dark" ? "#545454 " : "#f3f3f3",
		marginTop: 3
	}
}));

export default useStyles;
