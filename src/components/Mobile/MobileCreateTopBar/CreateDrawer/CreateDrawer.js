// Dependencies
import { useHistory } from "react-router";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { quotesReset, tagsReset } from "../../../../store/slices/newQuotesSlice";

// Components
import { SwipeableDrawer, Divider, List, ListItem, ListItemText } from "@material-ui/core";

// Utils
import saveToDraft from "../../../../utils/saveToDraft";

// Styles
import useStyles from "./styles";

const CreateDrawer = ({ open, toggler, draftId, getQuery }) => {
	const { quotes, tags } = useSelector(state => state.newQuotes, shallowEqual);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const exitHandler = async url => {
		if (url) {
			history.replace(url);
		} else {
			history.goBack();
		}
		setTimeout(() => {
			dispatch(quotesReset());
			dispatch(tagsReset());
		}, 800);
	};

	const saveDraftHandler = () => {
		saveToDraft(quotes, tags, getQuery, exitHandler);
	};

	const deleteDraftHandler = () => {
		localStorage.removeItem(draftId);
		exitHandler();
		dispatch(quotesReset());
		dispatch(tagsReset());
	};

	return (
		<SwipeableDrawer
			anchor="bottom"
			open={open}
			onClose={toggler(false)}
			onOpen={toggler(true)}
			disableBackdropTransition={!iOS}
			disableDiscovery={iOS}
		>
			<Divider className={classes.divider} />
			<List>
				<ListItem button onClick={saveDraftHandler}>
					<ListItemText
						primary="Save to draft"
						className={`${classes.listItem} ${classes.saveText}`}
					/>
				</ListItem>
				{draftId && (
					<ListItem button onClick={deleteDraftHandler}>
						<ListItemText
							primary="Delete draft"
							className={`${classes.listItem} ${classes.deleteText}`}
						/>
					</ListItem>
				)}
				<ListItem button onClick={() => exitHandler()}>
					<ListItemText
						primary="Exit without saving"
						className={`${classes.listItem} ${classes.exitText}`}
					/>
				</ListItem>
			</List>
		</SwipeableDrawer>
	);
};

export default CreateDrawer;
