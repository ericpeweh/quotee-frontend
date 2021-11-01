// Dependencies
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { likeModalChange, likeModalPostId } from "../../../../../store/slices/modalSlice";
import { fetchLikes, likePost, favoritePost } from "../../../../../actions/posts";

// Utils
import formatLikes from "../../../../../utils/formatLikes";

// Actions
import { resetCanvas } from "../../../../../store/slices/canvasSlice";
import { changeSearchQuery } from "../../../../../store/slices/imagesSlice";

// Components
import { CardActions, Grid, Typography, IconButton, Tooltip } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

// Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";

// Styles
import useStyles from "./styles";

const QuoteAction = ({ quotes, mobile, status }) => {
	const { userId, favoritedPosts } = useSelector(state => state.auth, shallowEqual);
	const { postId } = useSelector(state => state.modal, shallowEqual);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();
	const [likes, setLikes] = useState(quotes?.likes);
	const [favorites, setFavorites] = useState(favoritedPosts);

	const hasLikedPost = likes?.find(like => like === userId);
	const hasFavoritedPost = favorites?.find(favorite => favorite === quotes?._id);

	const isLoading = status === "loading";

	const likeClickHandler = () => {
		dispatch(likePost(quotes?._id));

		if (hasLikedPost) {
			setLikes(prevLikes => prevLikes?.filter(id => id !== userId));
		} else {
			setLikes(prevLikes => [...prevLikes, userId]);
		}
	};

	const favoriteClickHandler = () => {
		dispatch(favoritePost(quotes?._id));

		if (hasFavoritedPost) {
			setFavorites(prevFavorited => prevFavorited.filter(id => id !== quotes?._id));
		} else {
			setFavorites(prevFavorited => [...prevFavorited, quotes?._id]);
		}
	};

	const downloadRedirectHandler = () => {
		dispatch(resetCanvas());
		dispatch(changeSearchQuery(""));
		history.push(`/${quotes.author}/p/${quotes._id}/share`);
		window.scrollTo(0, 0);
	};

	const likesModalHandler = () => {
		if (quotes && postId !== quotes._id) dispatch(fetchLikes(quotes._id));
		dispatch(likeModalPostId(quotes._id));
		dispatch(likeModalChange(true));
	};

	return (
		<>
			<CardActions disableSpacing className={classes.cardActions}>
				<Grid container justifyContent="space-between" alignItems="center">
					<Grid item container xs={6} justifyContent="flex-start" alignItems="center">
						<Grid item xs={6}>
							{isLoading ? (
								<Skeleton variant="rect" animation="wave" className={classes.likeSkeleton} />
							) : (
								<Typography
									onClick={likesModalHandler}
									variant="body2"
									color="textSecondary"
									className={classes.likes}
								>
									{formatLikes(likes, userId)}
								</Typography>
							)}
						</Grid>
					</Grid>
					<Grid item xs={6} container justifyContent="flex-end">
						{isLoading ? (
							<Skeleton variant="rect" className={classes.actionButtonSkeleton} animation="wave" />
						) : (
							<>
								<Grid item>
									<Tooltip title={`${hasLikedPost ? "Unlike" : "Like"} quotes`}>
										<IconButton size="small" onClick={likeClickHandler}>
											{hasLikedPost ? (
												<FavoriteIcon fontSize="medium" color="primary" />
											) : (
												<FavoriteBorderIcon fontSize="medium" />
											)}
										</IconButton>
									</Tooltip>
								</Grid>
								<Grid item>
									<Tooltip
										title={`${hasFavoritedPost ? "Remove from favorites" : "Add to favorites"}`}
									>
										<IconButton size="small" onClick={favoriteClickHandler}>
											{hasFavoritedPost ? (
												<TurnedInIcon fontSize="medium" color="secondary" />
											) : (
												<TurnedInNotIcon fontSize="medium" />
											)}
										</IconButton>
									</Tooltip>
								</Grid>
								<Grid item>
									<Tooltip title="Download to share">
										<IconButton size="small" onClick={downloadRedirectHandler}>
											<ImageOutlinedIcon fontSize="medium" />
										</IconButton>
									</Tooltip>
								</Grid>
							</>
						)}
					</Grid>
				</Grid>
			</CardActions>
		</>
	);
};

export default QuoteAction;
