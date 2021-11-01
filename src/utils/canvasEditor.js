// Dependencies
import { fabric } from "fabric";
import FontFaceObserver from "fontfaceobserver";

// Images
import placeholderImage from "../images/display.jpg";

// Actions
import {
	changeStatus,
	changeImageInitialScale,
	changeImageScale as changeImageScaleState,
	changePhotographer,
	resetPhotographer
} from "../store/slices/canvasSlice";

// Utils
import checkImageUrl from "../utils/checkImageUrl";

// Change Fabric.js global variables
fabric.textureSize = 5120;
fabric.Object.prototype.objectCaching = false;

/* CANVAS INITIALIZATIONS */
export const initCanvas = ({ text, fontFamily, fontSize, author, dispatch }) => {
	const canvas = new fabric.StaticCanvas("canvas", {
		height: 400,
		width: 300,
		preserveObjectStacking: true,
		selection: false,
		hoverCursor: "auto",
		allowTouchScrolling: false,
		backgroundColor: "#090909"
	});

	initCanvasImage({ canvas, dispatch });
	initCanvasText({ canvas, fontFamily, fontSize, text });
	initAuthorText({ author, canvas });
	initWatermark({ canvas, fontFamily });
	return canvas;
};

export const initCanvasImage = ({ canvas, dispatch }) => {
	new fabric.Image.fromURL(
		placeholderImage,
		image => {
			image.selectable = false;
			image.filters.push(
				new fabric.Image.filters.Blur({
					blur: 0
				})
			);
			if (image.width && image.height) {
				image.applyFilters();
			}
			if (image.width < image.height && image.height / image.width >= 1.4) {
				image.scaleToWidth(canvas.getWidth());
			} else {
				image.scaleToHeight(canvas.getHeight());
			}
			canvas.add(image);
			canvas.centerObject(image);
			canvas.sendToBack(image);
			canvas.requestRenderAll();

			dispatch(changeImageInitialScale(image.scaleX));
		},
		{ crossOrigin: "anonymous" }
	);
};

const initCanvasText = async ({ text, canvas, fontFamily, fontSize }) => {
	const font = new FontFaceObserver("proxima-nova");
	await font.load();

	const quotes = new fabric.Textbox(text, {
		fill: "#f3f3f3",
		selectable: false,
		lockUniScaling: true,
		fontWeight: "normal",
		fontFamily: fontFamily,
		textAlign: "center",
		editable: false,
		fontSize: fontSize,
		shadow: "1px 1px 4px rgba(10, 10, 10, 0.5)",
		originY: "center",
		// splitByGrapheme: true,
		top: canvas.height * 0.45,
		width: canvas.width * 0.9,
		left: canvas.width * 0.05
	});
	canvas.add(quotes);
	canvas.requestRenderAll();
};

export const initAuthorText = async ({ author, canvas }) => {
	const font = new FontFaceObserver("proxima-nova");
	await font.load();

	const authorText = new fabric.Text(author, {
		fill: "#f3f3f3",
		selectable: false,
		editable: false,
		fontWeight: 400,
		fontFamily: "proxima-nova",
		fontSize: 16,
		shadow: "1px 1px 4px rgba(10, 10, 10, 0.5)",
		textAlign: "center",
		originX: "center",
		top: canvas.getObjects()[1].top + canvas.getObjects()[1].height / 2 + 20,
		left: canvas.width * 0.5
	});

	authorText.setCoords();
	canvas.add(authorText);
	canvas.requestRenderAll();
};

export const initWatermark = ({ canvas }) => {
	const author = new fabric.Text("quoteequotes.xyz", {
		fill: "#f3f3f3",
		selectable: false,
		editable: false,
		fontWeight: 600,
		fontFamily: "proxima-nova",
		fontSize: 10,
		shadow: "1px 1px 5px rgba(10, 10, 10, 0.5)",
		textAlign: "center",
		originX: "center",
		top: canvas.height * 0.95,
		left: canvas.width * 0.5
	});
	canvas.add(author);
	canvas.requestRenderAll();
};

/* IMAGE MODIFICATIONS */
export const changeImageFromBrowse = async ({
	canvas,
	imageURL,
	dispatch,
	profile,
	username,
	userLink
}) => {
	const { imageBlur, grayscale, sepia, oldPhoto, vintage, kodachrome, polaroid } = profile;

	const image = canvas.getObjects()[0];
	dispatch(resetPhotographer());
	dispatch(changeStatus("loading"));
	const checkedURL = await checkImageUrl(imageURL);

	canvas.remove(image);

	new fabric.Image.fromURL(
		checkedURL,
		image => {
			image.selectable = false;
			// Blur filter
			image.filters.push(
				new fabric.Image.filters.Blur({
					blur: imageBlur
				})
			);
			// Others filter
			image.filters[1] = grayscale && new fabric.Image.filters.Grayscale();
			image.filters[2] = sepia && new fabric.Image.filters.Sepia();
			image.filters[3] = oldPhoto && new fabric.Image.filters.Brownie();
			image.filters[4] = vintage && new fabric.Image.filters.Vintage();
			image.filters[5] = kodachrome && new fabric.Image.filters.Kodachrome();
			image.filters[6] = polaroid && new fabric.Image.filters.Polaroid();

			if (image.width && image.height) {
				image.applyFilters();
			}
			if (image.width < image.height && image.height / image.width >= 1.4) {
				image.scaleToWidth(canvas.getWidth());
			} else {
				image.scaleToHeight(canvas.getHeight());
			}
			canvas.add(image);
			canvas.centerObject(image);
			canvas.sendToBack(image);
			canvas.moveTo(image, 0);
			canvas.requestRenderAll();
			dispatch(changePhotographer({ username, userLink }));
			dispatch(changeStatus("succeeded"));

			dispatch(changeImageInitialScale(image.scaleX));
			dispatch(changeImageScaleState(1));
		},
		{ crossOrigin: "anonymous" }
	);
};

export const changeImageFromURL = async ({ canvas, imageURL, dispatch, profile }) => {
	const { imageBlur, grayscale, sepia, oldPhoto, vintage, kodachrome, polaroid } = profile;

	const image = canvas.getObjects()[0];
	dispatch(resetPhotographer());
	dispatch(changeStatus("loading"));
	const checkedURL = await checkImageUrl(imageURL);

	canvas.remove(image);

	new fabric.Image.fromURL(
		checkedURL,
		image => {
			image.selectable = false;
			// Blur filter
			image.filters.push(
				new fabric.Image.filters.Blur({
					blur: imageBlur
				})
			);
			// Others filter
			image.filters[1] = grayscale && new fabric.Image.filters.Grayscale();
			image.filters[2] = sepia && new fabric.Image.filters.Sepia();
			image.filters[3] = oldPhoto && new fabric.Image.filters.Brownie();
			image.filters[4] = vintage && new fabric.Image.filters.Vintage();
			image.filters[5] = kodachrome && new fabric.Image.filters.Kodachrome();
			image.filters[6] = polaroid && new fabric.Image.filters.Polaroid();

			if (image.width && image.height) {
				image.applyFilters();
			}
			if (image.width < image.height && image.height / image.width >= 1.4) {
				image.scaleToWidth(canvas.getWidth());
			} else {
				image.scaleToHeight(canvas.getHeight());
			}
			canvas.add(image);
			canvas.centerObject(image);
			canvas.sendToBack(image);
			canvas.moveTo(image, 0);
			canvas.requestRenderAll();
			dispatch(changeStatus("succeeded"));

			dispatch(changeImageInitialScale(image.scaleX));
			dispatch(changeImageScaleState(1));
		},
		{ crossOrigin: "anonymous" }
	);
};

export const changeImageFromUpload = ({ event, canvas, dispatch, profile }) => {
	const { imageBlur, grayscale, sepia, oldPhoto, vintage, kodachrome, polaroid } = profile;

	dispatch(resetPhotographer());
	dispatch(changeStatus("loading"));
	const image = canvas.getObjects()[0];
	const fileReader = new FileReader();
	try {
		fileReader.readAsDataURL(event.target.files[0]);

		fileReader.onload = imageUrl => {
			canvas.remove(image);

			new fabric.Image.fromURL(
				imageUrl.target.result,
				image => {
					image.selectable = false;
					// Blur filter
					image.filters.push(
						new fabric.Image.filters.Blur({
							blur: imageBlur
						})
					);
					// Others filter
					image.filters[1] = grayscale && new fabric.Image.filters.Grayscale();
					image.filters[2] = sepia && new fabric.Image.filters.Sepia();
					image.filters[3] = oldPhoto && new fabric.Image.filters.Brownie();
					image.filters[4] = vintage && new fabric.Image.filters.Vintage();
					image.filters[5] = kodachrome && new fabric.Image.filters.Kodachrome();
					image.filters[6] = polaroid && new fabric.Image.filters.Polaroid();

					if (image.width && image.height) {
						image.applyFilters();
					}
					if (image.width < image.height && image.height / image.width >= 1.4) {
						image.scaleToWidth(canvas.getWidth());
					} else {
						image.scaleToHeight(canvas.getHeight());
					}
					canvas.add(image);
					canvas.centerObject(image);
					canvas.sendToBack(image);
					canvas.moveTo(image, 0);
					canvas.requestRenderAll();
					dispatch(changeStatus("succeeded"));

					dispatch(changeImageInitialScale(image.scaleX));
					dispatch(changeImageScaleState(1));
				},
				{ crossOrigin: "anonymous" }
			);
		};
	} catch (err) {
		console.log("Change image from upload error!");
		return;
	}
};

export const moveImage = ({ canvas, type }) => {
	const object = canvas.getObjects()[0];

	if (!object) return;

	switch (type) {
		case "up":
			object.top -= 8;
			break;
		case "down":
			object.top += 8;
			break;
		case "left":
			object.left -= 8;
			break;
		case "right":
			object.left += 8;
			break;
		default:
			return;
	}
	canvas.requestRenderAll();
};

export const changeImageBlur = ({ canvas, imageBlur }) => {
	const image = canvas.getObjects()[0];
	image.filters[0].blur = imageBlur;

	image.applyFilters();
	canvas.requestRenderAll();
};

export const changeImageScale = ({ canvas, imageScale, initialScale }) => {
	const image = canvas.getObjects()[0];

	image.set({ scaleX: initialScale * imageScale });
	image.set({ scaleY: initialScale * imageScale });
	canvas.centerObject(image);
	canvas.requestRenderAll();
};

/* FONT MODIFICATIONS */
export const changeFontFamily = async ({ fontFamily, canvas }) => {
	const font = new FontFaceObserver(fontFamily);
	try {
		const canvasElement = canvas.getObjects();
		const quotes = canvasElement[2];
		const author = canvasElement[3];

		await font.load();
		quotes.set("fontFamily", fontFamily);
		author.set("fontFamily", fontFamily);
		canvas.requestRenderAll();
	} catch (error) {
		console.log("No Images Selected", error);
	}
};

export const changeFontSize = ({ fontSize, canvas }) => {
	try {
		const canvasElement = canvas.getObjects();
		const quotes = canvasElement[2];

		quotes.set("fontSize", fontSize);
		canvas.requestRenderAll();
	} catch (error) {
		console.log("No Images Selected");
	}
};

export const changeTextAlign = ({ canvas, textAlign }) => {
	const quotes = canvas.getObjects()[2];
	quotes.set({ textAlign });
	canvas.requestRenderAll();
};

export const changeQuotesColor = ({ canvas, quotesFontColor }) => {
	const quotes = canvas.getObjects()[2];
	quotes.set({ fill: quotesFontColor });
	canvas.requestRenderAll();
};

export const changeAuthorColor = ({ canvas, authorFontColor }) => {
	const author = canvas.getObjects()[3];
	author.set({ fill: authorFontColor });
	canvas.requestRenderAll();
};

export const toggleBold = ({ canvas, isBold }) => {
	const canvasElement = canvas.getObjects();
	const quotes = canvasElement[2];

	const fontWeight = isBold ? 600 : 400;

	quotes.set({ fontWeight });
	canvas.requestRenderAll();
};

export const toggleItalic = ({ canvas, isItalic }) => {
	const canvasElement = canvas.getObjects();
	const quotes = canvasElement[2];

	const fontStyle = isItalic ? "italic" : "normal";

	quotes.set({ fontStyle });
	canvas.requestRenderAll();
};

export const toggleUnderlined = ({ canvas, isUnderlined }) => {
	const canvasElement = canvas.getObjects();
	const quotes = canvasElement[2];

	quotes.set({ underline: isUnderlined });
	canvas.requestRenderAll();
};

export const changeFontCase = ({ canvas, fontCase, initialQuotes }) => {
	const canvasElement = canvas.getObjects();
	const quotes = canvasElement[2];

	if (fontCase === "uppercase") quotes.text = quotes.text.toUpperCase();
	if (fontCase === "lowercase") quotes.text = quotes.text.toLowerCase();
	if (fontCase === "default") quotes.text = initialQuotes;
	canvas.requestRenderAll();
};

export const moveQuotes = ({ canvas, type }) => {
	const object = canvas.getObjects()[2];

	if (!object) return;

	console.log(type);

	switch (type) {
		case "up":
			object.top -= 5;
			break;
		case "down":
			object.top += 5;
			break;
		case "left":
			object.left -= 5;
			break;
		case "right":
			object.left += 5;
			break;
		default:
			return;
	}
	canvas.requestRenderAll();
};

export const moveAuthor = ({ canvas, type }) => {
	const object = canvas.getObjects()[3];

	if (!object) return;

	switch (type) {
		case "up":
			object.top -= 5;
			break;
		case "down":
			object.top += 5;
			break;
		case "left":
			object.left -= 5;
			break;
		case "right":
			object.left += 5;
			break;
		default:
			return;
	}
	canvas.requestRenderAll();
};

/* OTHERS */
export const changeHideAuthor = ({ canvas, hideAuthor, initialAuthor }) => {
	const canvasElement = canvas.getObjects();
	const author = canvasElement[3];

	if (hideAuthor) author.text = "";
	if (!hideAuthor) author.text = initialAuthor;
	canvas.requestRenderAll();
};

export const toggleGrayscale = ({ canvas, grayscale }) => {
	const image = canvas.getObjects()[0];

	image.filters[1] = grayscale && new fabric.Image.filters.Grayscale();
	image.applyFilters();
	canvas.requestRenderAll();
};

export const toggleSepia = ({ canvas, sepia }) => {
	const image = canvas.getObjects()[0];

	image.filters[2] = sepia && new fabric.Image.filters.Sepia();
	image.applyFilters();
	canvas.requestRenderAll();
};

export const toggleOldPhoto = ({ canvas, oldPhoto }) => {
	const image = canvas.getObjects()[0];

	image.filters[3] = oldPhoto && new fabric.Image.filters.Brownie();
	image.applyFilters();
	canvas.requestRenderAll();
};

export const toggleVintage = ({ canvas, vintage }) => {
	const image = canvas.getObjects()[0];

	image.filters[4] = vintage && new fabric.Image.filters.Vintage();
	image.applyFilters();
	canvas.requestRenderAll();
};

export const toggleKodachrome = ({ canvas, kodachrome }) => {
	const image = canvas.getObjects()[0];

	image.filters[5] = kodachrome && new fabric.Image.filters.Kodachrome();
	image.applyFilters();
	canvas.requestRenderAll();
};

export const togglePolaroid = ({ canvas, polaroid }) => {
	const image = canvas.getObjects()[0];

	image.filters[6] = polaroid && new fabric.Image.filters.Polaroid();
	image.applyFilters();
	canvas.requestRenderAll();
};
