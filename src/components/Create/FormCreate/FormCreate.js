// Dependencies
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
	quotesChange,
	quotesBlur,
	quotesReset,
	tagsChange,
	tagsDelete,
	tagsBlur,
	tagsReset
} from "../../../store/slices/newQuotesSlice";
import { createPost } from "../../../actions/posts";
import { modalOpen } from "../../../store/slices/newQuotesSlice";

// Components
import CancelModal from "./CancelModal/CancelModal";
import ErrorText from "./ErrorText/ErrorText";
import ChipInput from "material-ui-chip-input";
import { Grid, FormControl, InputLabel, OutlinedInput, Button } from "@material-ui/core";

// Utils (validator for input)
import quotesValidator from "../../../utils/quotesValidator";
import tagsValidator from "../../../utils/tagsValidator";
import saveToDraft from "../../../utils/saveToDraft";

// Styles
import useStyles from "./styles";

const FormCreate = ({ onChangeQuotes, mobile }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const { quotes, quotesIsTouched, tags, tagsIsTouched } = useSelector(
		state => state.newQuotes,
		shallowEqual
	);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();
	const location = useLocation();

	// Get URL Params
	const getQuery = useCallback(() => {
		return new URLSearchParams(location.search);
	}, [location]);

	// Update quotes display
	useEffect(() => {
		const timer = setTimeout(() => {
			onChangeQuotes(quotes);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [quotes, dispatch, onChangeQuotes]);

	// Check is form create / form draft
	const drafted = Boolean(getQuery().get("drafted"));
	const draftId = getQuery().get("draftId");

	// Check if form create data from DRAFTS
	useEffect(() => {
		// Fetch for quotes data localstorage
		let drafts = localStorage.getItem(draftId);
		let draftQuotes = "";
		let draftTags = "";
		if (drafts) {
			drafts = JSON.parse(drafts);
			draftQuotes = drafts?.quotes;
			draftTags = JSON.parse(drafts?.tags);
		}

		if (drafted && draftId && draftQuotes && draftTags) {
			dispatch(quotesChange(draftQuotes));
			dispatch(quotesBlur());
			dispatch(tagsBlur());
			draftTags.map(tag => dispatch(tagsChange(tag)));
		}
	}, [dispatch, draftId, drafted]);

	// Vallidation
	const quotesIsValid = quotesValidator(quotes);
	const quotesHasError =
		(typeof quotesIsValid === "string" || quotesIsValid === false) && quotesIsTouched;

	const tagsIsValid = tagsValidator(tags);
	const tagsHasError = (typeof tagsIsValid === "string" || tagsIsValid === false) && tagsIsTouched;

	// Form valid state
	let formIsValid = false;
	const quoteValidIsString = typeof quotesIsValid === "string";
	const tagsValidIsString = typeof tagsIsValid === "string";
	if (quotesIsValid && tagsIsValid && !quoteValidIsString && !tagsValidIsString) {
		formIsValid = true;
	}

	// Form submit handler
	const formSubmitHandler = event => {
		if (!formIsValid) {
			return;
		}

		const quotesData = { quotes, tags, isDraft: drafted && draftId, draftId };
		dispatch(modalOpen());
		dispatch(createPost(quotesData));

		dispatch(quotesReset());
		dispatch(tagsReset());
	};

	// Cancel modal
	const dialogCloseHandler = () => {
		setIsDialogOpen(false);
	};

	const dialogOpenHandler = () => {
		setIsDialogOpen(true);
	};

	const cancelHandler = url => {
		dispatch(quotesReset());
		dispatch(tagsReset());
		if (url) {
			history.push(url);
		} else {
			history.goBack();
		}
	};

	const saveHandler = () => {
		saveToDraft(quotes, tags, getQuery, cancelHandler);
	};

	// Styling props
	let quotesInputProps = {};
	let tagsInputProps = {};
	if (quotesHasError) {
		quotesInputProps.error = true;
	}
	if (tagsHasError) {
		tagsInputProps.error = true;
	}

	return (
		<>
			{!mobile && (
				<CancelModal
					isOpen={isDialogOpen}
					onClose={dialogCloseHandler}
					onExit={cancelHandler}
					onSave={saveHandler}
					isDraft={drafted && draftId}
					draftId={draftId}
				/>
			)}
			<Grid item xs={12} md={6}>
				<Grid container spacing={2} direction="column">
					<Grid item xs={12}>
						<FormControl variant="outlined" size="small" fullWidth>
							<InputLabel htmlFor="quotes">Quotes</InputLabel>
							<OutlinedInput
								label="Quotes"
								className={classes.quotesInput}
								color="secondary"
								autoComplete="off"
								onChange={event => {
									dispatch(quotesChange(event.target.value));
								}}
								onBlur={() => dispatch(quotesBlur())}
								value={quotes}
								multiline
								rows={5}
								{...quotesInputProps}
							/>
							{quotesHasError && <ErrorText color="error" text={quotesIsValid} />}
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<ChipInput
							variant="outlined"
							classes={{ chipContainer: classes.tagsInput }}
							size="small"
							label="Tags"
							color="secondary"
							fullWidth
							blurBehavior="add"
							onBlur={() => dispatch(tagsBlur())}
							onAdd={tag => dispatch(tagsChange(tag))}
							onDelete={tag => dispatch(tagsDelete(tag))}
							value={tags}
							{...tagsInputProps}
						/>
						{tagsHasError && <ErrorText color="error" text={tagsIsValid} />}
					</Grid>
					<Grid item container xs={12}>
						<Button
							component={Grid}
							item
							xs={12}
							className={classes.createButton}
							type="submit"
							variant="contained"
							color="primary"
							size="small"
							onClick={formSubmitHandler}
							disabled={!formIsValid}
						>
							Create
						</Button>
					</Grid>
					{!mobile && (
						<Grid item container xs={12}>
							<Button
								component={Grid}
								item
								xs={12}
								className={classes.cancelButton}
								disableFocusRipple
								type="submit"
								variant="contained"
								size="small"
								onClick={() => {
									if (quotes && tags) {
										dialogOpenHandler();
									} else {
										cancelHandler();
									}
								}}
							>
								Cancel
							</Button>
						</Grid>
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default FormCreate;
