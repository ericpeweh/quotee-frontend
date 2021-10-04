// Dependencies
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
	fullNameChange,
	descriptionChange,
	phoneNumberChange
} from "../../../../../store/slices/settingSlice";
import { updateUserProfile } from "../../../../../actions/users";
import { openModal, closeModal, resetUpdate } from "../../../../../store/slices/settingSlice";

// Components
import CenterModal from "../../../../UI/CenterModal/CenterModal";
import MuiPhoneNumber from "material-ui-phone-number";
import { Grid, TextField, Button, Typography, Chip } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";

const AccountForm = () => {
	const username = useSelector(state => state.auth.username);
	const {
		fullName,
		description,
		email,
		phoneNumber,
		isModalOpen,
		modalMessage,
		updateProfileStatus
	} = useSelector(state => state.settings, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const submitHandler = () => {
		const userData = { fullName, phoneNumber, description, username };

		dispatch(resetUpdate());
		dispatch(updateUserProfile(userData));
		dispatch(openModal());
	};

	return (
		<Grid component="form" container className={classes.form}>
			<CenterModal
				text={modalMessage}
				type={updateProfileStatus === "succeeded" ? "success" : "error"}
				onClose={() => dispatch(closeModal())}
				open={isModalOpen}
			/>
			<Grid item className={classes.inputContainer} container spacing={2}>
				<Grid item xs={12} md={6}>
					<Typography className={classes.noEditLabel}>Username</Typography>
					<Typography className={classes.noEditValue}>{username}</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography className={classes.noEditLabel}>Email address</Typography>
					<Typography className={classes.noEditValue}>
						{email}
						<Chip
							size="small"
							component="span"
							icon={<VerifiedUserOutlinedIcon className={classes.verifiedIcon} />}
							label="Verified"
							className={classes.verifiedBadge}
						/>
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						label="Full name"
						value={fullName}
						variant="outlined"
						size="small"
						className={classes.textField}
						onChange={e => dispatch(fullNameChange(e.target.value))}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<MuiPhoneNumber
						defaultCountry="id"
						variant="outlined"
						size="small"
						label="Phone Number"
						value={phoneNumber}
						onChange={number => dispatch(phoneNumberChange(number))}
						className={classes.textField}
						fullWidth
						regions={"asia"}
						disableAreaCodes
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Description"
						value={description}
						variant="outlined"
						size="small"
						className={classes.textField}
						onChange={e => dispatch(descriptionChange(e.target.value))}
						fullWidth
						multiline
						rows={3}
					/>
				</Grid>
				<Grid item container justifyContent="flex-end">
					<Button
						component={Grid}
						item
						variant="contained"
						color="primary"
						className={classes.saveButton}
						xs={12}
						sm={7}
						md={4}
						onClick={submitHandler}
					>
						Save changes
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AccountForm;
