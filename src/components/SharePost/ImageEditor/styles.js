import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		"& .Mui-expanded": {
			margin: 0
		},
		"& .MuiAccordion-root": {
			borderRadius: 15
		}
	},
	accordionTitle: {
		fontSize: "1.2rem",
		fontWeight: "bold",
		paddingLeft: theme.spacing(2),
		color: theme.palette.type === "dark" ? "#f3f3f3" : "#4c4c4c"
	},
	icon: {
		color: theme.palette.type === "dark" ? "#f3f3f3" : "#4c4c4c"
	}
}));

export default useStyles;
