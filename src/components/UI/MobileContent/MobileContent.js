// Components
import { Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const MobileContent = ({ fixed }) => {
	const classes = useStyles();

	return (
		<Grid
			className={`${fixed ? classes.mobileContentFixed : classes.mobileContent} ${
				classes.contentStyle
			}`}
		>
			OK
		</Grid>
	);
};

export default MobileContent;
