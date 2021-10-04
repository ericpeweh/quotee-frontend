// Components
import { Menu, MenuItem } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const MenuElement = ({ anchorEl, onCloseMenu, menuLists = [] }) => {
	const classes = useStyles();

	return (
		<Menu
			classes={{ paper: classes.menu }}
			anchorEl={anchorEl}
			open={Boolean(anchorEl)}
			onClose={onCloseMenu}
		>
			{menuLists.map(list => (
				<MenuItem
					key={list.text}
					dense
					classes={{ root: classes.menuItem }}
					className={classes[list.color]}
					{...(list.action && { onClick: list.action })}
				>
					{list.icon && list.icon}
					{list.icon && "\u00A0\u00A0"}
					{list.text}
				</MenuItem>
			))}
		</Menu>
	);
};

export default MenuElement;
