// Dependencies
import { useHistory } from "react-router";

// Components
import { ButtonBase, Grid } from "@material-ui/core";
import ContentTitle from "../UI/ContentTitle/ContentTitle";
import DraftItem from "./DraftItem/DraftItem";
import FallbackImage from "../UI/FallbackImage/FallbackImage";

// Styles
import useStyles from "./styles";

// Images
import DraftsFallback from "../../images/fallback/DRAFTS.webp";

const Draft = ({ mobile }) => {
	const history = useHistory();
	const classes = useStyles();

	const clickHandler = draftId => {
		window.scrollTo(0, 0);
		history.push(`/create?draftId=${draftId}&drafted=true`);
	};

	// Retrieve all draft from LocalStorage
	const drafts = [];
	const keys = Object.keys(localStorage);
	keys.forEach(key => {
		if (key !== "theme") {
			drafts.push({ ...JSON.parse(localStorage.getItem(key)), key });
		}
	});

	// Drafts content
	let draftsContent = "";
	if (drafts.length === 0) {
		draftsContent = (
			<Grid container item className={classes.fallbackImageContainer}>
				<FallbackImage image={DraftsFallback} text="Drafts is empty." />
			</Grid>
		);
	} else {
		draftsContent = drafts.map(draft => (
			<Grid
				item
				xs={12}
				md={6}
				key={draft.key}
				{...(mobile && { component: ButtonBase })}
				{...(mobile && { onClick: () => clickHandler(draft.key) })}
			>
				<DraftItem mobile={mobile} onClick={clickHandler} draft={draft} />
			</Grid>
		));
	}

	return (
		<Grid container className={classes.draftContainer} direction="column">
			{!mobile && <ContentTitle title="My Drafts" />}
			<Grid container item spacing={mobile ? 0 : 2} className={classes.fallbackContainer}>
				{draftsContent}
			</Grid>
		</Grid>
	);
};

export default Draft;
