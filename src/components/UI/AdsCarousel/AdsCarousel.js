// Dependencies
import React from "react";
import { useDispatch } from "react-redux";
import { adsCarouselChange, setCarousel } from "../../../store/slices/modalSlice";

// Components
import Carousel from "react-material-ui-carousel";
import { ButtonBase } from "@material-ui/core";

// Styles
import useStyles from "./styles";

// Images
import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jpg";

const AdsCarousel = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const items = [
		{
			id: "cloversy1",
			title: "Cloversy.id | Custom Painting",
			text: "Ayo miliki sepatu custom paint dengan design Mario Bros. Gimana ? nostalgia kah dengan karakter- karakter tersebut. Miliki segera dengan menghubungi kami melalui instagram kami.",
			image: banner1,
			url: "https://www.instagram.com/cloversy.id/"
		},
		{
			id: "quotee1",
			title: "Quotee | Share your quotes",
			text: "Create your own quotes, share and motivate people. Be as free as you can to express your thoughts in your quotes",
			image: banner2,
			url: "https://www.instagram.com/quoteequotes.xyz/"
		}
	];

	const clickHandler = item => {
		dispatch(adsCarouselChange(true));
		dispatch(setCarousel({ title: item.title, text: item.text, image: item.image, url: item.url }));
	};

	return (
		<Carousel indicators={false} className={classes.navButton}>
			{items.map(item => (
				<ButtonBase key={item.id} className={classes.buttonBase} onClick={() => clickHandler(item)}>
					<img src={item.image} alt="banner" className={classes.banner} />
				</ButtonBase>
			))}
		</Carousel>
	);
};

export default AdsCarousel;
