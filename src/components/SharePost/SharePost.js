/* eslint-disable react-hooks/exhaustive-deps */
// Dependencies
import { useState, useEffect } from "react";
import { fetchShareQuotes } from "../../actions/share";
import { useParams } from "react-router";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

// Components
import { Grid, Typography, Divider } from "@material-ui/core";
import ContentTitle from "../UI/ContentTitle/ContentTitle";
import ShareDisplay from "./ShareDisplay/ShareDisplay";
import ImageEditor from "./ImageEditor/ImageEditor";
import TextEditor from "./TextEditor/TextEditor";
import OtherEditor from "./OtherEditor/OtherEditor";
import DownloadAndShare from "./DownloadAndShare/DownloadAndShare";
import CustomSpinner from "./../UI/CustomSpinner/CustomSpinner";
import PhotographerCredits from "./PhotographerCredits/PhotographerCredits";

// Canvas editor
import {
	initCanvas,
	changeImageBlur,
	changeImageScale,
	changeFontFamily,
	changeFontSize,
	changeTextAlign,
	toggleBold,
	toggleItalic,
	toggleUnderlined,
	changeQuotesColor,
	changeAuthorColor,
	changeFontCase,
	changeHideAuthor,
	toggleGrayscale,
	toggleSepia,
	toggleOldPhoto,
	toggleVintage,
	toggleKodachrome,
	togglePolaroid
} from "../../utils/canvasEditor";

// Styles
import useStyles from "./styles";

const SharePost = ({ mobile }) => {
	const [canvas, setCanvas] = useState("");
	const { quotes: text, author, status } = useSelector(state => state.shareQuotes, shallowEqual);
	const { status: authStatus } = useSelector(state => state.auth, shallowEqual);
	const {
		fontSize,
		fontFamily,
		imageBlur,
		imageScale,
		initialScale,
		textAlign,
		isBold,
		isItalic,
		isUnderlined,
		quotesFontColor,
		authorFontColor,
		fontCase,
		hideAuthor,
		grayscale,
		sepia,
		oldPhoto,
		vintage,
		kodachrome,
		polaroid
	} = useSelector(state => state.canvas, shallowEqual);
	const { postId } = useParams();
	const dispatch = useDispatch();

	const isLoading = status === "loading";

	const classes = useStyles();

	// Fetch quotes data
	useEffect(() => {
		if (authStatus === "succeeded") {
			dispatch(fetchShareQuotes(postId));
		}
	}, [dispatch, postId, authStatus]);

	// Initialize canvas for first time
	useEffect(() => {
		if (status === "succeeded") {
			setCanvas(initCanvas({ dispatch, text, fontSize, fontFamily, author }));
		}
	}, [status]);

	// Change image blur
	useEffect(() => {
		if (canvas) {
			changeImageBlur({ canvas, imageBlur });
		}
	}, [imageBlur]);

	// Change image scale
	useEffect(() => {
		if (canvas) {
			changeImageScale({ canvas, imageScale, initialScale });
		}
	}, [imageScale]);

	// Change font family
	useEffect(() => {
		if (canvas) {
			changeFontFamily({ canvas, fontFamily });
		}
	}, [fontFamily]);

	// Change font size
	useEffect(() => {
		if (canvas) {
			changeFontSize({ canvas, fontSize });
		}
	}, [fontSize]);

	// Change font size
	useEffect(() => {
		if (canvas) {
			changeTextAlign({ canvas, textAlign });
		}
	}, [textAlign]);

	// Font style bold
	useEffect(() => {
		if (canvas) {
			toggleBold({ canvas, isBold });
		}
	}, [isBold]);

	// Font style italic
	useEffect(() => {
		if (canvas) {
			toggleItalic({ canvas, isItalic });
		}
	}, [isItalic]);

	// Font style underlined
	useEffect(() => {
		if (canvas) {
			toggleUnderlined({ canvas, isUnderlined });
		}
	}, [isUnderlined]);

	// Change quotes font color
	useEffect(() => {
		if (canvas) {
			changeQuotesColor({ canvas, quotesFontColor });
		}
	}, [quotesFontColor]);

	// Change author font color
	useEffect(() => {
		if (canvas) {
			changeAuthorColor({ canvas, authorFontColor });
		}
	}, [authorFontColor]);

	// Change font case
	useEffect(() => {
		if (canvas) {
			changeFontCase({ canvas, fontCase, initialQuotes: text });
		}
	}, [fontCase]);

	// Hide author
	useEffect(() => {
		if (canvas) {
			changeHideAuthor({ canvas, hideAuthor, initialAuthor: author });
		}
	}, [hideAuthor]);

	// Grayscale
	useEffect(() => {
		if (canvas) {
			toggleGrayscale({ canvas, grayscale });
		}
	}, [grayscale]);

	// Sepia
	useEffect(() => {
		if (canvas) {
			toggleSepia({ canvas, sepia });
		}
	}, [sepia]);

	// Old Photo
	useEffect(() => {
		if (canvas) {
			toggleOldPhoto({ canvas, oldPhoto });
		}
	}, [oldPhoto]);

	// Vintage
	useEffect(() => {
		if (canvas) {
			toggleVintage({ canvas, vintage });
		}
	}, [vintage]);

	// Kodachrome
	useEffect(() => {
		if (canvas) {
			toggleKodachrome({ canvas, kodachrome });
		}
	}, [kodachrome]);

	// Polaroid
	useEffect(() => {
		if (canvas) {
			togglePolaroid({ canvas, polaroid });
		}
	}, [polaroid]);

	return (
		<Grid container className={classes.sharePostContainer}>
			{!mobile && <ContentTitle title="Share post & download" color="success" backButton />}
			<Grid container direction="column" className={classes.customizeImage}>
				{!isLoading ? (
					<>
						<Grid
							item
							container
							direction="column"
							className={classes.previewContainer}
							xs={12}
							sm={4}
						>
							<Typography className={classes.editorTitle} align="center">
								Result Preview
							</Typography>
							<Divider className={classes.divider} />
							<ShareDisplay />
							<PhotographerCredits />
							<DownloadAndShare canvas={canvas} quotes={text} />
						</Grid>
						<Grid container item direction="row" xs={8} className={classes.editorContainer}>
							<ImageEditor canvas={canvas} mobile={mobile} />
							<TextEditor canvas={canvas} />
							<OtherEditor />
						</Grid>
					</>
				) : (
					<Grid
						container
						justifyContent="center"
						alignItems="center"
						className={classes.spinnerContainer}
					>
						<CustomSpinner />
					</Grid>
				)}
			</Grid>

			{/* <ImagePicker onClickImage={generateQuotes} /> */}
			{/* <CustomizeStyles generateQuotes={generateQuotes} />
				<DownloadAndShare mobile={mobile} /> */}
		</Grid>
	);
};

export default SharePost;
