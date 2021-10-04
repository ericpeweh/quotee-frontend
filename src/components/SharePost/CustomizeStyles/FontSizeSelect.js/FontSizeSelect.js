// Dependencies
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setFontSize } from "../../../../store/slices/canvasSlice";

// Components
import { FormControl, Grid, InputLabel, Select, MenuItem } from "@material-ui/core";

// Utils
import { changeFontSize } from "../../../../utils/canvasEditor";

// Styles
import useStyles from "./styles";

// Helpers variables
const fontSizes = [18, 19, 20, 21, 22, 23, 24];

const FontSizeSelect = () => {
	const canvas = useSelector(state => state.canvas, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const fontSizeChangeHandler = fontSize => {
		dispatch(setFontSize(fontSize));
		changeFontSize(fontSize, canvas, canvas.setFontSize);
	};

	return (
		<FormControl
			variant="outlined"
			size="small"
			component={Grid}
			item
			// className={classes.formControl}
			fullWidth
			md={2}
			sm={4}
			xs={4}
		>
			<InputLabel id="quoteFontSize">Size</InputLabel>
			<Select
				labelId="quoteFontSize"
				label="Size"
				value={canvas.fontSize}
				className={classes.fontSizeSelect}
				onChange={e => fontSizeChangeHandler(e.target.value)}
			>
				{fontSizes.map(size => (
					<MenuItem value={size} selected={size === canvas.fontSize} key={size}>
						{size}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default FontSizeSelect;
