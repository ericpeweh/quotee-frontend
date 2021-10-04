// Dependencies
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Components
import { Grid, IconButton, Typography } from "@material-ui/core";

// Icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// Styles
import useStyles from "./styles";

const MobileArchivedTopBar = () => {
	const username = useSelector(state => state.auth.username);
	const classes = useStyles();

	return (
		<Grid container className={classes.topBar} alignItems="center">
			<Grid item>
				<IconButton component={Link} to={`/${username}`}>
					<ArrowBackIcon />
				</IconButton>
			</Grid>
			<Grid item>
				<Typography variant="h6" className={classes.archivedTitle}>
					Archived
				</Typography>
			</Grid>
		</Grid>
	);
};

export default MobileArchivedTopBar;
