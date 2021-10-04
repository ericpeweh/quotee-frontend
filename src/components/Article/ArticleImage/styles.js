import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	thumbnail: {
		width: "100%",
		borderRadius: "15px",
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: 320,
		marginTop: theme.spacing(2),
		[theme.breakpoints.down("xs")]: {
			position: "absolute",
			borderRadius: 0,
			height: 250,
			backgroundPosition: "center",
			backgroundSize: "center"
		}
	},
	imageSkeleton: {
		backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "#e3e3e3",
		borderRadius: 15,
		height: 320,
		marginTop: theme.spacing(1),
		width: "92%",
		margin: "auto",
		[theme.breakpoints.down("xs")]: {
			width: "100%"
		}
	}
}));

export default useStyles;
