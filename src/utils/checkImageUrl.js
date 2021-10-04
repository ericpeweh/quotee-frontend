import axios from "axios";
import invalidImageFallback from "../images/invalidURL.jpg";

export const checkImageUrl = async url => {
	const isUploadedImage = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
	if (isUploadedImage.test(url) && !url.includes("http") && url.includes("base64")) {
		return url;
	} else {
		try {
			await axios.get(url);
			return url;
		} catch (error) {
			return invalidImageFallback;
		}
	}
};
