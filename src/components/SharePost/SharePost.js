// Dependencies
import { useEffect, useCallback } from "react";
import { fabric } from "fabric";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
	changeCanvas,
	changeCanvasImage,
	changeQuotes,
	changeAuthor
} from "../../store/slices/canvasSlice";
import { useParams } from "react-router";
import { fetchShareQuotes } from "../../actions/share";

// Utils
import {
	initCanvasImage,
	initCanvasText,
	initAuthorText,
	initWatermark,
	resetCanvas
} from "../../utils/canvasEditor";
import { checkImageUrl } from "../../utils/checkImageUrl";

// Components
import ShareDisplay from "./ShareDisplay/ShareDisplay";
import ImagePicker from "./ImagePicker/ImagePicker";
import CustomizeStyles from "./CustomizeStyles/CustomizeStyles";
import DownloadAndShare from "./DownloadAndShare/DownloadAndShare";
import ContentTitle from "../UI/ContentTitle/ContentTitle";
import { Grid, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import canvasPlaceholder from "../../images/canvasPlaceholder.jpg";
import invalidImageFallback from "../../images/invalidURL.jpg";

const SharePost = ({ mobile }) => {
	const canvas = useSelector(state => state.canvas, shallowEqual);
	const quotes = useSelector(state => state.shareQuotes, shallowEqual);
	const { postId } = useParams();
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		dispatch(fetchShareQuotes(postId));
	}, [dispatch, postId]);

	useEffect(() => {
		const initCanvas = () =>
			new fabric.Canvas("canvas", {
				height: 400,
				width: 300,
				backgroundImage: canvasPlaceholder,
				uniformScaling: true,
				preserveObjectStacking: true,
				selection: false,
				hoverCursor: "auto",
				allowTouchScrolling: false
			});
		dispatch(changeCanvas(initCanvas()));
	}, [dispatch]);

	const generateQuotes = useCallback(
		async urlToUse => {
			const image = await checkImageUrl(urlToUse);

			resetCanvas(canvas);
			dispatch(changeCanvasImage(initCanvasImage(image, canvas)));
			if (image !== invalidImageFallback) {
				dispatch(
					changeQuotes(
						initCanvasText(`"${quotes.quotes}"`, canvas, canvas.fontFamily, canvas.fontSize)
					)
				);
				dispatch(changeAuthor(initAuthorText(`- ${quotes.author}`, canvas)));
				initWatermark(canvas);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[dispatch, quotes.author, quotes.quotes]
	);

	return (
		<Grid container className={classes.sharePostContainer}>
			{!mobile && <ContentTitle title="Share post & download" color="success" />}
			<Grid container direction="column" className={classes.customizeImage}>
				<Typography variant="body2" className={classes.editorTitle}>
					Customize Image
				</Typography>
				<Grid
					container
					direction="row"
					justifyContent="space-between"
					className={classes.imageEditorContainer}
				>
					<ShareDisplay />
					<ImagePicker onClickImage={generateQuotes} />
				</Grid>
				<CustomizeStyles generateQuotes={generateQuotes} />
				<DownloadAndShare mobile={mobile} />
			</Grid>
		</Grid>
	);
};

export default SharePost;
