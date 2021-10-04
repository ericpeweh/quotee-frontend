// Dependencies
import { useHistory } from "react-router";

// Components
import { Button } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const MobileMyProfileBadge = () => {
	const history = useHistory();
	const classes = useStyles();

	const editProfileHandler = () => {
		history.push("/settings/account");
	};

	return (
		<Button
			color="secondary"
			variant="contained"
			className={classes.profileBadge}
			onClick={editProfileHandler}
		>
			Edit Profile
		</Button>
	);
};

export default MobileMyProfileBadge;
