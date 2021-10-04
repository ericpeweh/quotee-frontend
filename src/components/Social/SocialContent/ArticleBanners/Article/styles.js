import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	articleCard: {
		borderRadius: "15px",
		boxShadow: "2px 3px 5px rgb(0 0 0 / 20%)"
	},
	cardAction: {
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "cover",
		height: "180px"
	},
	cardContent: {
		marginTop: theme.spacing(10),
		textShadow: "0 1px 5px rgba(0, 0, 0, 1)",
		color: "white",
		[theme.breakpoints.down("md")]: {
			"&> h2": {
				fontSize: "1.1rem"
			}
		}
	}
}));

export default useStyles;
