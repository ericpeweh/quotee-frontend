export const BASE_URL =
	process.env.NODE_ENV === "development"
		? "http://localhost:5000/"
		: "https://quoteeapi.cyclic.app/";
