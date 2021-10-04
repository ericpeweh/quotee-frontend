import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	securityTab: {
		padding: theme.spacing(3),
		paddingTop: theme.spacing(1.5),
		color: theme.palette.type === "dark" ? "#ffffff" : theme.palette.text.primary,
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#fefefe",
		borderRadius: "0 15px 15px 0",
		[theme.breakpoints.down("sm")]: {
			borderRadius: 0
		}
	},
	changePassword: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(1)
	}
}));

export default useStyles;
