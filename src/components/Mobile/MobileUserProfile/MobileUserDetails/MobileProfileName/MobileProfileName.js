// Dependencies
import { shallowEqual, useSelector } from "react-redux";

// Components
import { Typography, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

// Styles
import useStyles from "./styles";

const MobileProfileName = () => {
	const { fullName, description, status } = useSelector(state => state.userProfile, shallowEqual);
	const classes = useStyles();

	const isLoading = status === "loading";

	return isLoading ? (
		<>
			<Skeleton variant="rect" animation="wave" className={classes.fullNameSkeleton} />
			<Skeleton variant="rect" animation="wave" className={classes.descriptionSkeleton} />
		</>
	) : (
		<>
			<Typography component={Grid} item align="center" className={classes.fullName}>
				{fullName}
			</Typography>
			<Typography
				className={classes.userDescription}
				variant="body1"
				color="textSecondary"
				align="justify"
				component={Grid}
				item
			>
				{description}
			</Typography>
		</>
	);
};

export default MobileProfileName;
