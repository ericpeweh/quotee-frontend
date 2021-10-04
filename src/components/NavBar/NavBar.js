// Dependencies
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

// Components
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import OthersMenu from "./OthersMenu/OthersMenu";
import SiteLogo from "./SiteLogo/SiteLogo";
import UserBadge from "./UserBadge/UserBadge";
import { Drawer, Divider } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const NavBar = () => {
	const [navigation, setNavigation] = useState("/");
	const location = useLocation();
	const classes = useStyles();

	useEffect(() => {
		setNavigation(location.pathname);
	}, [location]);

	const navigationChangeHandler = newNavigation => {
		setNavigation(newNavigation);
		window.scrollTo({ top: 0, behavior: "auto" });
	};

	return (
		<Drawer variant="permanent" anchor="left" classes={{ paper: classes.navbar }}>
			<SiteLogo />
			<Divider light variant="middle" />
			<ProfileMenu setNavigation={navigationChangeHandler} navigation={navigation} />
			<OthersMenu setNavigation={navigationChangeHandler} navigation={navigation} />
			<Divider light variant="middle" />
			<UserBadge />
		</Drawer>
	);
};

export default NavBar;
