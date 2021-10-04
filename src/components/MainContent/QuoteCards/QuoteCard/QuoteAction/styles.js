import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	cardActions: {
		backgroundColor: theme.palette.type === "dark" ? "#3c3c3c " : "#fafafa",
		padding: theme.spacing(2),
		paddingTop: "5px"
	},
	likes: {
		fontSize: "0.8rem",
		textDecoration: "none",
		cursor: "pointer"
	},
	likeSkeleton: {
		borderRadius: "15px",
		backgroundColor: theme.palette.type === "dark" ? "#545454 " : "#f3f3f3"
	},
	actionButtonSkeleton: {
		width: 100,
		borderRadius: "15px",
		backgroundColor: theme.palette.type === "dark" ? "#545454 " : "#f3f3f3"
	}
}));

export default useStyles;
