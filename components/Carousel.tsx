"use client";
import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prevImage) => (prevImage + 1) % images.length);
		}, 30_000);

		return () => {
			clearInterval(interval);
		};
	}, [images.length]);

	return (
		<div className="w-full overflow-hidden h-32 sm:h-32 md:h-64 lg:h-96">
			<img
				src={images[currentImage]}
				alt={`Image ${currentImage}`}
				className="w-full"
			/>
		</div>
	);
};

export default Carousel;
