// Components
import { Tabs, Tab, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

// Styles
import useStyles from "./styles";

const TabsSelection = ({ currentTab, onChangeTab }) => {
	const classes = useStyles();

	return (
		<Grid item xs={12} md={2}>
			<Tabs
				value={currentTab}
				onChange={onChangeTab}
				orientation="vertical"
				indicatorColor="primary"
				className={classes.tabs}
				classes={{ flexContainerVertical: classes.flexContainer, indicator: classes.indicator }}
			>
				<Tab
					label="Account"
					component={Link}
					to={`/settings/account`}
					classes={{ root: classes.settingTab }}
					value="account"
				/>
				<Tab
					label="Security"
					component={Link}
					to={`/settings/security`}
					classes={{ root: classes.settingTab }}
					value="security"
				/>
				<Tab
					label="Preferences"
					component={Link}
					to={`/settings/preferences`}
					classes={{ root: classes.settingTab }}
					value="preferences"
				/>
				<Tab
					label="Help"
					component={Link}
					to={`/settings/help`}
					classes={{ root: classes.settingTab }}
					value="help"
				/>
			</Tabs>
		</Grid>
	);
};

export default TabsSelection;
