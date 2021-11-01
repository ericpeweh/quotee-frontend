import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	dialog: {
		borderRadius: 15,
		[theme.breakpoints.down("xs")]: {
			borderRadius: 0
		}
	},
	dialogTitle: {
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(1)
		},
		paddingLeft: theme.spacing(3)
	},
	titleContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	backButton: {
		paddingRight: theme.spacing(2),
		marginLeft: -theme.spacing(2),
		[theme.breakpoints.down("xs")]: {
			marginLeft: 0
		}
	},
	title: {
		fontWeight: 600,
		fontSize: "1.3rem"
	},
	searchBarContainer: {
		flex: 1
	},
	searchBarContainerMobile: {
		flex: 1,
		paddingBottom: theme.spacing(2)
	},
	searchBar: {
		width: "100%",
		border: theme.palette.type === "dark" ? "1px solid #f3f3f3" : "1px solid #464646",
		boxShadow: "none",
		borderRadius: 15
	},
	cancelButton: {
		borderRadius: 15
	},
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper
	},
	listItem: {
		height: "100%",
		display: "block",
		overflow: "hidden",
		position: "relative"
	},
	image: {
		left: "50%",
		height: "100%",
		position: "relative",
		transform: "translateX(-50%)",
		objectFit: "cover"
	},
	imageFitWidth: {
		left: "50%",
		width: "100%",
		position: "relative",
		transform: "translateX(-50%)",
		objectFit: "cover"
	},
	loadingMoreImages: {
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#ffffff",
		padding: 15
	},
	spinnerContainer: {
		height: 200
	},
	loadingText: {
		marginTop: theme.spacing(1)
	},
	endOfImages: {
		paddingTop: theme.spacing(2),
		color: "#969696"
	}
}));

export default useStyles;
