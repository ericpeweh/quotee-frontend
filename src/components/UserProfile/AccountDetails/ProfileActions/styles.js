import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	buttonContainer: {
		border: `1px solid ${theme.palette.secondary.main}`,
		borderRadius: "15px",
		marginTop: theme.spacing(1),
		minWidth: "250px"
	},
	skeleton: {
		width: "400px",
		height: "50px",
		borderRadius: "15px",
		backgroundColor: theme.palette.type === "dark" ? "#545454" : "#f3f3f3",
		[theme.breakpoints.down("sm")]: {
			width: "300px"
		},
		[theme.breakpoints.down(650)]: {
			marginLeft: "-10px"
		}
	}
}));

export default useStyles;
