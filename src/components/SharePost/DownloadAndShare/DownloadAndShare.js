// Dependencies
import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

// Components
import DownloadMenu from "./DownloadMenu/DownloadMenu";
import MobileDownloadMenu from "./MobileDownloadMenu/MobileDownloadMenu";
import { Typography, Grid, Button } from "@material-ui/core";

// Utils
import { downloadQuotes } from "../../../utils/downloadQuotes";

// Styles
import useStyles from "./styles";

const DownloadAndShare = ({ mobile }) => {
	const canvas = useSelector(state => state.canvas, shallowEqual);
	const classes = useStyles();
	const [isDownloadDrawerOpen, setIsDownloadDrawerOpen] = useState(false);
	const [isDownloadMenuOpen, setIsDownloadMenuOpen] = useState(false);

	const downloadOpenHandler = event => {
		if (mobile) {
			setIsDownloadDrawerOpen(true);
		} else {
			setIsDownloadMenuOpen(event.currentTarget);
		}
	};

	const downloadCloseHandler = () => {
		if (mobile) {
			setIsDownloadDrawerOpen(false);
		} else {
			setIsDownloadMenuOpen(null);
		}
	};

	const downloadQuotesHandler = quality => {
		downloadCloseHandler();
		downloadQuotes(canvas.canvasElement, quality, canvas.quotes.split(" ").slice(0, 7).join("-"));
	};

	return (
		<>
			<Typography
				variant="body2"
				className={`${classes.editorTitle} ${classes.stylesAndOtherText}`}
			>
				Download or share
			</Typography>
			<Grid container spacing={1}>
				<Button
					component={Grid}
					item
					onClick={downloadOpenHandler}
					variant="contained"
					color="secondary"
					className={classes.downloadButton}
					disabled={!canvas.canvasImage}
					md={3}
					sm={12}
					xs={12}
				>
					Download
				</Button>
				{!mobile && (
					<DownloadMenu
						isOpen={isDownloadMenuOpen}
						onClose={downloadCloseHandler}
						onSave={downloadQuotesHandler}
					/>
				)}
				{mobile && (
					<MobileDownloadMenu
						open={isDownloadDrawerOpen}
						onDownload={downloadQuotesHandler}
						onOpen={downloadOpenHandler}
						onClose={downloadCloseHandler}
					/>
				)}
			</Grid>
		</>
	);
};

export default DownloadAndShare;
