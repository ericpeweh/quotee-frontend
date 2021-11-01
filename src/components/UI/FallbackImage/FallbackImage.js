// Dependencies
import { useSelector, shallowEqual } from "react-redux";
import { useLocation } from "react-router";

// Components
import { Grid, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";

const FallbackImage = ({ image, text, isPosts }) => {
	const { username } = useSelector(state => state.auth, shallowEqual);
	const classes = useStyles();

	const location = useLocation();

	const isFavorites = location.pathname === "/favorites";
	const isAccount = location.pathname === `/${username}`;
	const isDraft = location.pathname === "/draft";
	const isArchived = location.pathname === "/archived";

	const isNotAccount = isFavorites || isDraft || isArchived;

	return (
		<Grid
			container
			justifyContent="center"
			direction="column"
			alignItems="center"
			className={`${classes.fallbackContainer} ${isPosts ? classes.isPosts : ""} ${
				isNotAccount ? "" : classes.notAccount
			}`}
		>
			<Grid item>
				<img src={image} alt={"No drafts"} width={isPosts ? 200 : 250} />
			</Grid>
			<Grid item>
				<Typography
					component={Grid}
					item
					xs={12}
					align="center"
					variant="body2"
					className={classes.fallbackText}
				>
					{text}
				</Typography>
			</Grid>
			<Grid item>
				{isFavorites && (
					<Typography className={classes.subtitle}>
						To favorite a quotes, click the " Add to favorites{" "}
						<BookmarkIcon className={classes.icon} />" button
					</Typography>
				)}
				{isAccount && (
					<Typography className={classes.subtitle}>
						To create a new quotes, click the <AddBoxOutlinedIcon className={classes.icon} /> button
						on Homepage
					</Typography>
				)}
				{isDraft && (
					<Typography className={classes.subtitle}>
						Your drafted posts will be shown here.
					</Typography>
				)}
				{isArchived && (
					<Typography className={classes.subtitle}>
						Your archived posts will be shown here.
					</Typography>
				)}
			</Grid>
		</Grid>
	);
};

export default FallbackImage;
