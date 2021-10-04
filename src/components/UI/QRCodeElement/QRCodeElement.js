// Dependencies
import { shallowEqual, useSelector } from "react-redux";

// Components
import { Grid } from "@material-ui/core";
import TopBar from "../TopBar/TopBar";
import QRCode from "qrcode.react";

// Styles
import useStyles from "./styles";

// Utils
import { downloadQrCode } from "../../../utils/downloadQRCode";

// Images
import quoteeLogo from "../../../images/logo-short-circle.webp";
import { Typography } from "@material-ui/core";

const QRCodeElement = () => {
	const { username } = useSelector(state => state.auth, shallowEqual);
	const classes = useStyles();

	return (
		<>
			<TopBar title="User QR Code" />
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				className={classes.qrCodeContainer}
				direction="column"
			>
				<Grid item>
					<QRCode
						value={`https://quoteeid.netlify.app/${username}`}
						id="qrcode"
						renderAs="canvas"
						includeMargin
						size={240}
						level="H"
						className={classes.qrcode}
						imageSettings={{ src: quoteeLogo, height: 40, width: 40 }}
					/>
				</Grid>
				<Grid item>
					<Typography variant="h6" align="center" className={classes.username}>
						{username}
					</Typography>
					<Typography onClick={() => downloadQrCode(username)} variant="body2" align="center">
						Download QR Code
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default QRCodeElement;
