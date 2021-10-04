// Dependencies
import badWords from "bad-words";

const profanityFilter = new badWords({ regex: /\*|\.|$/gi });
const indonesianBadWords = [
	"Bajingan",
	"Kunyuk",
	"Asu",
	"Bangsat",
	"Kampret",
	"Kontol",
	"Memek",
	"Ngentot",
	"Ngewe",
	"Jembut",
	"Perek",
	"Pecun",
	"Bencong",
	"Banci",
	"Jablay",
	"Maho",
	"Udik",
	"Sarap",
	"Kamseupay",
	"Dajjal",
	"Jahannam",
	"Jahanam",
	"Jin Tomang",
	"Bejad",
	"Tai",
	"Taik",
	"Dajal",
	"Puki",
	"Pukimak",
	"Cuki",
	"Sundala",
	"Laso",
	"Kembeng",
	"Luji",
	"Jancok",
	"Sempak",
	"Jamput",
	"Juancok",
	"Juancokk",
	"Pantek",
	"Cukimai",
	"Bampuki",
	"Bangke",
	"Jamet",
	"Kuproy",
	"Oyot",
	"Sedeng",
	"Autis",
	"Kentung",
	"Cacad",
	"Kepet",
	"Ngepet",
	"Homo",
	"Cipay",
	"Cipai",
	"Kondom",
	"Gambris",
	"Anjrit",
	"Anjir",
	"Jancuk",
	"Tepos",
	"Kimak",
	"Qmac"
];
profanityFilter.addWords(...indonesianBadWords);
profanityFilter.removeWords("pula", "hells", "sadist", "suka");

export const filter = profanityFilter;

const validator = quotes => {
	// Length validator
	if (quotes.length < 20 || quotes.length > 200) {
		return "Must not be less than 20 characters or more than 200 characters";
	}

	// Profanity validator
	const currentQuotes = quotes;
	const filteredQuotes = profanityFilter.clean(quotes);

	if (currentQuotes !== filteredQuotes) {
		return "Bad words is not allowed!";
	}

	return true;
};

export default validator;
