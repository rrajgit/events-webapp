import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";
import { HOME_PAGE_CARDS_DATA } from "@/utils/Constants";

export default function Home() {
	return (
		<>
			<Header />
			<Cards prefixUrl="/gallery/" data={HOME_PAGE_CARDS_DATA} />
			<Footer />
		</>
	);
}
