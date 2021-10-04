// Dependencies
import { useHistory } from "react-router";

// Components
import { Skeleton } from "@material-ui/lab";
import { Grid, Typography, ButtonBase } from "@material-ui/core";

// Utils
import formatNumber from "../../../../../../utils/formatNumber";

// Styles
import useStyles from "./styles";

const MobileProfileAction = ({
	amount,
	amountDescription,
	link,
	onScrollPosts,
	onButtonClick,
	status
}) => {
	const history = useHistory();
	const classes = useStyles();

	const isLoading = status === "loading";

	const clickHandler = () => {
		onButtonClick();
		history.push(link);
	};

	return (
		<Grid
			item
			xs={4}
			component={ButtonBase}
			TouchRippleProps={{ classes: { root: classes.touchRipple } }}
			onClick={!link ? onScrollPosts : clickHandler}
		>
			{isLoading ? (
				<Skeleton variant="rect" animation="wave" className={classes.actionButtonSkeleton} />
			) : (
				<Typography align="center" color="textSecondary" className={classes.amountDescription}>
					<span className={classes.amount}>{formatNumber(amount)}</span> {amountDescription}
				</Typography>
			)}
		</Grid>
	);
};

export default MobileProfileAction;
