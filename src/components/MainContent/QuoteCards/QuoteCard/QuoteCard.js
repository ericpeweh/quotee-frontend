// Dependencies
import { useLocation } from "react-router";

// Components
import QuoteHeader from "./QuoteHeader/QuoteHeader";
import QuoteContent from "./QuoteContent/QuoteContent";
import QuoteAction from "./QuoteAction/QuoteAction";
import { Card, Divider } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const QuoteCard = ({ quotes, mobile, favorites, isDetailsPage, status }) => {
	const location = useLocation();
	const classes = useStyles();

	const isOnArchived = location.pathname === "/archived";

	return (
		<Card className={mobile ? classes.mobile : classes.card}>
			<QuoteHeader
				quotes={quotes}
				favorites={favorites}
				mobile={mobile}
				isDetailsPage={isDetailsPage}
				status={status}
			/>
			<Divider light variant="middle" />
			<QuoteContent quotes={quotes} status={status} />
			{(!quotes.archivedAt || !isOnArchived) && (
				<QuoteAction quotes={quotes} mobile={mobile} status={status} />
			)}
		</Card>
	);
};

export default QuoteCard;
