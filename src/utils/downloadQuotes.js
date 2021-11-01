export const downloadQuotes = ({ canvas, quality, fileName }) => {
	// Quality = 2 = low, 3 = Med, 4 = High

	const pngUrl = canvas.toDataURL({
		format: "png",
		multiplier: quality
	});

	let downloadLink = document.createElement("a");
	downloadLink.href = pngUrl;
	downloadLink.download = `${fileName}.png`;
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
};
