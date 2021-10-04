export const downloadQrCode = username => {
	const canvas = document.getElementById("qrcode");
	const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

	let downloadLink = document.createElement("a");
	downloadLink.href = pngUrl;
	downloadLink.download = `${username}.png`;
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
};
