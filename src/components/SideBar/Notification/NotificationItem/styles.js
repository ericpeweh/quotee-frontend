import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	listSubHeader: {
		lineHeight: "10px",
		padding: 0,
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1)
	},
	listItem: {
		padding: 0,
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1),
		borderRadius: "15px"
	},
	inline: {
		display: "inline-block",
		paddingRight: 5
	},
	listItemText: {
		textAlign: "justify",
		wordBreak: "break-all"
	},
	listItemPrimary: {
		fontWeight: 600
	}
}));

export default useStyles;
