// Dependencies
import moment from "moment";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
	changeSearch,
	changeAuthor,
	changeTags,
	deleteTags,
	changeToDate,
	changeFromDate
} from "../../../../store/slices/searchSlice";

// Components
import TopBar from "../../../UI/TopBar/TopBar";
import ChipInput from "material-ui-chip-input";
import {
	Dialog,
	DialogContent,
	Grid,
	Typography,
	Divider,
	FormControl,
	OutlinedInput,
	InputLabel,
	Button
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

// Styles
import useStyles from "./styles";

const AdvancedSearchModal = ({ open, onClose, mobile }) => {
	const search = useSelector(state => state.search);
	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();

	const searchHandler = () => {
		history.push(
			`/p/search?quotes=${search.searchQuery}&author=${search.authorQuery}&tags=${search.tagsQuery}&fromDate=${search.fromDateQuery}&toDate=${search.toDateQuery}&advanced=true`
		);
	};

	const dialogContentProps = {
		className: classes.dialogContent
	};
	if (mobile) {
		dialogContentProps.classes = { root: classes.dialogContentRoot };
	}

	return (
		<>
			<Dialog
				maxWidth="sm"
				fullScreen={mobile ? true : false}
				fullWidth
				open={open}
				onClose={onClose}
				classes={{ paper: mobile ? classes.searchModalMobile : classes.searchModal }}
			>
				{mobile && open && <TopBar title="Advanced Search" modal onClose={onClose} />}
				{!mobile && (
					<>
						<Typography variant="h6" color="primary" className={classes.modalTitle}>
							Advanced Search
						</Typography>
						<Divider variant="middle" />
					</>
				)}
				<DialogContent {...dialogContentProps}>
					<Grid component="form" container spacing={2}>
						<Grid item xs={12}>
							<FormControl variant="outlined" size="small" fullWidth>
								<InputLabel htmlFor="quotes">Quotes</InputLabel>
								<OutlinedInput
									id="quotes"
									label="Quotes"
									autoComplete="off"
									className={classes.input}
									value={search.searchQuery}
									onChange={e => dispatch(changeSearch(e.target.value))}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl variant="outlined" size="small" fullWidth>
								<InputLabel htmlFor="author">Author</InputLabel>
								<OutlinedInput
									id="author"
									label="Author"
									autoComplete="off"
									className={classes.input}
									value={search.authorQuery}
									onChange={e => dispatch(changeAuthor(e.target.value))}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<ChipInput
								variant="outlined"
								size="small"
								label="Tags"
								fullWidth
								blurBehavior="add"
								value={search.tagsQuery}
								classes={{ inputRoot: classes.input }}
								onAdd={tag => dispatch(changeTags(tag))}
								onDelete={tag => {
									if (search.tagsQuery.length !== 0) {
										dispatch(deleteTags(tag));
									}
								}}
							/>
						</Grid>
						<Grid item sm={6} xs={12} className={classes.dateInputMobile}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									margin="normal"
									inputVariant="outlined"
									label="From"
									format="dd/MM/yyyy"
									className={classes.dateInput}
									fullWidth
									inputValue={search.fromDateQuery}
									onChange={(date, string) => dispatch(changeFromDate(string))}
									minDate="01/01/2021"
									maxDate={moment.utc().format("MM/DD/YYYY")}
								/>
							</MuiPickersUtilsProvider>
						</Grid>
						<Grid item sm={6} xs={12} className={classes.dateInputMobile}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									margin="normal"
									inputVariant="outlined"
									label="To"
									format="dd/MM/yyyy"
									className={classes.dateInput}
									fullWidth
									inputValue={search.toDateQuery}
									onChange={(date, string) => dispatch(changeToDate(string))}
									minDate="01/01/2021"
									maxDate={moment.utc().format("MM/DD/YYYY")}
								/>
							</MuiPickersUtilsProvider>
						</Grid>
						<Grid item container justifyContent="flex-end" {...(mobile && { direction: "column" })}>
							{!mobile && (
								<Button
									component={Grid}
									item
									variant="contained"
									className={classes.cancelButton}
									onClick={onClose}
								>
									Cancel
								</Button>
							)}

							<Button
								component={Grid}
								item
								variant="contained"
								color="primary"
								className={classes.searchButton}
								onClick={() => {
									searchHandler();
									onClose();
								}}
							>
								Search
							</Button>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default AdvancedSearchModal;
