// Dependencies
import { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
	quotesChange,
	quotesBlur,
	quotesReset,
	tagsChange,
	tagsDelete,
	tagsBlur,
	tagsReset
} from "../../../store/slices/editQuotesSlice";
import { fetchEditPost, editPost } from "../../../actions/posts";
import { modalOpen } from "../../../store/slices/editQuotesSlice";

// Components
import CancelModal from "./CancelModal/CancelModal";
import ErrorText from "./ErrorText/ErrorText";
import ChipInput from "material-ui-chip-input";
import { Grid, FormControl, InputLabel, OutlinedInput, Button } from "@material-ui/core";

// Utils (validator for input)
import quotesValidator from "../../../utils/quotesValidator";
import tagsValidator from "../../../utils/tagsValidator";

// Styles
import useStyles from "./styles";

const FormEdit = ({ onChangeQuotes, mobile }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const { postId } = useParams();
	const { quotes, quotesIsTouched, tags, tagsIsTouched, quotesId, fetchPostStatus } = useSelector(
		state => state.editQuotes,
		shallowEqual
	);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	// Update quotes display
	useEffect(() => {
		const timer = setTimeout(() => {
			onChangeQuotes(quotes);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [quotes, dispatch, onChangeQuotes]);

	// Fetch edit post to populate form
	useEffect(() => {
		if (fetchPostStatus !== "loading" && fetchPostStatus !== "succeeded")
			dispatch(fetchEditPost(postId));
	}, [dispatch, postId, fetchPostStatus]);

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

		const editedPost = { quotes, tags };
		dispatch(modalOpen());
		dispatch(editPost({ postId: quotesId, editedPost }));

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

	const cancelHandler = () => {
		dispatch(quotesReset());
		dispatch(tagsReset());

		history.goBack();
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
				<CancelModal isOpen={isDialogOpen} onClose={dialogCloseHandler} onExit={cancelHandler} />
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
							Update Post
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
									if (quotesIsTouched || tagsIsTouched) {
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

export default FormEdit;
