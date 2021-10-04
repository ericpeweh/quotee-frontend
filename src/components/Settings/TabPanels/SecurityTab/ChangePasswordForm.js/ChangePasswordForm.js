// Dependencies
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
	resetUpdate,
	openModal,
	closeModal,
	currentPasswordChange,
	newPasswordChange,
	newPasswordConfirmChange,
	showPasswordChange
} from "../../../../../store/slices/settingSlice";
import { changePassword } from "../../../../../actions/users";

// Components
import CenterModal from "../../../../UI/CenterModal/CenterModal";
import { Grid, TextField, Button, FormControlLabel, Checkbox } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const ChangePasswordForm = () => {
	const {
		currentPassword,
		newPassword,
		newPasswordConfirm,
		isModalOpen,
		modalMessage,
		changePasswordStatus,
		showPassword
	} = useSelector(state => state.settings, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const isFormFilled = currentPassword && newPassword && newPasswordConfirm;

	const submitHandler = () => {
		const credentials = {
			currentPassword,
			newPassword,
			newPasswordConfirm
		};

		dispatch(resetUpdate());
		dispatch(openModal());
		dispatch(changePassword(credentials));
	};

	return (
		<Grid component="form" container>
			<CenterModal
				text={modalMessage}
				type={changePasswordStatus === "succeeded" ? "success" : "error"}
				onClose={() => dispatch(closeModal())}
				open={isModalOpen}
			/>
			<Grid item className={classes.inputContainer} container spacing={2}>
				<Grid item xs={12} md={7}>
					<TextField
						label="Current Password"
						type={showPassword ? "text" : "password"}
						variant="outlined"
						size="small"
						className={classes.textField}
						onChange={e => dispatch(currentPasswordChange(e.target.value))}
						value={currentPassword}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={7}>
					<TextField
						label="New Password"
						variant="outlined"
						type={showPassword ? "text" : "password"}
						size="small"
						className={classes.textField}
						onChange={e => dispatch(newPasswordChange(e.target.value))}
						value={newPassword}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={7}>
					<TextField
						label="New Password Confirmation"
						variant="outlined"
						type={showPassword ? "text" : "password"}
						size="small"
						className={classes.textField}
						onChange={e => dispatch(newPasswordConfirmChange(e.target.value))}
						value={newPasswordConfirm}
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
	);
};

export default ChangePasswordForm;
