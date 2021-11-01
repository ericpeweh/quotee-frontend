import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	changeFontsContainer: {
		padding: theme.spacing(2),
		width: "100%",
		borderRight: theme.palette.type === "dark" ? "2px solid #545454" : "2px solid #bfbfbf",
		[theme.breakpoints.down("md")]: {
			borderRight: "none"
		},
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(0)
		}
	},
	selectFontFamily: {
		marginTop: theme.spacing(1)
	},
	selectFontSize: {
		marginTop: theme.spacing(1)
	},
	fontSettingsTitle: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1)
	},
	buttonGroupContainer: {
		border: theme.palette.type === "dark" ? "2px solid #646464" : "1px solid #bfbfbf",
		borderRadius: 5
	},
	textAlignbuttonGroup: {
		[theme.breakpoints.down(1256)]: {
			display: "flex",
			width: "60%",
			"& > button": {
				flex: 1
			}
		},
		[theme.breakpoints.down(960)]: {
			width: "auto",
			display: "block"
		},
		[theme.breakpoints.down(960)]: {
			display: "flex",
			width: "100%"
		}
	},
	fontStylebuttonGroup: {
		[theme.breakpoints.down(1256)]: {
			display: "flex",
			width: "39%",
			"& > button": {
				flex: 1
			}
		},
		[theme.breakpoints.down(960)]: {
			width: "auto",
			display: "block"
		},
		[theme.breakpoints.down(960)]: {
			display: "flex",
			width: "100%"
		}
	},
	colorbuttonGroup: {
		[theme.breakpoints.down(1256)]: {
			display: "flex",
			width: "100%"
		},
		[theme.breakpoints.down(960)]: {
			width: "auto",
			display: "block"
		},
		[theme.breakpoints.down(960)]: {
			display: "flex",
			width: "100%"
		}
	},
	divider: {
		color: theme.palette.type === "dark" ? "#545454" : "#bfbfbf"
	},
	centerDivider: {
		color: theme.palette.type === "dark" ? "#545454" : "#bfbfbf",
		[theme.breakpoints.down(1256)]: {
			display: "none"
		},
		[theme.breakpoints.down(960)]: {
			display: "block"
		}
	},
	colorInput: {
		"-webkit-appearance": "none",
		"-moz-appearance": "none",
		appearance: "none",
		width: 60,
		height: 40,
		backgroundColor: "transparent",
		border: "none",
		cursor: "painter",
		"&::-webkit-color-swatch": {
			borderRadius: 10,
			border: "none"
		},
		"&::-moz-color-swatch": {
			borderRadius: 10,
			border: "none"
		},
		"&:hover": {
			cursor: "pointer"
		},
		[theme.breakpoints.down(1256)]: {
			flex: 1
		}
	},
	radioGroup: {
		display: "flex"
	},
	radioButton: {
		flex: 1
	}
}));

export default useStyles;
