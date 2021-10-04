// Components
import SettingsTitle from "../SettingsTitle/SettingsTitle";
import ChangePasswordForm from "./ChangePasswordForm.js/ChangePasswordForm";
import { Grid, Typography, Divider } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const SecurityTab = ({ currentTab }) => {
	const classes = useStyles();

	const tabContent =
		currentTab === "security" ? (
			<Grid item container className={classes.securityTab} direction="column">
				<SettingsTitle text="Security" />
				<Typography variant="body2" className={classes.changePassword}>
					Change Password
				</Typography>
				<Divider />
				<ChangePasswordForm />
			</Grid>
		) : (
			<></>
		);
	return { ...tabContent };
};

export default SecurityTab;
