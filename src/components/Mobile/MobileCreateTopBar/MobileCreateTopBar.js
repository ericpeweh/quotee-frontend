// Dependencies
import { useState } from "react";
import { useLocation, useHistory } from "react-router";
import { shallowEqual, useSelector } from "react-redux";

// Components
import CreateDrawer from "./CreateDrawer/CreateDrawer";
import { Grid, IconButton, Typography } from "@material-ui/core";

// Icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// Styles
import useStyles from "./styles";

const MobileCreateTopBar = () => {
	const { quotes, tags } = useSelector(state => state.newQuotes, shallowEqual);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();

	// Get URL Params
	const getQuery = () => {
		return new URLSearchParams(location.search);
	};

	// Check is form create / form draft
	const draftId = getQuery().get("draftId");

	const menuToggleHandler = type => event => {
		if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}
		setIsMenuOpen(type);
	};

	// Back to menu handler (non-draft)
	const cancelHandler = () => {
		history.replace("/");
	};

	return (
		<>
			<CreateDrawer
				open={isMenuOpen}
				toggler={menuToggleHandler}
				draftId={draftId}
				getQuery={getQuery}
			/>
			<Grid container className={classes.topBar} alignItems="center">
				<Grid item>
					<IconButton
						{...(quotes && tags
							? { onClick: menuToggleHandler(true) }
							: { onClick: cancelHandler })}
					>
						<ArrowBackIcon />
					</IconButton>
				</Grid>
				<Grid item>
					<Typography variant="h6" className={classes.title}>
						Back To Menu
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default MobileCreateTopBar;
