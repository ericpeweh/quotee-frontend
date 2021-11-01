// Components
import { Backdrop } from "@material-ui/core";
import CustomSpinner from "../CustomSpinner/CustomSpinner";

// Styles
import useStyles from "./styles";

const CenterSpinner = ({ open }) => {
	const classes = useStyles();

	return (
		<Backdrop className={classes.backdrop} open={open} onClick={() => {}}>
			<CustomSpinner />
		</Backdrop>
	);
};

export default CenterSpinner;
