import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	articlesContainer: {
		maxWidth: "100%",
		marginBottom: 0,
		marginTop: 0
	},
	articleSkeleton: {
		borderRadius: 15,
		height: 180
	},
	articleContainerSkeleton: {
		width: "100%"
	}
}));

export default useStyles;
