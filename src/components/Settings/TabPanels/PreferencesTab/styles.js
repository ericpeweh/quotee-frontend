import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	preferencesTab: {
		padding: theme.spacing(3),
		paddingTop: theme.spacing(1.5),
		color: theme.palette.type === "dark" ? "#ffffff" : theme.palette.text.primary,
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#fefefe",
		borderRadius: "0 15px 15px 0",
		[theme.breakpoints.down("sm")]: {
			borderRadius: "0 0 15px 15px"
		},
		[theme.breakpoints.down("xs")]: {
			borderRadius: 0
		}
	},
	note: {
		fontSize: "0.6rem",
		color: theme.palette.text.secondary
	}
}));

export default useStyles;
