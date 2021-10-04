import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	cardContent: {
		paddingBottom: "10px !important"
	},
	quotes: {
		margin: "0.7rem 0"
	},
	lists: {
		display: "flex",
		flexWrap: "wrap",
		listStyle: "none",
		padding: theme.spacing(0.5),
		paddingLeft: 0,
		margin: "7px 0 0 0 ",
		[theme.breakpoints.down("xs")]: {
			justifyContent: "center"
		}
	},
	chip: {
		margin: theme.spacing(0.5),
		marginLeft: 0
	},
	quotesSkeleton: {
		margin: "0.7rem auto",
		borderRadius: 15,
		backgroundColor: theme.palette.type === "dark" ? "#545454 " : "#f3f3f3",
		width: "70%"
	},
	secondQuotesSkeleton: {
		margin: "0.7rem auto",
		borderRadius: 15,
		backgroundColor: theme.palette.type === "dark" ? "#545454 " : "#f3f3f3",
		width: "60%"
	},
	tagsSkeleton: {
		borderRadius: 15,
		backgroundColor: theme.palette.type === "dark" ? "#545454 " : "#f3f3f3",
		width: "30%"
	}
}));

export default useStyles;
