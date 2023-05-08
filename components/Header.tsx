"use client";
import Carousel from "./Carousel";
import { Navbar } from "./Navbar";

export const Header = () => {
	const images = [
		"https://infinityhospitalitygroup.com/wp-content/uploads/2020/05/IH_Home-page_9.jpg",
		"https://infinityhospitalitygroup.com/wp-content/uploads/2020/05/IH_Home-page_11.jpg",
	];
	return (
		<>
			<Navbar />
			<Carousel images={images} />
		</>
	);
};
