import formatNumber from "./formatNumber";

const formatLikes = (likes = [], userId) => {
	const userIsLiked = likes?.find(like => like === userId);

	return userIsLiked
		? likes.length >= 2
			? `You and ${formatNumber(likes?.length) - 1} others`
			: `${formatNumber(likes?.length)} like`
		: `${formatNumber(likes?.length)} ${likes?.length <= 1 ? "Like" : "Likes"}`;
};

export default formatLikes;
