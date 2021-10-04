import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	helpTab: {
		padding: theme.spacing(3),
		paddingTop: theme.spacing(1.5),
		color: theme.palette.type === "dark" ? "#ffffff" : theme.palette.text.primary,
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#fefefe",
		borderRadius: "0 15px 15px 15px",
		[theme.breakpoints.down("xs")]: {
			borderRadius: 0
		}
	},
	title: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(1)
	},
	link: {
		color: theme.palette.primary.dark
	}
}));

export default useStyles;
