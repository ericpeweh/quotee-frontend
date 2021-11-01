// Dependencies
import { useState } from "react";

// Components
import DownloadMenu from "./DownloadMenu/DownloadMenu";
import MobileDownloadMenu from "./MobileDownloadMenu/MobileDownloadMenu";
import { Grid, Button } from "@material-ui/core";

// Utils
import { downloadQuotes } from "../../../utils/downloadQuotes";

// Styles
import useStyles from "./styles";

const DownloadAndShare = ({ mobile, canvas, quotes }) => {
	const classes = useStyles();
	const [isDownloadDrawerOpen, setIsDownloadDrawerOpen] = useState(false);
	const [isDownloadMenuOpen, setIsDownloadMenuOpen] = useState(false);

	const downloadOpenHandler = () => {
		if (mobile) {
			setIsDownloadDrawerOpen(true);
		} else {
			setIsDownloadMenuOpen(true);
		}
	};

	const downloadCloseHandler = () => {
		if (mobile) {
			setIsDownloadDrawerOpen(false);
		} else {
			setIsDownloadMenuOpen(false);
		}
	};

	const downloadQuotesHandler = quality => {
		downloadCloseHandler();

		const fileName = quotes.split(" ").slice(0, 7).join("_").toLowerCase();
		downloadQuotes({ canvas, quality, fileName });
	};

	return (
		<>
			<Grid container justifyContent="center" direction="row">
				<Grid item>
					<Button
						onClick={downloadOpenHandler}
						variant="contained"
						color="secondary"
						className={classes.downloadButton}
					>
						Download
					</Button>
				</Grid>
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
