import { filter } from "./quotesValidator";

const profanityFilter = filter;

const tagsValidator = tags => {
	// Tags length validator
	if (tags.length === 0) return "Must have at least 1 tag!";
	if (tags.length > 5) {
		return "Only 5 tags is allowed in each post!";
	}

	// Profanity validator
	const tagsString = tags.join(" ");
	const filteredTags = profanityFilter.clean(tagsString);
	if (tagsString !== filteredTags) {
		return "Bad words is not allowed!";
	}

	return true;
};

export default tagsValidator;
