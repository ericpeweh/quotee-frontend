import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	settingTab: {
		minHeight: "50px",
		height: "25%",
		textTransform: "capitalize",
		minWidth: "25%",
		color: theme.palette.type === "dark" ? "#ffffff" : theme.palette.text.primary,
		"&:nth-child(1)": {
			borderRadius: "15px 0 0 0"
		}
	},
	tabs: {
		height: "100%",
		backgroundColor: theme.palette.type === "dark" ? "#3c3c3c" : "#f3f3f3",
		borderRadius: "15px 0 0 15px"
	},
	[theme.breakpoints.up("md")]: {
		tabs: {
			borderRight: "1px solid lightgray"
		}
	},
	[theme.breakpoints.down("sm")]: {
		settingTab: {
			width: "25%",
			borderRight: "1px solid lightgray",
			borderBottom: "1px solid lightgray",
			"&:nth-child(4)": {
				borderRight: 0,
				borderRadius: "0 15px 0 0"
			},
			"&:nth-child(1)": {
				borderRadius: "15px 0 0 0"
			},
			fontSize: "0.7rem"
		},
		flexContainer: {
			flexDirection: "row"
		},
		indicator: {
			display: "none"
		},
		tabs: {
			borderRadius: "15px 15px 0 0"
		}
	},
	[theme.breakpoints.down("xs")]: {
		tabs: {
			borderRadius: 0
		}
	}
}));

export default useStyles;
