// Dependencies
import moment from "moment";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setSharePost, openShareModal } from "../../../../../store/slices/shareQuotesSlice";
import { snackbarMessageChange, snackbarChange } from "../../../../../store/slices/modalSlice";
import { archivePost, unarchivePost } from "../../../../../actions/posts";
import {
	confirmationChange,
	confirmationPostIdChange
} from "../../../../../store/slices/modalSlice";
import {
	reportModalChange,
	postIdChange,
	resetReport
} from "../../../../../store/slices/reportSlice";
import { statusReset } from "../../../../../store/slices/editQuotesSlice";

// Components
import BottomDrawer from "../../../../UI/BottomDrawer/BottomDrawer";
import MenuElement from "../../../../UI/MenuElement/MenuElement";
import { Link } from "react-router-dom";
import { CardHeader, Avatar, IconButton, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

// Icons
import MoreVertIcon from "@material-ui/icons/MoreVert";

// Styles
import useStyles from "./styles";

// Icons
import ReportOutlinedIcon from "@material-ui/icons/ReportOutlined";
import CallToActionOutlinedIcon from "@material-ui/icons/CallToActionOutlined";
import ShareIcon from "@material-ui/icons/Share";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import UnarchiveOutlinedIcon from "@material-ui/icons/UnarchiveOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

const QuoteHeader = ({ quotes, favorites, mobile, isDetailsPage, status }) => {
	const { username: authUsername, profilePicture } = useSelector(state => state.auth, shallowEqual);
	const { username } = useParams();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	const isLoading = status === "loading";

	const avatarURL = username === authUsername ? profilePicture : quotes.profilePicture;

	const openMenuHandler = event => {
		setIsMenuOpen(mobile ? true : event.currentTarget);
	};

	const closeMenuHandler = () => {
		setIsMenuOpen(false);
	};

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	const editPostHandler = () => {
		dispatch(statusReset());
		history.push(`/${quotes.author}/p/${quotes._id}/edit`);
		closeMenuHandler();
	};

	const deletePostHandler = () => {
		dispatch(confirmationChange(true));
		dispatch(confirmationPostIdChange(quotes._id));
		closeMenuHandler();
	};

	const archivePostHandler = () => {
		dispatch(archivePost({ postId: quotes._id, history }));
		closeMenuHandler();
	};

	const unarchivePostHandler = () => {
		dispatch(unarchivePost(quotes._id));
		closeMenuHandler();
	};

	// List Actions
	const listActions = [];

	// Open quotes, share, copy link buttons only if post not archived
	if (!quotes.archivedAt) {
		listActions.push(
			{
				text: "Open quotes",
				action: () => history.push(`/${quotes.author}/p/${quotes._id}`),
				icon: <CallToActionOutlinedIcon />
			},
			{
				text: "Share to...",
				action: () => {
					closeMenuHandler();
					dispatch(
						setSharePost({ quotes: quotes.quotes, quotesId: quotes._id, author: quotes.author })
					);
					dispatch(openShareModal());
				},
				icon: <ShareIcon />
			},
			{
				text: "Copy link",
				action: () => {
					navigator.clipboard.writeText(
						`https://quotee.cyclic.app/${quotes.author}/p/${quotes._id}?source=copy_link`
					);
					closeMenuHandler();
					dispatch(snackbarMessageChange("Quotes link copied."));
					dispatch(snackbarChange(true));
				},
				icon: <FileCopyOutlinedIcon />
			}
		);
	}

	// Edit only if post is user post & created not more than 1h
	const isPostedMoreThan1hAgo = moment.utc().diff(moment.utc(quotes.createdAt), "hours") > 0;
	if (quotes.author === authUsername && !quotes.archivedAt && !isPostedMoreThan1hAgo) {
		listActions.push({
			text: "Edit post",
			action: editPostHandler,
			icon: <EditOutlinedIcon />
		});
	}

	// Archive only if post is user post
	if (quotes.author === authUsername && !quotes.archivedAt) {
		listActions.push(
			{
				text: "Archive post",
				action: archivePostHandler,
				icon: <ArchiveOutlinedIcon />
			},
			{
				text: "Delete post",
				action: deletePostHandler,
				icon: <HighlightOffOutlinedIcon />
			}
		);
	}

	// Unarchive button
	if (quotes.author === authUsername && quotes.archivedAt) {
		listActions.push({
			text: "Unarchive post",
			action: unarchivePostHandler,
			icon: <UnarchiveOutlinedIcon />
		});
	}

	// Report post if only not user post
	if (quotes.author !== authUsername) {
		listActions.push({
			text: "Report Post",
			action: () => {
				closeMenuHandler();
				dispatch(resetReport());
				dispatch(reportModalChange(true));
				dispatch(postIdChange(quotes._id));
			},
			icon: <ReportOutlinedIcon />
		});
	}

	// Determine post is archived or normal
	const quotesHeaderText = quotes.archivedAt
		? `Archived ${moment(quotes.archivedAt).fromNow()}`
		: moment(quotes.createdAt).fromNow();

	// Remove open quotes menu if already in post details
	if (isDetailsPage) {
		listActions.shift();
	}

	return (
		<>
			<CardHeader
				avatar={
					isLoading ? (
						<Skeleton variant="circle" className={classes.avatarSkeleton} animation="wave" />
					) : (
						<Avatar
							src={avatarURL}
							component={Link}
							to={`/${quotes?.author}`}
							onClick={scrollToTop}
						/>
					)
				}
				action={
					!isLoading && (
						<IconButton onClick={openMenuHandler}>
							<MoreVertIcon />
						</IconButton>
					)
				}
				title={
					isLoading ? (
						<Skeleton variant="rect" className={classes.authorSkeleton} animation="wave" />
					) : (
						<Typography
							to={`/${quotes?.author}`}
							component={Link}
							onClick={scrollToTop}
							className={`${classes.usernameLink} ${favorites ? classes.usernameFavorites : ""} ${
								isDetailsPage ? classes.usernameDetails : ""
							}`}
						>
							{quotes?.author}
						</Typography>
					)
				}
				subheader={
					isLoading ? (
						<Skeleton variant="rect" className={classes.subheaderSkeleton} animation="wave" />
					) : (
						quotesHeaderText
					)
				}
				classes={{ subheader: classes.subheader, title: classes.username }}
				className={classes.cardHeader}
			/>
			{!mobile && (
				<MenuElement anchorEl={isMenuOpen} onCloseMenu={closeMenuHandler} menuLists={listActions} />
			)}
			{mobile && (
				<BottomDrawer
					open={isMenuOpen}
					onOpen={openMenuHandler}
					onClose={closeMenuHandler}
					listActions={listActions}
				/>
			)}
		</>
	);
};

export default QuoteHeader;
