import { makeStyles } from "@material-ui/core";

const drawerWidth = 235;

const useStyles = makeStyles(theme => ({
	userFavorites: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		padding: theme.spacing(3),
		minHeight: "100vh",
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#f3f3f3"
	},
	favoritesContainer: {
		flex: 1
	},
	favoritesTitle: {
		fontWeight: 600,
		fontSize: "1.25rem",
		marginBottom: "8px",
		color: theme.palette.success.dark
	},
	favoritesSubtitle: {
		fontSize: "0.7rem",
		textAlign: "center",
		width: "100%",
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	favoritesIcon: {
		fontSize: "0.7rem"
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
			}
		}
	},
	masonryGridColumn: {
		paddingLeft: theme.spacing(1) /* gutter size */,
		backgroundClip: "padding-box",
		"& > div": {
			marginBottom: theme.spacing(2),
			marginTop: theme.spacing(2)
		}
	}
}));

export default useStyles;
