// Dependencies
import { useRef, useState } from "react";
import { useHistory } from "react-router";

// Components
import QrReader from "react-qr-reader";
import { Button, Grid } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const QRScanner = () => {
	const [legacyMode, setLegacyMode] = useState(false);
	const history = useHistory();
	const readerRef = useRef();
	const classes = useStyles();

	const errorHandler = error => {
		console.log(error);
		return;
	};

	const scanHandler = data => {
		if (data && data.includes("https://quotee.cyclic.app/")) {
			const username = data.split("/")[3];
			history.push(`/${username}`);
		}
	};

	const openImageDialogHandler = () => {
		readerRef.current.openImageDialog();
	};

	return (
		<Grid className={classes.scannerContainer}>
			<QrReader
				delay={300}
				onError={errorHandler}
				onScan={scanHandler}
				className={classes.QRReader}
				ref={readerRef}
				legacyMode={legacyMode}
			/>
			{legacyMode && (
				<Button
					onClick={openImageDialogHandler}
					variant="contained"
					color="primary"
					className={classes.submitButton}
				>
					Submit QR Code
				</Button>
			)}
			<Button
				variant="contained"
				color="secondary"
				className={classes.submitButton}
				onClick={() => setLegacyMode(prevMode => !prevMode)}
			>
				Toggle mode
			</Button>
		</Grid>
	);
};

export default QRScanner;
