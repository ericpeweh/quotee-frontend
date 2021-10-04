// Dependencies
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
	usernameChange,
	emailChange,
	passwordChange,
	passwordConfirmChange,
	showPasswordChange,
	firstNameChange,
	lastNameChange,
	modalOpen,
	modalClose
} from "../../../store/slices/loginRegisterSlice";
import { signUp } from "../../../actions/users";

// Components
import CenterModal from "../../UI/CenterModal/CenterModal";
import { Link } from "react-router-dom";
import { Grid, Typography, Checkbox, FormControlLabel, TextField, Button } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import Logo from "../../../images/logo-sub.webp";
import LogoDarkMode from "../../../images/logo-sub-dm.webp";

const RegisterForm = ({ mobile }) => {
	const {
		username,
		password,
		email,
		passwordConfirm,
		showPassword,
		firstName,
		lastName,
		status,
		message,
		isModalOpen
	} = useSelector(state => state.loginRegister, shallowEqual);
	const theme = useSelector(state => state.theme.theme);
	const dispatch = useDispatch();
	const classes = useStyles();

	const isDarkMode = theme === "dark";

	const formIsFilled = firstName && lastName && email && username && password && passwordConfirm;

	const submitHandler = () => {
		if (formIsFilled) {
			const newUser = { username, password, email, passwordConfirm, firstName, lastName };
			dispatch(modalOpen());
			dispatch(signUp(newUser));
		}
	};

	// Status modal
	const statusContent = (
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
				component="form"
				container
				className={classes.registerForm}
				item
				xs={12}
				sm={6}
				direction="column"
				justifyContent="center"
				alignItems="center"
			>
				<img src={isDarkMode ? LogoDarkMode : Logo} alt="Quotee logo" className={classes.logo} />
				{statusContent}
				{!mobile && <Typography className={classes.registerTitle}>Sign Up</Typography>}
				<Grid item className={classes.inputContainer} container spacing={2}>
					<Grid item xs={12} md={6}>
						<TextField
							label="First name"
							variant="outlined"
							value={firstName}
							onChange={event => dispatch(firstNameChange(event.target.value))}
							size="small"
							className={classes.textField}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Last name"
							variant="outlined"
							value={lastName}
							onChange={event => dispatch(lastNameChange(event.target.value))}
							size="small"
							className={classes.textField}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Email address"
							variant="outlined"
							value={email}
							onChange={event => dispatch(emailChange(event.target.value))}
							size="small"
							className={classes.textField}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Username"
							variant="outlined"
							value={username}
							onChange={event => dispatch(usernameChange(event.target.value))}
							size="small"
							className={classes.textField}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Password"
							variant="outlined"
							type={showPassword ? "text" : "password"}
							value={password}
							onChange={event => dispatch(passwordChange(event.target.value))}
							size="small"
							className={classes.textField}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Confirm password"
							variant="outlined"
							type={showPassword ? "text" : "password"}
							value={passwordConfirm}
							onChange={event => dispatch(passwordConfirmChange(event.target.value))}
							size="small"
							className={classes.textField}
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
					<Grid item container>
						<Button
							component={Grid}
							item
							variant="contained"
							color="primary"
							className={classes.registerButton}
							onKeyPress={e => {
								if (e.code === "Enter") {
									submitHandler();
								}
							}}
							xs={12}
							onClick={submitHandler}
							disabled={!formIsFilled}
						>
							Register
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Typography className={classes.signInText}>
							Already have an account?&nbsp;
							<Link to="/login" className={classes.signInLink}>
								Sign in
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default RegisterForm;
