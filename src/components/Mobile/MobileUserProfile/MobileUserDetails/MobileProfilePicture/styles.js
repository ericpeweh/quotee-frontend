import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	profilePictureContainer: {
		marginTop: theme.spacing(2.5),
		marginBottom: theme.spacing(1.5)
	},
	mobileProfilePicture: {
		width: "100px",
		height: "100px"
	},
	profilePictureSkeleton: {
		width: "100px",
		height: "100px"
	}
}));

export default useStyles;
