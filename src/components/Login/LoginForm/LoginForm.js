// Dependencies
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
	usernameChange,
	passwordChange,
	showPasswordChange,
	modalOpen,
	modalClose,
	resetModal,
	resetPasswordChange,
	resetPasswordModalChange
} from "../../../store/slices/loginRegisterSlice";
import { signIn, requestResetPassword } from "../../../actions/users";
import { auth } from "../../../actions/auth";
import { signOutReset } from "../../../store/slices/authSlice";

// Components
import CenterModal from "../../UI/CenterModal/CenterModal";
import { Link } from "react-router-dom";
import { Grid, Typography, Checkbox, FormControlLabel, TextField, Button } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import Logo from "../../../images/logo-sub.webp";
import LogoDarkMode from "../../../images/logo-sub-dm.webp";

const LoginForm = ({ mobile }) => {
	const {
		username,
		password,
		showPassword,
		message,
		status,
		isModalOpen,
		isResetPasswordModal,
		redirect,
		resetPassword,
		resetPasswordMessage,
		resetPasswordStatus
	} = useSelector(state => state.loginRegister, shallowEqual);
	const { status: authStatus } = useSelector(state => state.auth, shallowEqual);
	const theme = useSelector(state => state.theme.theme);
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	const isDarkMode = theme === "dark";

	// Reset messages when mount
	useEffect(() => {
		if (authStatus !== "loading" && authStatus !== "succeeded" && authStatus !== "failed")
			dispatch(resetModal());
	}, [dispatch, authStatus]);

	const submitHandler = () => {
		if (username && password) {
			dispatch(modalOpen());
			dispatch(signOutReset());
			dispatch(signIn({ usernameOrEmail: username, password }));
		}
	};

	useEffect(() => {
		if (redirect && message && authStatus !== "loading") {
			dispatch(auth());
			dispatch(resetModal());
			setTimeout(() => {
				history.replace("/");
			}, 1500);
		}
	}, [authStatus, dispatch, history, message, redirect]);

	const openForgotPassword = () => {
		dispatch(resetPasswordChange(true));
	};

	const cancelHandler = () => {
		dispatch(resetPasswordChange(false));
	};

	const resetPasswordHandler = () => {
		dispatch(resetPasswordModalChange(true));
		dispatch(requestResetPassword({ usernameOrEmail: username }));
	};

	// Status modal
	const statusContent = resetPassword ? (
		<CenterModal
			text={resetPasswordMessage}
			type={resetPasswordStatus === "failed" ? "error" : "success"}
			onClose={() => dispatch(resetPasswordModalChange(false))}
			open={isResetPasswordModal}
		/>
	) : (
		<CenterModal
			text={message}
			type={status === "failed" ? "error" : "success"}
			onClose={() => dispatch(modalClose())}
			open={isModalOpen}
		/>
	);

	return (
		<>
			<Grid
				container
				className={classes.loginForm}
				item
				xs={12}
				sm={6}
				direction="column"
				justifyContent="center"
				alignItems="center"
			>
				<img src={isDarkMode ? LogoDarkMode : Logo} alt="Quotee logo" className={classes.logo} />
				{statusContent}
				{!mobile && (
					<Typography className={classes.loginTitle}>
						{resetPassword ? "Reset Password" : "Sign In"}
					</Typography>
				)}
				<Grid
					item
					className={classes.inputContainer}
					container
					spacing={2}
					component="form"
					onSubmit={e => e.preventDefault()}
				>
					<Grid item xs={12}>
						<TextField
							label="Username or Email"
							variant="outlined"
							value={username}
							onChange={event =>
								dispatch(usernameChange(event.target.value.replace(/[^a-zA-Z0-9@. ]/g, "")))
							}
							size="small"
							onKeyPress={e => {
								if (e.code === "Enter") {
									return resetPassword ? resetPasswordHandler() : null;
								}
							}}
							className={classes.textField}
							fullWidth
						/>
					</Grid>
					{!resetPassword && (
						<>
							<Grid item xs={12}>
								<TextField
									label="Password"
									variant="outlined"
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={event => dispatch(passwordChange(event.target.value))}
									onKeyPress={e => {
										if (e.code === "Enter") {
											resetPassword ? resetPasswordHandler() : submitHandler();
										}
									}}
									size="small"
									className={classes.textField}
									fullWidth
								/>
								<Typography className={classes.forgotPassword} onClick={openForgotPassword}>
									Forgot Password?
								</Typography>
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
							<Grid item container>
								<Button
									component={Grid}
									item
									variant="contained"
									color="secondary"
									className={classes.loginButton}
									xs={12}
									disabled={username === "" || password === ""}
									onClick={submitHandler}
								>
									{status === "loading" ? "Loading..." : "Login"}
								</Button>
							</Grid>
						</>
					)}
					{resetPassword && (
						<>
							<Grid item container>
								<Button
									component={Grid}
									item
									variant="contained"
									color="secondary"
									className={classes.loginButton}
									xs={12}
									disabled={username === ""}
									onClick={resetPasswordHandler}
								>
									Send Request
								</Button>
							</Grid>
							<Grid item container>
								<Button
									component={Grid}
									item
									variant="contained"
									className={classes.cancelButton}
									xs={12}
									onClick={cancelHandler}
								>
									Cancel
								</Button>
							</Grid>
						</>
					)}
					{!resetPassword && (
						<Grid item xs={12}>
							<Typography className={classes.signUpText}>
								Don't have an account?&nbsp;
								<Link to="/register" className={classes.signUpLink}>
									Sign up
								</Link>
							</Typography>
						</Grid>
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default LoginForm;
