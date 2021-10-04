// Dependencies
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

const saveToDraft = (quotesValue, tagsValue, getQuery, cancelHandler) => {
	if (quotesValue && tagsValue) {
		const drafted = Boolean(getQuery().get("drafted"));
		const draftId = getQuery().get("draftId");

		let draft = localStorage.getItem(draftId);
		let draftQuotes = "";
		let draftTags = "";
		if (draft) {
			draft = JSON.parse(draft);
			draftQuotes = draft.quotes;
			draftTags = JSON.parse(draft.tags);
		}

		if (drafted && draftId && draftQuotes && draftTags) {
			localStorage.setItem(
				`${draftId}`,
				JSON.stringify({
					quotes: quotesValue,
					tags: JSON.stringify(tagsValue),
					date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
				})
			);
		} else {
			localStorage.setItem(
				uuidv4(),
				JSON.stringify({
					quotes: quotesValue,
					tags: JSON.stringify(tagsValue),
					date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
				})
			);
		}

		cancelHandler("/draft");
	}
};

export default saveToDraft;
