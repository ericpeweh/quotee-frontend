import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	profilePictureContainer: {
		paddingRight: theme.spacing(3)
	},
	profilePicture: {
		width: "120px",
		height: "120px",
		border: "1px solid #878787"
	},
	skeleton: {
		backgroundColor: theme.palette.type === "dark" ? "#545454 " : "#f3f3f3",
		width: "120px",
		height: "120px"
	},
	[theme.breakpoints.down(725)]: {
		profilePictureContainer: {
			paddingRight: theme.spacing(2),
			marginBottom: theme.spacing(1)
		},
		profilePicture: {
			width: "80px",
			height: "80px"
		},
		skeleton: {
			width: "80px",
			height: "80px",
			marginRight: theme.spacing(3)
		}
	},
	[theme.breakpoints.down(650)]: {
		skeleton: {
			marginRight: theme.spacing(1)
		}
	}
}));

export default useStyles;
