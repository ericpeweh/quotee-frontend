// Dependencies
import { fabric } from "fabric";
import FontFaceObserver from "fontfaceobserver";

// Images
import invalidImageFallback from "../images/invalidURL.jpg";

// Change Fabric.js global variables
fabric.textureSize = 5120;

// Set canvas image
export const initCanvasImage = (backgroundImage, canvas) => {
	const imageElement = new fabric.Image.fromURL(
		backgroundImage,
		image => {
			image.selectable = false;
			if (backgroundImage !== invalidImageFallback) {
				image.filters.push(
					new fabric.Image.filters.Blur({
						blur: 0.06
					})
				);
				if (image.width && image.height) {
					image.applyFilters();
				}
			}
			if (image.width < image.height && image.height / image.width >= 1.4) {
				image.scaleToWidth(canvas.canvasElement.getWidth());
			} else {
				image.scaleToHeight(canvas.canvasElement.getHeight());
			}
			canvas.canvasElement.add(image);
			canvas.canvasElement.centerObject(image);
			canvas.canvasElement.sendToBack(image);
			canvas.canvasElement.renderAll();
		},
		{ crossOrigin: "anonymous" }
	);

	return imageElement;
};

// Set canvas text (quotes)
export const initCanvasText = (text, canvas, fontFamily, fontSize) => {
	const quotes = new fabric.Textbox(text, {
		fill: "#f3f3f3",
		selectable: false,
		fontWeight: 600,
		fontFamily: fontFamily,
		textAlign: "center",
		editable: false,
		fontSize: fontSize,
		shadow: "1px 1px 4px rgba(10, 10, 10, 0.5)",
		originY: "center",
		// splitByGrapheme: true,
		top: canvas.canvasElement.height * 0.45,
		width: canvas.canvasElement.width * 0.9,
		left: canvas.canvasElement.width * 0.05
	});
	canvas.canvasElement.add(quotes);
	canvas.canvasElement.renderAll();

	return text;
};

// Set author
export const initAuthorText = (authorName, canvas) => {
	const author = new fabric.Text(authorName, {
		fill: "#f3f3f3",
		selectable: false,
		editable: false,
		fontWeight: 600,
		fontFamily: "proxima-nova",
		fontSize: 16,
		shadow: "1px 1px 4px rgba(10, 10, 10, 0.5)",
		textAlign: "center",
		originX: "center",
		top:
			canvas.canvasElement.getObjects()[0].top +
			canvas.canvasElement.getObjects()[0].height / 2 +
			20,
		left: canvas.canvasElement.width * 0.5
	});
	author.setCoords();
	canvas.canvasElement.add(author);
	canvas.canvasElement.renderAll();
	return authorName;
};

// Set watermark
export const initWatermark = canvas => {
	const author = new fabric.Text("www.quotee.id", {
		fill: "#f3f3f3",
		selectable: false,
		editable: false,
		fontWeight: 600,
		fontFamily: "proxima-nova",
		fontSize: 10,
		shadow: "1px 1px 5px rgba(10, 10, 10, 0.5)",
		textAlign: "center",
		originX: "center",
		top: canvas.canvasElement.height * 0.95,
		left: canvas.canvasElement.width * 0.5
	});
	canvas.canvasElement.add(author);
	canvas.canvasElement.renderAll();
};

// Reset canvas
export const resetCanvas = canvas => {
	canvas.canvasElement.clear();
};

// Change font family
export const changeFontFamily = async (fontFamily, canvas, setFontFamily) => {
	const font = new FontFaceObserver(fontFamily);
	try {
		await font.load();
		setFontFamily(fontFamily);
		canvas.canvasElement._objects[1].set("fontFamily", fontFamily);
		canvas.canvasElement.renderAll();
	} catch (error) {
		console.log("No Images Selected", error);
	}
};

// Change font size
export const changeFontSize = (fontSize, canvas) => {
	try {
		canvas.canvasElement._objects[1].set("fontSize", fontSize);
		canvas.canvasElement.renderAll();
		canvas.canvasElement._objects[2].set(
			"top",
			canvas.canvasElement.getObjects()[1].top +
				canvas.canvasElement.getObjects()[1].height / 2 +
				20
		);
		canvas.canvasElement.renderAll();
	} catch (error) {
		console.log("No Images Selected");
	}
};

// Change image from URL
export const changeImageFromURL = (event, generateQuotes) => {
	const fileReader = new FileReader();
	fileReader.readAsDataURL(event.target.files[0]);

	fileReader.onload = imageUrl => {
		generateQuotes(imageUrl.target.result);
	};
};
