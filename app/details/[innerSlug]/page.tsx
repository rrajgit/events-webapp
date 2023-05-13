import CardsModal from "@/components/CardsModal";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { LAST_PAGE_DATA } from "@/utils/Constants";

export default function ModalPage({ params }) {
	return (
		<>
			<Header />
			<CardsModal
				prefixUrl="/gallery/"
				data={LAST_PAGE_DATA[params.innerSlug]}
			/>
			<Footer />
		</>
	);
}
