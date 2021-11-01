import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	imageSettingsContainer: {
		// backgroundColor: "#545454",
		borderRadius: 15,
		padding: theme.spacing(2),
		width: "100%",
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(0),
			paddingTop: theme.spacing(1)
		}
	},
	divider: {
		margin: theme.spacing(1)
	},
	imagePositionTitle: {
		paddingBottom: theme.spacing(1)
	},
	imageBlurTitle: {
		paddingTop: theme.spacing(1)
	},
	sliderValueLabel: {
		color: theme.palette.secondary.light
	},
	sideButton: {
		borderRadius: 15
	},
	button: {
		boxShadow: "none",
		transition: "0.3s ease-out",
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
			boxShadow: "none",
			color: "#f3f3f3"
		}
	}
}));

export default useStyles;
