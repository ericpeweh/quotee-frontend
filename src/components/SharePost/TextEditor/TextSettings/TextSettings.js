// Dependencies
import { useSelector, useDispatch, shallowEqual } from "react-redux";

// Actions
import {
	changeAuthorFontColor,
	changeFontCase,
	changeFontFamily,
	changeFontSize,
	changeFontStyle,
	changeQuotesFontColor,
	changeTextAlign
} from "../../../../store/slices/canvasSlice";

// Components
import {
	Grid,
	Typography,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Tooltip,
	Divider,
	Radio,
	RadioGroup,
	FormControlLabel
} from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { withStyles } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Icons
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";

// Utils
import FONTS from "../../../../utils/importAllFonts";

const StyledToggleButtonGroup = withStyles(theme => ({
	grouped: {
		margin: theme.spacing(0.5),
		border: "none",
		"&:not(:first-child)": {
			borderRadius: theme.shape.borderRadius
		},
		"&:first-child": {
			borderRadius: theme.shape.borderRadius
		}
	}
}))(ToggleButtonGroup);

// Helpers variables
const fontSizes = [18, 19, 20, 21, 22, 23, 24];

const TextSettings = () => {
	const { fontFamily, fontSize, textAlign, fontStyle, quotesFontColor, authorFontColor, fontCase } =
		useSelector(state => state.canvas, shallowEqual);
	const dispatch = useDispatch();
	const classes = useStyles();

	const fontFamilyChangeHandler = e => {
		dispatch(changeFontFamily(e.target.value));
	};

	const fontSizeChangeHandler = e => {
		dispatch(changeFontSize(e.target.value));
	};

	const textAlignChangeHandler = (e, newValue) => {
		dispatch(changeTextAlign(newValue));
	};

	const fontStyleChangeHandler = (e, newValue) => {
		dispatch(changeFontStyle(newValue));
	};

	const quotesFontColorChangeHandler = e => {
		dispatch(changeQuotesFontColor(e.target.value));
	};

	const authorFontColorChangeHandler = e => {
		dispatch(changeAuthorFontColor(e.target.value));
	};

	const fontCaseChangeHandler = e => {
		dispatch(changeFontCase(e.target.value));
	};

	return (
		<Grid
			container
			item
			sm={12}
			md={6}
			className={classes.changeFontsContainer}
			justifyContent="center"
		>
			<Typography align="center" className={classes.title}>
				Font Family & Size
			</Typography>
			<Grid item container direction="row" alignItems="center" spacing={1}>
				<Grid item xs={9} className={classes.maxHeight}>
					<FormControl
						variant="outlined"
						size="small"
						fullWidth
						className={classes.selectFontFamily}
					>
						<InputLabel id="quotesFontFamily">Font Family</InputLabel>
						<Select
							labelId="quotesFontFamily"
							label="Font Family"
							value={fontFamily}
							className={classes.fontFamilySelect}
							onChange={fontFamilyChangeHandler}
						>
							{FONTS.map((font, index) => (
								<MenuItem
									value={font.family}
									selected={font.family === fontFamily}
									key={font.family}
									style={{ fontFamily: font.family }}
								>
									{font.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={3} className={classes.maxHeight}>
					<FormControl variant="outlined" size="small" className={classes.selectFontSize} fullWidth>
						<InputLabel id="quoteFontSize">Size</InputLabel>
						<Select
							labelId="quoteFontSize"
							label="Size"
							value={fontSize}
							className={classes.fontSizeSelect}
							onChange={fontSizeChangeHandler}
						>
							{fontSizes.map(size => (
								<MenuItem value={size} selected={size === fontSize} key={size}>
									{size}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
			<Typography align="center" className={classes.fontSettingsTitle}>
				Fonts Settings
			</Typography>
			<Grid container elevation={0} className={classes.buttonGroupContainer}>
				<StyledToggleButtonGroup
					className={classes.textAlignbuttonGroup}
					size="small"
					value={textAlign}
					exclusive
					onChange={textAlignChangeHandler}
					aria-label="text alignment"
				>
					<ToggleButton value="left" aria-label="left aligned">
						<FormatAlignLeftIcon />
					</ToggleButton>
					<ToggleButton value="center" aria-label="centered">
						<FormatAlignCenterIcon />
					</ToggleButton>
					<ToggleButton value="right" aria-label="right aligned">
						<FormatAlignRightIcon />
					</ToggleButton>
					<ToggleButton value="justify-center" aria-label="justified">
						<FormatAlignJustifyIcon />
					</ToggleButton>
				</StyledToggleButtonGroup>
				<Divider flexItem orientation="vertical" className={classes.divider} />
				<StyledToggleButtonGroup
					size="small"
					className={classes.fontStylebuttonGroup}
					value={fontStyle}
					onChange={fontStyleChangeHandler}
					aria-label="text formatting"
				>
					<ToggleButton value="bold" aria-label="bold">
						<FormatBoldIcon />
					</ToggleButton>
					<ToggleButton value="italic" aria-label="italic">
						<FormatItalicIcon />
					</ToggleButton>
					<ToggleButton value="underlined" aria-label="underlined">
						<FormatUnderlinedIcon />
					</ToggleButton>
				</StyledToggleButtonGroup>
				<Divider flexItem orientation="vertical" className={classes.centerDivider} />
				<StyledToggleButtonGroup className={classes.colorbuttonGroup}>
					<Tooltip title="Quotes color" arrow>
						<input
							type="color"
							id="favcolor"
							name="favcolor"
							className={classes.colorInput}
							value={quotesFontColor}
							onChange={quotesFontColorChangeHandler}
						/>
					</Tooltip>
					<Tooltip title="Author color" arrow>
						<input
							type="color"
							id="favcolor"
							name="favcolor"
							className={classes.colorInput}
							value={authorFontColor}
							onChange={authorFontColorChangeHandler}
						/>
					</Tooltip>
				</StyledToggleButtonGroup>
			</Grid>
			<Grid container direction="column">
				<Typography align="center" className={classes.fontSettingsTitle}>
					Change Case
				</Typography>
				<FormControl component="fieldset">
					<RadioGroup
						name="fontcase"
						value={fontCase}
						onChange={fontCaseChangeHandler}
						row
						className={classes.radioGroup}
					>
						<FormControlLabel
							value="default"
							control={<Radio />}
							label="Default"
							className={classes.radioButton}
						/>
						<FormControlLabel
							value="uppercase"
							control={<Radio />}
							label="Uppercase"
							className={classes.radioButton}
						/>
						<FormControlLabel
							value="lowercase"
							control={<Radio />}
							label="Lowercase"
							className={classes.radioButton}
						/>
					</RadioGroup>
				</FormControl>
			</Grid>
		</Grid>
	);
};

export default TextSettings;
