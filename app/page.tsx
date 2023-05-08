import Card from "@/components/Card";
import { Header } from "@/components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<main className="m-10 flex justify-center">
				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
					style={{ gap: "30px 10%" }}
				>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</main>
		</>
	);
}
