// Components
import FontFamilySelect from "./FontFamilySelect/FontFamilySelect";
import FontSizeSelect from "./FontSizeSelect.js/FontSizeSelect";
import ImageURLInput from "./ImageURLInput/ImageURLInput";
import ImageURLButton from "./ImageURLButton/ImageURLButton";
import ImageUpload from "./ImageUpload/ImageUpload";
import { Grid, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const CustomizeStyles = ({ generateQuotes }) => {
	const classes = useStyles();

	return (
		<>
			<Typography
				variant="body2"
				className={`${classes.editorTitle} ${classes.stylesAndOtherText}`}
			>
				Styles & Others
			</Typography>
			<Grid container className={classes.customizeStyles} spacing={1}>
				<FontFamilySelect />
				<FontSizeSelect />
				<ImageURLInput />
				<ImageURLButton generateQuotes={generateQuotes} />
				<ImageUpload generateQuotes={generateQuotes} />
			</Grid>
		</>
	);
};

export default CustomizeStyles;
