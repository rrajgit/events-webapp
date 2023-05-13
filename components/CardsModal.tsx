import Link from "next/link";
import Card from "./Card";
import CardModal from "./CardModal";

export default function Cards({ data }) {
	return (
		<main className="m-10 flex justify-center">
			<div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
				style={{ gap: "30px 10%" }}
			>
				{data.map((card) => {
					return (
						<>
							<CardModal card={card} />
						</>
					);
				})}
			</div>
		</main>
	);
}
