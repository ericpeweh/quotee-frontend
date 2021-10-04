// Components
import { Grid, Typography, ButtonBase } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const Action = ({ type, amount, amountDescription, onOpenModal, onChangeModal }) => {
	const classes = useStyles();
	const buttonClass = {
		quotesButton: classes.quotesButton,
		followingButton: classes.followingButton
	};

	const buttonClickHandler = () => {
		onOpenModal();
		onChangeModal(amountDescription);
	};

	const postClickHandler = () => {
		onOpenModal();
	};

	return (
		<Grid
			item
			xs={4}
			component={ButtonBase}
			className={buttonClass[type]}
			TouchRippleProps={{ classes: { root: classes.touchRipple } }}
			onClick={
				(onOpenModal && onChangeModal && buttonClickHandler) || (onOpenModal && postClickHandler)
			}
		>
			<Typography align="center" color="textSecondary" className={classes.amountDescription}>
				<span className={classes.amount}>{amount}</span> {amountDescription}
			</Typography>
		</Grid>
	);
};

export default Action;
