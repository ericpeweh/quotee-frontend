import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	imagesContainers: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		backgroundColor: theme.palette.background.paper,
		marginTop: theme.spacing(1),
		borderRadius: "15px"
	},
	imageSelectionTitle: {
		paddingBottom: theme.spacing(1)
	},
	editorTitle: {
		textAlign: "center",
		paddingBottom: theme.spacing(1)
	},
	imageList: {
		height: 400,
		width: "100%",
		borderRadius: "15px",
		[theme.breakpoints.down(820)]: {
			textAlign: "center",
			paddingBottom: theme.spacing(1)
		}
	},
	imageListItem: {
		height: 250,
		padding: "1px !important",
		borderRadius: "15px"
	},
	image: {
		width: "100%",
		objectFit: "cover"
	}
}));

export default useStyles;
