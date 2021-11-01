// Dependencies
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

// Components
import { BottomNavigation, BottomNavigationAction, Avatar } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import TurnedInIcon from "@material-ui/icons/TurnedIn";

const MobileBottomBar = () => {
	const { username, profilePicture } = useSelector(state => state.auth, shallowEqual);
	const location = useLocation();
	const history = useHistory();
	const classes = useStyles();
	const [menu, setMenu] = useState(location.pathname);

	useEffect(() => {
		setMenu(location.pathname);
	}, [location]);

	const navigateHandler = (event, newMenu) => {
		setMenu(newMenu);
		window.scrollTo({ top: 0, behavior: "auto" });
	};

	return (
		<BottomNavigation value={menu} onChange={navigateHandler} className={classes.bottomNavigation}>
			<BottomNavigationAction
				icon={menu === "/" ? <HomeIcon /> : <HomeOutlinedIcon />}
				showLabel={false}
				classes={{ root: classes.menuSelected }}
				onClick={() => history.replace("/")}
				value="/"
			/>
			<BottomNavigationAction
				icon={
					menu === "/social" ? (
						<SearchIcon classes={{ root: classes.searchIcon }} />
					) : (
						<SearchOutlinedIcon />
					)
				}
				showLabel={false}
				classes={{ root: classes.menuSelected }}
				onClick={() => history.replace("/social")}
				value="/social"
			/>
			<BottomNavigationAction
				icon={menu === "/favorites" ? <TurnedInIcon /> : <TurnedInNotIcon />}
				showLabel={false}
				classes={{ root: classes.menuSelected }}
				onClick={() => history.replace("/favorites")}
				value="/favorites"
			/>
			<BottomNavigationAction
				icon={
					<Avatar
						src={profilePicture}
						className={`${classes.profilePicture} ${
							menu === `/${username}` ? classes.menuSelectedAvatar : null
						}`}
					/>
				}
				classes={{ root: classes.menuSelected }}
				showLabel={false}
				onClick={() => history.replace(`/${username}`)}
				value={`/${username}`}
			/>
		</BottomNavigation>
	);
};

export default MobileBottomBar;
