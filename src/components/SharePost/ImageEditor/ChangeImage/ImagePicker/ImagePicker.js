// Dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

// Components
import SearchBar from "material-ui-search-bar";
import InfiniteScroll from "react-infinite-scroll-component";
import {
	Dialog,
	Grid,
	Typography,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	IconButton,
	Slide,
	ImageList,
	ImageListItem,
	ButtonBase,
	CircularProgress
} from "@material-ui/core";

// Actions
import {
	getImages,
	getImagesBySearch,
	getMoreImages,
	getMoreImagesBySearch
} from "../../../../../actions/images";
import { changeImageFromBrowse } from "../../../../../utils/canvasEditor";
import { changeSearchQuery } from "../../../../../store/slices/imagesSlice";

// Icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// Styles
import useStyles from "./styles";

// Transition
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="left" ref={ref} {...props} />;
});

const ImagePicker = ({ isOpen, mobile, onClose, canvas, profile }) => {
	const {
		images,
		status,
		hasMore,
		searchQuery,
		searchStatus,
		getMoreImagesStatus,
		getMoreImagesBySearchStatus
	} = useSelector(state => state.images, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const isLoading = status === "loading";
	const isSearchLoading = searchStatus === "loading";

	useEffect(() => {
		if (status === "idle") {
			dispatch(getImages({ current: 0 }));
		}
	}, [dispatch, status]);

	const closeHandler = () => {
		onClose(false);
	};

	const changeImageHandler = ({ imageURL, username, userLink }) => {
		onClose(false);
		changeImageFromBrowse({ canvas, imageURL, dispatch, profile, username, userLink });
	};

	const searchQueryChangeHandler = newQuery => {
		dispatch(changeSearchQuery(newQuery));
	};

	const cancelSearchHandler = () => {
		dispatch(changeSearchQuery(""));
	};

	const searchImagesHandler = () => {
		dispatch(getImagesBySearch({ query: searchQuery, current: 0 }));
	};

	return (
		<Dialog
			fullWidth
			maxWidth="md"
			fullScreen={mobile}
			TransitionComponent={Transition}
			open={isOpen}
			onClose={closeHandler}
			classes={{ paper: classes.dialog }}
		>
			<DialogTitle className={classes.dialogTitle}>
				<Grid container direction="row" alignItems="center">
					<Grid item className={classes.titleContainer} xs={mobile ? 12 : 8}>
						{mobile && (
							<IconButton className={classes.backButton} onClick={closeHandler}>
								<ArrowBackIcon />
							</IconButton>
						)}
						<Typography className={classes.title}>Browse Image</Typography>
					</Grid>
					{!mobile && (
						<Grid item className={classes.searchBarContainer}>
							<SearchBar
								className={classes.searchBar}
								onRequestSearch={searchImagesHandler}
								onCancelSearch={cancelSearchHandler}
								onChange={searchQueryChangeHandler}
								value={searchQuery}
								placeholder="Search quotes"
							/>
						</Grid>
					)}
				</Grid>
			</DialogTitle>
			<DialogContent id="scrollable">
				{mobile && (
					<Grid item className={classes.searchBarContainerMobile}>
						<SearchBar
							className={classes.searchBar}
							onRequestSearch={searchImagesHandler}
							onCancelSearch={cancelSearchHandler}
							onChange={searchQueryChangeHandler}
							value={searchQuery}
							placeholder="Search quotes"
						/>
					</Grid>
				)}
				{isLoading && (
					<Grid
						container
						direction="column"
						alignItems="center"
						justifyContent="center"
						className={classes.spinnerContainer}
					>
						<Grid item>
							<CircularProgress color="primary" />
						</Grid>
						<Grid item className={classes.loadingText}>
							<Typography variant="body2">Loading images...</Typography>
						</Grid>
					</Grid>
				)}
				{isSearchLoading && (
					<Grid
						container
						direction="column"
						alignItems="center"
						justifyContent="center"
						className={classes.spinnerContainer}
					>
						<Grid item>
							<CircularProgress color="primary" />
						</Grid>
						<Grid item className={classes.loadingText}>
							<Typography variant="body2">Searching images...</Typography>
						</Grid>
					</Grid>
				)}
				{!isLoading && !isSearchLoading && images.length === 0 && (
					<Grid
						container
						direction="column"
						alignItems="center"
						justifyContent="center"
						className={classes.spinnerContainer}
					>
						<Typography align="center">No images found.</Typography>
					</Grid>
				)}

				{!isLoading && !isSearchLoading && images.length !== 0 && (
					<InfiniteScroll
						dataLength={images.length}
						next={() =>
							searchQuery
								? dispatch(getMoreImagesBySearch({ query: searchQuery, current: images.length }))
								: dispatch(getMoreImages({ current: images.length }))
						}
						hasMore={hasMore}
						scrollableTarget="scrollable"
						loader={
							<Grid
								container
								justifyContent="center"
								alignItems="center"
								className={classes.loadingMoreImages}
							>
								<Typography color="primary" variant="body2" component="div">
									<CircularProgress size={10} />
									&nbsp; Loading more images
								</Typography>
							</Grid>
						}
					>
						<div className={classes.root}>
							<ImageList rowHeight={250} cols={mobile ? 2 : 5} className={classes.imageList}>
								{images.map((image, index) => (
									<ImageListItem key={image?._id || index} className={classes.listItem}>
										<ButtonBase
											onClick={() =>
												changeImageHandler({
													imageURL: image?.regular,
													username: image?.username,
													userLink: image?.userLink
												})
											}
											className={classes.listItem}
										>
											<img
												src={image?.thumb}
												alt={image.url || `Thumbnail ${index}`}
												className={
													image.width < image.height && image.height / image.width >= 1.3
														? classes.imageFitWidth
														: classes.image
												}
											/>
										</ButtonBase>
									</ImageListItem>
								))}
							</ImageList>
						</div>
						{!hasMore &&
							searchStatus !== "loading" &&
							status !== "loading" &&
							getMoreImagesBySearchStatus !== "loading" &&
							getMoreImagesStatus !== "loading" && (
								<Typography align="center" variant="body2" className={classes.endOfImages}>
									No more images
								</Typography>
							)}
					</InfiniteScroll>
				)}
			</DialogContent>
			{!mobile && (
				<DialogActions>
					<Button onClick={closeHandler} color="primary" className={classes.cancelButton}>
						Cancel
					</Button>
				</DialogActions>
			)}
		</Dialog>
	);
};

export default ImagePicker;
