// Dependencies
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

// Components
import { Grid, IconButton, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const MobileSettingsTopBar = () => {
	const username = useSelector(state => state.auth.username);
	const history = useHistory();
	const classes = useStyles();

	const backButtonHandler = () => {
		history.push(`/${username}`);
	};

	return (
		<Grid container className={classes.topBar} alignItems="center">
			<Grid item>
				<IconButton onClick={backButtonHandler}>
					<ArrowBackIcon />
				</IconButton>
			</Grid>
			<Grid item>
				<Typography variant="h6">Settings</Typography>
			</Grid>
		</Grid>
	);
};

export default MobileSettingsTopBar;
