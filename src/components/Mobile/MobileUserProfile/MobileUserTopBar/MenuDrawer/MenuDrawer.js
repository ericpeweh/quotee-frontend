// Dependencies
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../../../actions/auth";

// Components
import {
	SwipeableDrawer,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from "@material-ui/core";
import CenterSpinner from "../../../../UI/CenterSpinner/CenterSpinner";

// Styles
import useStyles from "./styles";

// Icons
import SettingsIcon from "@material-ui/icons/Settings";
import DraftsIcon from "@material-ui/icons/Drafts";
import ArchiveIcon from "@material-ui/icons/Archive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShareIcon from "@material-ui/icons/Share";
import CropFreeIcon from "@material-ui/icons/CropFree";

// Variables
const menus = ["Settings", "Archived", "Draft", "Share Account", "Find Friends", "Logout"];
const linkUrls = [
	"/settings/account",
	"/archived",
	"/draft",
	"/ericpeweh/qrcode",
	"/ericpeweh/qrscan",
	"/logout"
];
const icons = [
	<SettingsIcon />,
	<ArchiveIcon />,
	<DraftsIcon />,
	<ShareIcon />,
	<CropFreeIcon />,
	<ExitToAppIcon />
];

const MenuDrawer = ({ open, toggler }) => {
	const signOutLoading = useSelector(state => state.auth.signOutLoading);
	const dispatch = useDispatch();
	const classes = useStyles();

	const logoutHandler = () => {
		toggler(false)();
		dispatch(signOut());
	};

	return (
		<SwipeableDrawer
			anchor="bottom"
			open={open}
			onClose={toggler(false)}
			onOpen={toggler(true)}
			disableDiscovery
			disableBackdropTransition
			disableSwipeToOpen
		>
			<CenterSpinner open={signOutLoading} />

			<Divider className={classes.divider} />
			<List>
				{menus.map((menu, index) => (
					<ListItem
						button
						key={index}
						{...(index !== 5 && { component: Link, to: linkUrls[index] })}
						{...(index === 5 && { onClick: logoutHandler })}
					>
						<ListItemIcon>{icons[index]}</ListItemIcon>
						<ListItemText primary={menu} />
					</ListItem>
				))}
			</List>
		</SwipeableDrawer>
	);
};

export default MenuDrawer;
