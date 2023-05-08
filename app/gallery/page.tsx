import ImageModal from "@/components/ImageModal";
import { Navbar } from "@/components/Navbar";

export default function Gallery() {
	return (
		<>
			<Navbar />
			<main className="m-10 flex justify-center">
				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
					style={{ gap: "30px 10%" }}
				>
					<ImageModal />
					<ImageModal />
					<ImageModal />
					<ImageModal />
				</div>
			</main>
		</>
	);
}
