// Components
import SettingsTitle from "../SettingsTitle/SettingsTitle";
import { Grid, Typography, Divider } from "@material-ui/core";

// Styles
import useStyles from "./styles";
import PointListItem from "./PointListItem/PointListItem";

const HelpTab = ({ currentTab }) => {
	const classes = useStyles();

	const tabContent =
		currentTab === "help" ? (
			<Grid item container className={classes.helpTab} direction="column">
				<SettingsTitle text="Help & Information" />
				<Typography variant="body2" className={classes.title}>
					About Quotee
				</Typography>
				<Divider />
				<PointListItem variant="body2" type="secondary" component="div">
					Share your quotes to motivate and search for quotes to get motivated!
				</PointListItem>
				<PointListItem variant="body2" type="secondary" component="div">
					Apps Version : 1.0.0
				</PointListItem>
				<PointListItem variant="body2" type="secondary" component="div">
					Apps created by{" "}
					<a
						href="https://www.instagram.com/ericpeweh"
						className={classes.link}
						target="_blank"
						rel="noreferrer"
					>
						ericpeweh
					</a>{" "}
					- &copy;2021
				</PointListItem>
				<PointListItem variant="body2" type="secondary">
					Illustrations designed by{" "}
					<a
						href="https://www.freepik.com/catalyststuff"
						className={classes.link}
						target="_blank"
						rel="noreferrer"
					>
						catalyststuff
					</a>
				</PointListItem>
				<PointListItem variant="body2" type="secondary" component="div">
					Images are taken from {"  "}
					<a href="https://unsplash.com/" className={classes.link} target="_blank" rel="noreferrer">
						unsplash
					</a>
				</PointListItem>
				<PointListItem variant="body2" type="secondary" component="div">
					Quotee is currently on "Testing", all of your data, quotes will be deleted and refreshed
					when testing periods ended.
				</PointListItem>
				<PointListItem variant="body2" type="secondary" component="div">
					Current features list:
					<ul>
						<li>Register & email Verification</li>
						<li>Persistent Login</li>
						<li>Forgot password, change password</li>
						<li>News & Ads Carousel</li>
						<li>Create quotes & drafts</li>
						<li>Download & share quotes</li>
						<li>Quotes image selection / external source</li>
						<li>Likes quotes</li>
						<li>Favorites quotes</li>
						<li>Delete, archive quotes</li>
						<li>User profile customization</li>
						<li>Search quotes & advanced</li>
						<li>Installable & push notifications</li>
						<li>Daily "Quotes of the day"</li>
						<li>User preferences (dark mode)</li>
						<li>Share account QR & discovers</li>
						<li>User preferences (dark mode)</li>
					</ul>
				</PointListItem>
				<Typography variant="body2" className={classes.title} component="div">
					Upcoming updates
				</Typography>
				<PointListItem variant="body2" type="primary" component="div">
					Planned:
					<ul>
						<li>Performance optimization</li>
						<li>Security optimization</li>
					</ul>
				</PointListItem>
				<PointListItem variant="body2" type="primary" component="div">
					On request:
					<ul>
						<li>Emoticon reaction to quotes</li>
						<li>Security optimization</li>
					</ul>
				</PointListItem>
				<a
					href="//www.dmca.com/Protection/Status.aspx?ID=f58c069d-09ce-4e9b-a1a3-92cb6962c710"
					target="_blank"
					rel="noreferrer"
					title="DMCA.com Protection Status"
					className="dmca-badge"
					style={{ paddingTop: 10 }}
				>
					<img
						src="https://images.dmca.com/Badges/dmca-badge-w250-5x1-06.png?ID=f58c069d-09ce-4e9b-a1a3-92cb6962c710"
						alt="DMCA.com Protection Status"
					/>
				</a>
				<script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></script>
			</Grid>
		) : (
			<></>
		);
	return { ...tabContent };
};

export default HelpTab;
