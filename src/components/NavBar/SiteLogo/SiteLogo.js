// Dependencies
import { useSelector } from "react-redux";

// Components
import { Link } from "react-router-dom";

// Images
import Logo from "../../../images/logo-sub.webp";
import LogoDarkMode from "../../../images/logo-sub-dm.webp";

// Styles
import useStyles from "./styles.js";

const SiteLogo = () => {
	const theme = useSelector(state => state.theme.theme);
	const classes = useStyles();

	const isDarkMode = theme === "dark";

	return (
		<Link to="/" className={classes.iconContainer}>
			<img
				src={isDarkMode ? LogoDarkMode : Logo}
				alt="quotee logo"
				className={classes.icon}
				width="130"
				height="45"
			/>
		</Link>
	);
};

export default SiteLogo;
