// Components
import TextSettings from "./TextSettings/TextSettings";
import TextPositions from "./TextPositions/TextPositions";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from "@material-ui/core";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextFieldsOutlinedIcon from "@material-ui/icons/TextFieldsOutlined";

// Styles
import useStyles from "./styles";

const TextEditor = ({ canvas }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Accordion classes={{ root: classes.accordion }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Grid container direction="row" alignItems="center">
						<TextFieldsOutlinedIcon fontSize="large" className={classes.icon} />
						<Typography className={classes.accordionTitle}>Customize Text</Typography>
					</Grid>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container direction="row">
						<TextSettings />
						<TextPositions canvas={canvas} />
					</Grid>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default TextEditor;
