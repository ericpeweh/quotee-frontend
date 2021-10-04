// Dependencies
import React from "react";
import { useMediaQuery } from "react-responsive";

// Components
import { Grid, ImageList, ImageListItem, ButtonBase, Typography } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import images from "../../../utils/importSelectionImages";

const ImagePicker = ({ onClickImage }) => {
	const classes = useStyles();
	// Media queries for responsive
	const isSmallerScreen = useMediaQuery({ maxWidth: 1270 });
	const isTabletScreen = useMediaQuery({ maxWidth: 930 });
	const isMobile = useMediaQuery({ maxWidth: 820 });

	return (
		<Grid
			className={classes.imagesContainers}
			xs={isSmallerScreen ? (isTabletScreen ? (isMobile ? 12 : 5) : 6) : 8}
			item
		>
			{isMobile && (
				<>
					<Typography variant="body2" className={classes.editorTitle}>
						Select an image
					</Typography>
				</>
			)}
			<ImageList
				rowHeight={180}
				className={classes.imageList}
				cols={isSmallerScreen ? (isTabletScreen ? (isMobile ? 3 : 2) : 4) : 5}
			>
				{images.map((image, index) => (
					<ImageListItem
						key={index}
						component={ButtonBase}
						onClick={() => onClickImage(image.default)}
						className={classes.imageListItem}
					>
						<img
							src={image.default}
							alt={image}
							className={classes.image}
							height="400"
							width="250"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Grid>
	);
};

export default React.memo(ImagePicker);
