const swDev = () => {
	const swURL = `${process.env.PUBLIC_URL}/sw.js`;
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register(swURL)
			.then(res => {
				console.log("Service worker registered successfully.");
			})
			.catch(err => console.log("Service worker registration failed, error."));
	}
};

export default swDev;
