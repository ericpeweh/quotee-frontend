// Dependencies
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

// Components
import { Grid } from "@material-ui/core";
import SearchForm from "../../MainContent/SearchForm/SearchForm";
import SocialContent from "../../Social/SocialContent/SocialContent";
import SocialTitle from "../../Social/SocialTitle/SocialTitle";
import TopQuotes from "../../Social/TopQuotes/TopQuotes";
import DiscoversUser from "./DiscoversUser/DiscoversUser";

// Styles
import useStyles from "./styles";

const MobileSocial = () => {
	const searchQuery = useSelector(state => state.search.searchQuery);
	const history = useHistory();
	const classes = useStyles();

	const searchHandler = () => {
		history.push(`/p/search?quotes=${searchQuery}&advanced=false`);
	};

	return (
		<>
			<SearchForm mobile onSearch={searchHandler} />
			<Grid container className={classes.mobileSocialContainer} direction="column">
				<SocialTitle text="News & Article" color="secondary" />
				<SocialContent />
				<SocialTitle text="Discovers User" type="success" />
				<DiscoversUser />
				<SocialTitle text="Top Quotes" color="primary" />
				<TopQuotes />
			</Grid>
		</>
	);
};

export default MobileSocial;
