import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	pictureTitle: {
		marginTop: theme.spacing(2),
		fontSize: "0.9rem"
	},
	avatarContainer: {
		padding: theme.spacing(1),
		paddingLeft: 0,
		marginBottom: theme.spacing(1)
	},
	userAvatar: {
		width: "50px",
		height: "50px"
	},
	changeAvatarButton: {
		height: "30px",
		textTransform: "capitalize",
		marginLeft: theme.spacing(1.5),
		borderRadius: "15px"
	},
	removeAvatarButton: {
		height: "30px",
		textTransform: "capitalize",
		borderRadius: "15px",
		marginLeft: theme.spacing(1)
	},
	fileInput: {
		display: "none"
	},
	buttonSkeleton: {
		height: 30,
		width: 60,
		borderRadius: "15px",
		backgroundColor: "#f3f3f3",
		marginLeft: theme.spacing(1)
	}
}));

export default useStyles;
