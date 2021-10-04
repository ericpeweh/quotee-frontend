// Dependencies
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
	likeModalChange,
	resetLike,
	likeSearchQueryChange
} from "../../../store/slices/modalSlice";
import { searchLikes, fetchMoreLikes } from "../../../actions/posts";

// Components
import Modal from "../Modal/Modal";

const CenterModalSearch = ({ mobile }) => {
	const { isLikeModalOpen, likes, likeStatus, likeSearchQuery, postId, hasMoreLikes } = useSelector(
		state => state.modal,
		shallowEqual
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(resetLike());
	}, [dispatch]);

	const closeModalHandler = () => dispatch(likeModalChange(false));

	// For likes search
	const searchHandler = () => {
		dispatch(searchLikes({ username: likeSearchQuery, postId }));
	};

	const fetchMoreLikesHandler = current => {
		dispatch(fetchMoreLikes({ postId, current }));
	};

	return (
		<Modal
			open={isLikeModalOpen}
			onClose={closeModalHandler}
			onSearch={searchHandler}
			title="Likes"
			mobile={mobile}
			users={likes}
			status={likeStatus}
			searchQuery={likeSearchQuery}
			queryChange={likeSearchQueryChange}
			onFetchMore={fetchMoreLikesHandler}
			hasMore={hasMoreLikes}
		/>
	);
};

export default CenterModalSearch;
