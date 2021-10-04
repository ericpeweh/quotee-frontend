// Dependencies
import { shallowEqual, useSelector } from "react-redux";

// Components
import { Grid, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ProfileDescription = () => {
	const { description, fullName } = useSelector(state => state.userProfile, shallowEqual);
	const classes = useStyles();

	return (
		<>
			<Grid item>
				<Typography variant="body1">{fullName}</Typography>
			</Grid>
			<Grid item container sm={10} lg={7} className={classes.userDescriptionContatiner}>
				<Typography
					className={classes.userDescription}
					variant="body1"
					color="textSecondary"
					align="justify"
				>
					{description}
				</Typography>
			</Grid>
		</>
	);
};

export default ProfileDescription;
