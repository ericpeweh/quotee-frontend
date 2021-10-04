// Dependencies
import { useSelector } from "react-redux";

// Components
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

// Icons
import HomeIcon from "@material-ui/icons/Home";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import GroupIcon from "@material-ui/icons/Group";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FormatQuoteOutlinedIcon from "@material-ui/icons/FormatQuoteOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";

// Styles
import useStyles from "./styles";

const lists = ["Home", "My Post", "Social", "Favorites"];
const icons = [
	<HomeOutlinedIcon />,
	<FormatQuoteOutlinedIcon />,
	<GroupOutlinedIcon />,
	<TurnedInNotIcon />
];
const iconsSelected = [<HomeIcon />, <FormatQuoteIcon />, <GroupIcon />, <TurnedInIcon />];

const ProfileMenu = ({ setNavigation, navigation }) => {
	const username = useSelector(state => state.auth.username);
	const classes = useStyles();

	const links = ["/", `/${username}`, "/social", "/favorites"];

	return (
		<Box className={classes.linkContainer}>
			<Typography color="textSecondary" className={classes.menuTitle}>
				<Box letterSpacing={2} component="span">
					ACCOUNT
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
						onClick={e => setNavigation(links[index])}
						replace
					>
						<ListItemIcon className={navigation === links[index] ? classes.selectedIcon : ""}>
							{navigation === links[index] ? iconsSelected[index] : icons[index]}
						</ListItemIcon>
						<ListItemText
							className={navigation === links[index] ? classes.selectedText : ""}
							classes={{ primary: classes.listText }}
							primary={text}
						/>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default ProfileMenu;
