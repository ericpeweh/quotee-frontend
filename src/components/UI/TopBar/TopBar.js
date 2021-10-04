// Dependencies
import { useHistory } from "react-router";

// Components
import { Grid, IconButton, Typography } from "@material-ui/core";

// Icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// Styles
import useStyles from "./styles";

const TopBar = ({ title, onClose, modal }) => {
	const classes = useStyles();
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};

	let buttonProps = {};
	if (modal) {
		buttonProps.onClick = onClose;
	} else {
		buttonProps.onClick = goBack;
	}

	return (
		<Grid container className={classes.topBar} alignItems="center">
			<Grid item>
				<IconButton {...buttonProps}>
					<ArrowBackIcon />
				</IconButton>
			</Grid>
			<Grid item>
				<Typography variant="h6" className={classes.title}>
					{title}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default TopBar;
