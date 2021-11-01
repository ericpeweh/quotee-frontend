import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	archived: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		minHeight: "100vh",
		padding: theme.spacing(3),
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3"
	},
	archivedContainer: {
		marginTop: "1px",
		height: "100%",
		flex: 1
	},
	masonryGrid: {
		display: "flex",
		width: "100%",
		"& > div:nth-child(1)": {
			paddingLeft: 0,
			paddingRight: "16px"
		},
		"& > div:nth-child(2)": {
			paddingLeft: 0,
			paddingRight: 0
		},
		[theme.breakpoints.down(850)]: {
			"& > div:nth-child(1)": {
				paddingRight: 0
			},
			flex: 1
		}
	},
	masonryGridColumn: {
		paddingLeft: theme.spacing(1) /* gutter size */,
		backgroundClip: "padding-box",
		"& > div": {
			marginBottom: theme.spacing(2),
			marginTop: theme.spacing(2)
		},
		[theme.breakpoints.down("xs")]: {
			"& > div:nth-child(1)": {
				marginTop: "0 !important"
			},
			"& > div:last-child, & > div:last-child > div": {
				marginBottom: "0 !important"
			}
		}
	},
	[theme.breakpoints.down("xs")]: {
		archived: {
			marginLeft: 0,
			paddingTop: 56,
			paddingBottom: 56,
			padding: 0,
			width: "100%",
			alignItems: "center",
			justifyContent: "center"
		}
	}
}));

export default useStyles;
