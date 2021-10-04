// Components
import { Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const PointListItem = ({ children, type }) => {
	const classes = useStyles();

	return (
		<Typography variant="body2" className={`${classes.listItem} ${classes[type]}`} component="div">
			{children}
		</Typography>
	);
};

export default PointListItem;
