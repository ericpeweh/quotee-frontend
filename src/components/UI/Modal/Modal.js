// Dependencies
import React from "react";
import { useDispatch } from "react-redux";
import { likeSearchQueryChange } from "../../../store/slices/modalSlice";

// Components
import UserSuggestion from "../../SideBar/Suggestion/UsersSuggestion/UserSuggestion";
import TopBar from "../TopBar/TopBar";
import SearchBar from "material-ui-search-bar";
import InfiniteScroll from "react-infinite-scroll-component";
import {
	Dialog,
	DialogContent,
	Grid,
	Typography,
	Divider,
	Slide,
	CircularProgress
} from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Transition
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="left" ref={ref} {...props} />;
});

// Main
const Modal = ({
	open,
	onClose,
	onFetchMore,
	onSearch,
	title,
	mobile,
	users,
	status,
	searchQuery,
	queryChange,
	hasMore
}) => {
	const dispatch = useDispatch();
	const classes = useStyles();

	// Responsive Design
	const dialogClasses = mobile ? "modalMobile" : "modal";

	const dialogProps = {
		maxWidth: "xs",
		fullWidth: true
	};
	const isLoading = status === "loading";

	if (mobile) {
		dialogProps.fullScreen = true;
	}

	const searchQueryChangeHandler = newQuery => {
		dispatch(queryChange(newQuery));
	};

	const dialogHeader = mobile ? (
		<TopBar title={title} modal onClose={onClose} />
	) : (
		<Grid
			direction="row"
			container
			justifyContent="space-between"
			alignItems="center"
			className={classes.dialogHeader}
		>
			<Grid item xs={4}>
				<Typography variant="h6" className={classes.modalTitle}>
					{title}
				</Typography>
			</Grid>
			<Grid item xs={8}>
				<SearchBar
					className={classes.searchBar}
					onRequestSearch={onSearch}
					value={searchQuery}
					onChange={searchQueryChangeHandler}
					onCancelSearch={() => dispatch(likeSearchQueryChange(""))}
				/>
			</Grid>
		</Grid>
	);

	return (
		<Dialog
			open={open}
			onClose={onClose}
			classes={{ paper: classes[dialogClasses] }}
			TransitionComponent={Transition}
			{...dialogProps}
		>
			{dialogHeader}
			<Divider />
			<DialogContent
				className={`${classes.dialogContent} ${mobile ? classes.dialogContentMobile : ""}`}
			>
				{mobile && (
					<SearchBar
						className={`${classes.searchBar} ${mobile ? classes.searchBarMobile : ""}`}
						onChange={searchQueryChangeHandler}
						onRequestSearch={onSearch}
						onCancelSearch={() => dispatch(likeSearchQueryChange(""))}
					/>
				)}
				<Grid container direction="column">
					{isLoading && (
						<Grid item className={classes.loadingSpinnerContainer}>
							<CircularProgress color="secondary" size={30} className={classes.loadingSpinner} />
						</Grid>
					)}
					{users && !isLoading && status !== "idle" && (
						<InfiniteScroll
							dataLength={users.length}
							next={() => onFetchMore(users.length)}
							hasMore={hasMore}
							loader={
								<Grid container justifyContent="center" alignItems="center">
									<Typography color="secondary" variant="body2">
										<CircularProgress size={10} />
										&nbsp; Loading
									</Typography>
								</Grid>
							}
						>
							{users.map(user => (
								<UserSuggestion key={user.username} user={user} onClose={onClose} />
							))}
						</InfiniteScroll>
					)}
					{users.length === 0 && !isLoading && !searchQuery && (
						<p className={classes.noLikesText}>No {title.toLowerCase()} yet.</p>
					)}
					{users.length === 0 && !isLoading && searchQuery && (
						<p className={classes.noLikesText}>No user found.</p>
					)}
				</Grid>
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
