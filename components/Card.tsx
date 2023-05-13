import Link from "next/link";

export default function Card({ card }) {
	return (
		<div className="card w-80 glass">
			<figure className="h-80">
				<img src={card.image_URL} alt="car!" />
			</figure>

			<div className="card-body">
				<h2 className="card-title">{card.eventName}</h2>
			</div>
		</div>
	);
}
