// Components
import { FormControl, FormControlLabel, Switch, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const Togglers = ({ title, subtitle, onChange, checked }) => {
	const classes = useStyles();

	return (
		<FormControl component="fieldset">
			<FormControlLabel
				value="start"
				control={<Switch color="primary" onChange={onChange} checked={checked} />}
				classes={{ labelPlacementStart: classes.labelPlacemenet, label: classes.label }}
				label={
					<>
						<Typography className={`${classes.title} ${classes.noSelect}`}>{title}</Typography>
						<Typography variant="body2" className={`${classes.subtitle} ${classes.noSelect}`}>
							{subtitle}
						</Typography>
					</>
				}
				labelPlacement="start"
			/>
		</FormControl>
	);
};

export default Togglers;
