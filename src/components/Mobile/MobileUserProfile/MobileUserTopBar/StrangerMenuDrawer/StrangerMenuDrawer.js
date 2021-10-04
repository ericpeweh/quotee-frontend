// Dependencies
import { useDispatch } from "react-redux";
import { snackbarMessageChange, snackbarChange } from "../../../../../store/slices/modalSlice";

// Components
import {
	SwipeableDrawer,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";

const StrangerMenuDrawer = ({ open, toggler }) => {
	const dispatch = useDispatch();
	const classes = useStyles();

	const copyProfileURLHandler = () => {
		navigator.clipboard.writeText(window.location.href);
		toggler(false)();
		dispatch(snackbarMessageChange("Profile URL copied."));
		dispatch(snackbarChange(true));
	};

	const reportAccountHandler = () => {
		console.log("Report account!");
		toggler(false)();
	};

	return (
		<SwipeableDrawer
			anchor="bottom"
			open={open}
			onClose={toggler(false)}
			onOpen={toggler(true)}
			disableDiscovery
			disableBackdropTransition
		>
			<Divider className={classes.divider} />
			<List>
				<ListItem button onClick={copyProfileURLHandler}>
					<ListItemIcon>
						<FileCopyOutlinedIcon />
					</ListItemIcon>
					<ListItemText primary="Copy Profile URL" />
				</ListItem>
				<ListItem button onClick={reportAccountHandler} className={classes.report}>
					<ListItemIcon>
						<ErrorOutlineOutlinedIcon color="error" />
					</ListItemIcon>
					<ListItemText primary="Report Account" />
				</ListItem>
			</List>
		</SwipeableDrawer>
	);
};

export default StrangerMenuDrawer;
