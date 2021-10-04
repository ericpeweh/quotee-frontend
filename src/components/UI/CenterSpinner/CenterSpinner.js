// Components
import { Backdrop, CircularProgress } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const CenterSpinner = ({ open }) => {
	const classes = useStyles();

	return (
		<Backdrop className={classes.backdrop} open={open} onClick={() => {}}>
			<CircularProgress color="secondary" />
		</Backdrop>
	);
};

export default CenterSpinner;
