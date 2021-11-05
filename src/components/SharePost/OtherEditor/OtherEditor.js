// Components
import Preferences from "./Preferences/Preferences";
import ImageFilters from "./ImageFilters/ImageFilters";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from "@material-ui/core";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

// Styles
import useStyles from "./styles";

const OtherEditor = () => {
	const classes = useStyles();

	return (
		<Grid item>
			<div className={classes.root}>
				<Accordion classes={{ root: classes.accordion, expanded: classes.expanded }}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Grid container direction="row" alignItems="center">
							<SettingsOutlinedIcon fontSize="large" className={classes.icon} />
							<Typography className={classes.accordionTitle}>Others</Typography>
						</Grid>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container direction="row">
							<Preferences />
							<ImageFilters />
						</Grid>
					</AccordionDetails>
				</Accordion>
			</div>
		</Grid>
	);
};

export default OtherEditor;
