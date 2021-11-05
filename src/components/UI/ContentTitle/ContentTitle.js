// Dependencies
import { useHistory } from "react-router";

// Components
import { Grid, Typography, Divider, IconButton } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const ContentTitle = ({ title, color = "primary", backButton }) => {
	const history = useHistory();
	const classes = useStyles();

	return (
		<Grid item xs={12}>
			<Grid container direction="row" alignItems="center">
				{backButton && (
					<IconButton size="small" className={classes.backButton} onClick={() => history.goBack()}>
						<KeyboardBackspaceIcon />
					</IconButton>
				)}
				<Typography className={`${classes.title} ${classes[color]}`}>{title}</Typography>
			</Grid>
			<Divider />
		</Grid>
	);
};

export default ContentTitle;
