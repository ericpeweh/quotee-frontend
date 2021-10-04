import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	title: {
		fontSize: "0.9rem",
		fontWeight: 600,
		[theme.breakpoints.up(830)]: {
			minWidth: 400
		}
	},
	subtitle: {
		fontSize: "0.8rem"
	},
	labelPlacemenet: {
		justifyContent: "flex-end",
		marginLeft: 0,
		marginTop: theme.spacing(2),
		[theme.breakpoints.down("sm")]: {
			justifyContent: "space-between"
		}
	},
	label: {
		marginRight: theme.spacing(3)
	},
	noSelect: {
		"user-select": "none" /* supported by Chrome and Opera */,
		"-webkit-user-select": "none" /* Safari */,
		"-khtml-user-select": "none" /* Konqueror HTML */,
		"-moz-user-select": "none" /* Firefox */,
		"-ms-user-select": "none" /* Internet Explorer/Edge */
	}
}));

export default useStyles;
