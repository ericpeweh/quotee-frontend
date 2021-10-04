import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	badgeContainer: {
		maxWidth: "220px",
		margin: "auto",
		[theme.breakpoints.down("xl")]: {
			position: "fixed",
			bottom: 0,
			left: 0,
			marginBottom: "20px"
		},
		padding: "5px 20px"
	},
	userGreeting: {
		fontSize: "0.9rem",
		fontWeight: 600
	},
	userBadgeName: {
		fontSize: "0.9rem",
		fontWeight: 600
	},
	userProfileImage: {
		border: "1px solid #878787"
	}
}));

export default useStyles;
