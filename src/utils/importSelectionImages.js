const importAllImages = context => {
	let images = [];
	context.keys().forEach((item, index) => {
		images.push(context(item));
	});
	return images;
};

const images = importAllImages(require.context("../images/selection", false, /\.(png|jpe?g|svg)$/));

export default images;
