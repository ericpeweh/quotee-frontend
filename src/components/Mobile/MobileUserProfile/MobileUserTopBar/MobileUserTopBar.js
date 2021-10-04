// Dependencies
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { useSelector, shallowEqual } from "react-redux";
import { useState } from "react";

// Components
import MenuDrawer from "./MenuDrawer/MenuDrawer";
import StrangerMenuDrawer from "./StrangerMenuDrawer/StrangerMenuDrawer";
import ActionButtons from "./ActionButtons/ActionButtons";
import { Grid, Typography, IconButton } from "@material-ui/core";
import useStyles from "./styles";

// Icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const MobileUserTopBar = () => {
	const { username: authUsername } = useSelector(state => state.auth, shallowEqual);
	const { username } = useParams();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const history = useHistory();
	const classes = useStyles();

	const isUser = authUsername === username;

	const menuToggleHandler = type => event => {
		if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}
		setIsMenuOpen(type);
	};

	const backHandler = () => {
		history.goBack();
	};

	return (
		<>
			{isUser && <MenuDrawer open={isMenuOpen} toggler={menuToggleHandler} />}
			{!isUser && <StrangerMenuDrawer open={isMenuOpen} toggler={menuToggleHandler} />}
			<Grid
				container
				className={classes.mobileTopNavbar}
				direction="row"
				alignItems="center"
				justifyContent="center"
			>
				<Grid item xs={8} container alignItems="center" direction="row">
					{!isUser && (
						<IconButton size="small" className={classes.backButton} onClick={backHandler}>
							<ArrowBackIcon />
						</IconButton>
					)}
					<Typography variant="h6" className={classes.username}>
						{username}
					</Typography>
				</Grid>
				{isUser && <ActionButtons toggleHandler={menuToggleHandler} />}
				{!isUser && (
					<Grid item xs={4} container justifyContent="flex-end">
						<IconButton size="small" onClick={menuToggleHandler(true)}>
							<MoreVertIcon />
						</IconButton>
					</Grid>
				)}
			</Grid>
		</>
	);
};

export default MobileUserTopBar;
