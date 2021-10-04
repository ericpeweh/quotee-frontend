// Dependencies
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router";

// Components
import { Link } from "react-router-dom";
import { Grid, IconButton } from "@material-ui/core";

// Icons
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import MenuIcon from "@material-ui/icons/Menu";

const ActionButtons = ({ toggleHandler }) => {
	const { username } = useParams();
	const { username: authUsername } = useSelector(state => state.auth, shallowEqual);

	const isUser = username === authUsername;

	return (
		<Grid item container justifyContent="flex-end" xs={4} alignItems="center" spacing={1}>
			{isUser && (
				<Grid item>
					<IconButton size="small" component={Link} to="/create">
						<AddBoxOutlinedIcon />
					</IconButton>
				</Grid>
			)}
			<Grid item>
				<IconButton size="small" onClick={toggleHandler(true)}>
					<MenuIcon />
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default ActionButtons;
