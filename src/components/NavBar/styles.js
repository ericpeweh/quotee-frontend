import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	navbar: {
		minWidth: "235px",
		paddingRight: "0.5rem",
		backgroundColor: theme.palette.type === "dark" ? "#424242" : "#fbfbfb",
		boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)"
	}
}));

export default useStyles;
