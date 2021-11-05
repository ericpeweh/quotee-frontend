// Components
import ChangeImage from "./ChangeImage/ChangeImage";
import ImageSettings from "./ImageSettings/ImageSettings";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from "@material-ui/core";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";

// Styles
import useStyles from "./styles";

const ImageEditor = ({ canvas, mobile }) => {
	const classes = useStyles();

	return (
		<Grid item>
			<div className={classes.root}>
				<Accordion classes={{ root: classes.accordion }} defaultExpanded={!mobile}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Grid container direction="row" alignItems="center">
							<PanoramaOutlinedIcon fontSize="large" className={classes.icon} />
							<Typography className={classes.accordionTitle}>Customize Image</Typography>
						</Grid>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container direction="row">
							<ChangeImage canvas={canvas} mobile={mobile} />
							<ImageSettings canvas={canvas} />
						</Grid>
					</AccordionDetails>
				</Accordion>
			</div>
		</Grid>
	);
};

export default ImageEditor;
