// Dependencies
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { signOut } from "../../../../actions/auth";
import QRCode from "qrcode.react";

// Components
import AccountForm from "./AccountForm/AccountForm";
import SettingsTitle from "../SettingsTitle/SettingsTitle";
import AvatarSettings from "./AvatarSettings/AvatarSettings";
import CenterSpinner from "../../../UI/CenterSpinner/CenterSpinner";
import { Grid, Divider, Button, CircularProgress } from "@material-ui/core";

// Images
import quoteeLogo from "../../../../images/logo-short-circle.webp";

// Styles
import useStyles from "./styles";

const AccountTab = ({ currentTab, mobile }) => {
	const {
		username,
		status: authStatus,
		signOutLoading
	} = useSelector(state => state.auth, shallowEqual);
	const { status } = useSelector(state => state.settings, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const logoutHandler = () => {
		if (authStatus === "succeeded") {
			dispatch(signOut());
		}
	};

	const qrCodeProps = {};

	const qrCodeElement = (
		<Grid item className={classes.qrCodeContainer}>
			<QRCode
				value={`https://quotee.cyclic.app/${username}`}
				renderAs="svg"
				includeMargin
				size={140}
				level="H"
				className={classes.qrcode}
				imageSettings={{ src: quoteeLogo, height: 40, width: 40 }}
				{...qrCodeProps}
			/>
		</Grid>
	);

	const content =
		currentTab === "account" ? (
			<Grid item container className={classes.accountTab} direction="column">
				<CenterSpinner open={signOutLoading} />
				<Grid container direction="row" justifyContent="space-between">
					<Grid item>
						<SettingsTitle text="Account" />
						<AvatarSettings />
					</Grid>
					{!mobile && qrCodeElement}
				</Grid>
				<Divider />
				{status === "loading" ? (
					<CircularProgress className={classes.loadingSpinner} />
				) : (
					<AccountForm />
				)}
				{!mobile && status !== "loading" && (
					<>
						<Divider />
						<Button variant="contained" className={classes.logoutButton} onClick={logoutHandler}>
							Logout
						</Button>
					</>
				)}
			</Grid>
		) : (
			<></>
		);

	return { ...content };
};

export default AccountTab;
