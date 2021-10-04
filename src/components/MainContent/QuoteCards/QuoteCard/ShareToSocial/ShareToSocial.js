// Dependencies
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { closeShareModal } from "../../../../../store/slices/shareQuotesSlice";
import { snackbarChange, snackbarMessageChange } from "../../../../../store/slices/modalSlice";
import {
	WhatsappShareButton,
	FacebookShareButton,
	FacebookMessengerShareButton,
	TwitterShareButton,
	TelegramShareButton,
	LineShareButton,
	EmailShareButton,
	WhatsappIcon,
	FacebookIcon,
	FacebookMessengerIcon,
	TwitterIcon,
	TelegramIcon,
	LineIcon,
	EmailIcon
} from "react-share";

// Components
import {
	Dialog,
	DialogTitle,
	IconButton,
	DialogActions,
	Button,
	Tooltip,
	Grid
} from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

const ShareToSocial = () => {
	const { isShareModalOpen, quotesId, quotes, author } = useSelector(
		state => state.shareQuotes,
		shallowEqual
	);
	const dispatch = useDispatch();
	const classes = useStyles();

	const URL = `https://www.quotee.id/${author}/p/${quotesId}`;

	const copyQuotesHandler = () => {
		navigator.clipboard.writeText(
			`"${quotes}" - ${author} https://www.quotee.id/${author}/p/${quotesId}?source=copy_link`
		);
		dispatch(closeShareModal());
		dispatch(snackbarChange(true));
		dispatch(snackbarMessageChange("Quotes copied."));
	};

	return (
		<Dialog
			open={isShareModalOpen}
			onClose={() => dispatch(closeShareModal())}
			fullWidth
			maxWidth="xs"
			classes={{ paper: classes.shareModal }}
		>
			<DialogTitle disableTypography className={classes.sharePostTitle}>
				Share post
			</DialogTitle>
			<Grid
				container
				direction="row"
				className={classes.shareIconContainer}
				justifyContent="center"
			>
				<Grid item container direction="row" justifyContent="center">
					<Tooltip
						title="Whatsapp"
						placement="top"
						classes={{ tooltipPlacementTop: classes.tooltip }}
					>
						<div>
							<WhatsappShareButton
								className={classes.shareButton}
								url={URL}
								title={`"${quotes}" - ${author}`}
							>
								<WhatsappIcon size={40} round={true} />
							</WhatsappShareButton>
						</div>
					</Tooltip>
					<Tooltip
						title="Facebook"
						placement="top"
						classes={{ tooltipPlacementTop: classes.tooltip }}
					>
						<FacebookShareButton
							className={classes.shareButton}
							url={URL}
							quote={`"${quotes}" - ${author}`}
						>
							<FacebookIcon size={40} round={true} />
						</FacebookShareButton>
					</Tooltip>
					<Tooltip
						title="Messenger"
						placement="top"
						classes={{ tooltipPlacementTop: classes.tooltip }}
					>
						<FacebookMessengerShareButton
							className={classes.shareButton}
							url={URL}
							appId="1510046966003743"
						>
							<FacebookMessengerIcon size={40} round={true} />
						</FacebookMessengerShareButton>
					</Tooltip>
					<Tooltip
						title="Twitter"
						placement="top"
						classes={{ tooltipPlacementTop: classes.tooltip }}
					>
						<div>
							<TwitterShareButton
								className={classes.shareButton}
								url={URL}
								title={`"${quotes}" - ${author}`}
							>
								<TwitterIcon size={40} round={true} />
							</TwitterShareButton>
						</div>
					</Tooltip>
					<Tooltip
						title="Telegram"
						placement="top"
						classes={{ tooltipPlacementTop: classes.tooltip }}
					>
						<div>
							<TelegramShareButton
								className={classes.shareButton}
								url={URL}
								title={`"${quotes}" - ${author}`}
							>
								<TelegramIcon size={40} round={true} />
							</TelegramShareButton>
						</div>
					</Tooltip>
					<Tooltip title="Line" placement="top" classes={{ tooltipPlacementTop: classes.tooltip }}>
						<div>
							<LineShareButton
								className={classes.shareButton}
								url={URL}
								title={`"${quotes}" - ${author}`}
							>
								<LineIcon size={40} round={true} />
							</LineShareButton>
						</div>
					</Tooltip>
					<Tooltip title="Email" placement="top" classes={{ tooltipPlacementTop: classes.tooltip }}>
						<EmailShareButton
							className={classes.shareButton}
							subject="Quotes to motivate yourself"
							body={`"${quotes}" - ${author}`}
						>
							<EmailIcon size={40} round={true} />
						</EmailShareButton>
					</Tooltip>
					<Tooltip
						title="Copy Quotes"
						placement="top"
						classes={{ tooltipPlacementTop: classes.tooltip }}
					>
						<IconButton
							className={`${classes.shareButton} ${classes.copyButton}`}
							classes={{ root: classes.copyLinkButton }}
							onClick={copyQuotesHandler}
						>
							<FileCopyOutlinedIcon />
						</IconButton>
					</Tooltip>
				</Grid>
			</Grid>
			<DialogActions>
				<Button
					onClick={() => dispatch(closeShareModal())}
					fullWidth
					size="small"
					className={classes.cancelButton}
				>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ShareToSocial;
