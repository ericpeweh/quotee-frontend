import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	[theme.breakpoints.down("xs")]: {
		tabsContainer: {
			maxHeight: `calc(100vh - ${56 * 2 + 50}px)`,
			paddingBottom: theme.spacing(5),
			overflow: "auto"
		}
	}
}));

export default useStyles;
