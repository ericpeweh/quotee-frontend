// Dependencies
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { adsCarouselChange } from "../../../store/slices/modalSlice";

// Components
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button
} from "@material-ui/core";

// Styles
import useStyles from "./styles";

const AdsDialog = () => {
	const {
		isAdsCarouselOpen,
		adsCarouselText: text,
		adsCarouselImage: image,
		adsCarouselUrl: url = "",
		adsCarouselTitle: title
	} = useSelector(state => state.modal, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const closeHandler = () => {
		dispatch(adsCarouselChange(false));
	};

	const checkItOutHandler = () => {
		window.open(url);
	};

	return (
		<Dialog
			open={isAdsCarouselOpen}
			onClose={closeHandler}
			scroll="body"
			classes={{ paper: classes.adsDialog }}
		>
			<DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
			<DialogContent dividers={false}>
				<img src={image} alt="ads" className={classes.adsImage} />
				<DialogContentText tabIndex={-1} className={classes.dialogText}>
					{text}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				{url && (
					<Button onClick={checkItOutHandler} color="secondary" className={classes.button}>
						Check it out!
					</Button>
				)}
				<Button onClick={closeHandler} color="primary" className={classes.button}>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AdsDialog;
