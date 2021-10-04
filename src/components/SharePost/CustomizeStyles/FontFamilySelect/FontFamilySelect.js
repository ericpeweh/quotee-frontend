// Components
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setFontFamily } from "../../../../store/slices/canvasSlice";
import { FormControl, Grid, InputLabel, Select, MenuItem } from "@material-ui/core";

// Utils
import { changeFontFamily } from "../../../../utils/canvasEditor";
import FONTS from "../../../../utils/importAllFonts";

// Styles
import useStyles from "./styles";

const FontFamilySelect = () => {
	const canvas = useSelector(state => state.canvas, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const fontFamilyChangeHandler = fontFamily => {
		dispatch(setFontFamily(fontFamily));
	};

	return (
		<FormControl variant="outlined" size="small" component={Grid} item xs={8}>
			<InputLabel id="quotesFontFamily">Font Family</InputLabel>
			<Select
				labelId="quotesFontFamily"
				label="Font Family"
				value={canvas.fontFamily}
				className={classes.fontFamilySelect}
				onChange={event => {
					changeFontFamily(event.target.value, canvas, fontFamilyChangeHandler);
				}}
			>
				{FONTS.map((font, index) => (
					<MenuItem
						value={font.family}
						selected={font.family === canvas.fontFamily}
						key={font.family}
						style={{ fontFamily: font.family }}
					>
						{font.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default FontFamilySelect;
