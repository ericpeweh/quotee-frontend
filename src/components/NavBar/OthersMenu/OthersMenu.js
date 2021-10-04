// Components
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

// Icons
import ArchiveIcon from "@material-ui/icons/Archive";
import SettingsIcon from "@material-ui/icons/Settings";
import DraftsIcon from "@material-ui/icons/Drafts";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";

// Styles
import useStyles from "./styles";

const iconsSelected = [<ArchiveIcon />, <SettingsIcon />, <DraftsIcon />];
const icons = [<ArchiveOutlinedIcon />, <SettingsOutlinedIcon />, <DraftsOutlinedIcon />];
const links = ["/archived", "/settings/account", "/draft"];
const lists = ["Archived", "Settings", "Draft"];

const OthersMenu = ({ setNavigation, navigation }) => {
	const classes = useStyles();
	const isOnSettings = navigation.split("/").includes("settings");

	return (
		<Box className={classes.linkContainer}>
			<Typography color="textSecondary" className={classes.menuTitle}>
				<Box letterSpacing={2} component="span">
					OTHERS
				</Box>
			</Typography>
			<List>
				{lists.map((text, index) => (
					<ListItem
						button
						key={text}
						className={classes.listItem}
						component={Link}
						to={links[index]}
						onClick={e => setNavigation(e.target.textContent)}
						replace
					>
						<ListItemIcon
							className={
								navigation === links[index] ||
								(isOnSettings && links[index] === "/settings/account")
									? classes.selectedIcon
									: ""
							}
						>
							{index !== 1
								? navigation === links[index]
									? iconsSelected[index]
									: icons[index]
								: ""}
							{index === 1 ? (isOnSettings ? iconsSelected[index] : icons[index]) : ""}
						</ListItemIcon>
						<ListItemText
							className={
								navigation === links[index] ||
								(isOnSettings && links[index] === "/settings/account")
									? classes.selectedText
									: ""
							}
							classes={{ primary: classes.listText }}
							primary={text}
						/>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default OthersMenu;
