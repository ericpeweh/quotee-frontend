import { makeStyles } from "@material-ui/core";

import bannerImage from "../../../../../images/NEWS.webp";

const useStyles = makeStyles(theme => ({
	newsBannerCard: {
		backgroundImage: `url(${bannerImage})`,
		filter: "brightness(92%)",
		height: "180px",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "bottom",
		backgroundSize: "cover",
		borderRadius: "15px",
		color: "white",
		textShadow: "0 1px 5px rgba(0, 0, 0, 1)",
		textTransform: "uppercase",
		boxShadow: "2px 3px 5px rgb(0 0 0 / 20%)"
	},
	newsTitle: {
		[theme.breakpoints.down("md")]: {
			fontSize: "1rem"
		}
	},
	newsButton: {
		backgroundColor: "rgba(255,255,255,0.6)",
		borderRadius: "15px",
		marginTop: theme.spacing(1.5),
		"&:hover": {
			backgroundColor: "#f3f3f3"
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "0.7rem"
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.5rem"
		}
	},
	installed: {
		backgroundColor: "#f3f3f3 !important",
		color: "#969696 !important"
	},
	newsDescription: {
		fontSize: "0.8rem",
		textTransform: "capitalize"
	}
}));

export default useStyles;
