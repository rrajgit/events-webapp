import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";
import { GALLERY_DATA } from "@/utils/Constants";

export default function specificPage({ params }) {
	const query = params.slug; // event url is the params.slug
	return (
		<>
			<Header />

			<Cards prefixUrl={"/details/"} data={GALLERY_DATA[query]} />
			<Footer />
		</>
	);
}
