import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	username: {
		fontWeight: 600
	},
	skeleton: {
		backgroundColor: theme.palette.type === "dark" ? "#545454 " : "#f3f3f3",
		borderRadius: "15px",
		width: "250px",
		height: "60px",
		[theme.breakpoints.down(650)]: {
			marginRight: theme.spacing(5)
		}
	},
	moreButtonContainer: {
		alignSelf: "flex-end"
	},
	moreButton: {
		padding: "4px 10px",
		borderRadius: "15px",
		marginLeft: theme.spacing(0.5)
	},
	followingButton: {
		color: "#f3f3f3",
		fontSize: "0.8rem",
		marginLeft: theme.spacing(2),
		borderRadius: "15px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.main
		}
	},
	followButton: {
		color: theme.palette.primary.main,
		fontSize: "0.8rem",
		marginLeft: theme.spacing(2),
		borderRadius: "15px",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: "#f3f3f3"
		}
	},
	myProfileBadge: {
		color: "#f3f3f3",
		fontSize: "0.8rem",
		marginLeft: theme.spacing(2),
		borderRadius: "15px"
	},
	[theme.breakpoints.down(725)]: {
		username: {
			fontSize: "1.2rem"
		},
		followingButton: {
			fontSize: "0.6rem"
		},
		myProfileContainer: {
			order: 2,
			display: "none"
		},
		myProfileBadge: {
			fontSize: "0.6rem"
		},
		profileDetailsContainer: {
			justifyContent: "center"
		}
	},
	[theme.breakpoints.down(623)]: {
		followButtonContainer: {
			order: 2
		},
		followingButton: {
			marginLeft: "-145%",
			marginBottom: theme.spacing(1),
			width: "390%"
		}
	}
}));

export default useStyles;
