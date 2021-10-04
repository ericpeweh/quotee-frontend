export const downloadQuotes = (canvas, quality, quotes) => {
	// Quality = 2 = low, 3 = Med, 4 = High

	const pngUrl = canvas.toDataURL({
		format: "png",
		multiplier: quality
	});

	let downloadLink = document.createElement("a");
	downloadLink.href = pngUrl;
	downloadLink.download = `${quotes}.png`;
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
};
