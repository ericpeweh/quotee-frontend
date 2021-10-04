import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	draftItem: {
		borderRadius: "15px",
		border: "1px solid rgba(0, 0, 0, 0.12)",
		boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
		minHeight: "160px",
		maxHeight: "250px"
	},
	draftItemContainer: {
		padding: theme.spacing(2),
		paddingBottom: theme.spacing(0.5)
	},
	draftItemContainerMobile: {
		padding: theme.spacing(3),
		justifyContent: "center",
		marginBottom: theme.spacing(0.5)
	},
	quotes: {
		fontSize: "1rem"
	},
	chipContainer: {
		listStyle: "none",
		display: "flex",
		padding: 0,
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(0.5),
		marginLeft: 0,
		justifyContent: "center",
		width: "100%",
		overflowY: "auto",
		// Hide scrollbar
		"&::-webkit-scrollbar": {
			display: "none"
		},
		"-ms-overflow-style": "none" /* IE and Edge */,
		"scrollbar-width": "none" /* Firefox */
	},
	chip: {
		margin: theme.spacing(0.5)
	},
	editButton: {
		marginBottom: theme.spacing(1),
		color: "#f3f3f3",
		boxShadow: "none",
		borderRadius: 15,
		"&:hover": {
			backgroundColor: theme.palette.secondary.main
		},
		"&:active": {
			boxShadow: "none"
		}
	},
	[theme.breakpoints.down("xs")]: {
		draftItem: {
			borderRadius: 0
		}
	},
	[theme.breakpoints.down("sm")]: {
		quotes: {
			textAlign: "center"
		},
		chipContainer: {
			marginBottom: theme.spacing(2)
		},
		lastEdited: {
			textAlign: "center",
			fontSize: "0.8rem"
		}
	},
	[theme.breakpoints.down("md")]: {
		editButton: {
			width: "100%",
			marginTop: theme.spacing(1)
		},
		detailContainer: {
			flexDirection: "column"
		},
		editButtonContainer: {
			width: "100%"
		}
	}
}));

export default useStyles;
