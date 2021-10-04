// Dependencies
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams, useHistory } from "react-router";
import {
	passwordChange,
	passwordConfirmChange,
	showPasswordChange,
	modalChange
} from "../../store/slices/resetPasswordSlice";
import { resetPassword } from "../../actions/users";

// Components
import CenterModal from "../UI/CenterModal/CenterModal";
import { Grid, TextField, FormControlLabel, Checkbox, Button, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import resetPasswordImage from "../../images/RESETPASSWORD.webp";

const ResetPassword = ({ mobile }) => {
	const { token } = useParams();
	const { password, passwordConfirm, status, message, isModalOpen, showPassword } = useSelector(
		state => state.resetPassword,
		shallowEqual
	);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	const isFormFilled = password && passwordConfirm;

	const submitHandler = () => {
		dispatch(modalChange(true));
		dispatch(resetPassword({ token, password, passwordConfirm }));
	};

	useEffect(() => {
		if (status === "succeeded") {
			setTimeout(() => {
				history.replace("/login");
			}, 1500);
		}
	}, [status, history]);

	return (
		<Grid
			component="form"
			container
			className={classes.resetPasswordContainer}
			direction="row"
			justifyContent="center"
			alignItems="center"
		>
			<CenterModal
				text={message}
				type={status === "succeeded" ? "success" : "error"}
				onClose={() => dispatch(modalChange(false))}
				open={isModalOpen}
			/>
			<Grid item sm={7} xs={12} className={classes.resetPasswordForm}>
				<Grid item className={classes.inputContainer} container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h6" className={classes.changePasswordText}>
							Change Password
						</Typography>
					</Grid>
					<Grid item xs={12} md={10}>
						<TextField
							label="New Password"
							type={showPassword ? "text" : "password"}
							variant="outlined"
							size="small"
							className={classes.textField}
							onChange={e => dispatch(passwordChange(e.target.value))}
							value={password}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} md={10}>
						<TextField
							label="New Password Confirmation"
							variant="outlined"
							type={showPassword ? "text" : "password"}
							size="small"
							className={classes.textField}
							onChange={e => dispatch(passwordConfirmChange(e.target.value))}
							value={passwordConfirm}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} className={classes.showPassword}>
						<FormControlLabel
							control={
								<Checkbox
									checked={showPassword}
									onChange={() => dispatch(showPasswordChange())}
									name="showPassword"
								/>
							}
							label="Show password"
							classes={{ label: classes.showPasswordLabel }}
						/>
					</Grid>
					<Grid item container justifyContent="flex-start">
						<Button
							component={Grid}
							item
							variant="contained"
							color="primary"
							className={classes.saveButton}
							xs={12}
							sm={8}
							md={4}
							disabled={!isFormFilled}
							onClick={submitHandler}
						>
							Change Password
						</Button>
					</Grid>
				</Grid>
			</Grid>
			{!mobile && (
				<Grid item xs={5}>
					<img
						src={resetPasswordImage}
						alt="reset password"
						className={classes.resetPasswordImage}
					/>
				</Grid>
			)}
		</Grid>
	);
};

export default ResetPassword;
