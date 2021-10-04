import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	userDescription: {
		width: "85%",
		paddingTop: theme.spacing(1)
	},
	fullName: {
		color: theme.palette.type === "dark" ? "#f3f3f3" : theme.palette.text.primary
	},
	fullNameSkeleton: {
		width: "70%",
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		borderRadius: "15px"
	},
	descriptionSkeleton: {
		width: "80%",
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		borderRadius: "15px",
		height: 40,
		marginTop: theme.spacing(1)
	}
}));

export default useStyles;
