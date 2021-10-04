import moment from "moment";

export const generateGreetings = () => {
	const currentHour = moment().format("HH");

	if (currentHour >= 0 && currentHour < 12) {
		return "Good Morning, ";
	} else if (currentHour >= 12 && currentHour < 15) {
		return "Good Afternoon, ";
	} else if (currentHour >= 15 && currentHour < 24) {
		return "Good Evening, ";
	} else {
		return "Hello, ";
	}
};
