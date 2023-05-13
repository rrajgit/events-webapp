import Link from "next/link";

export default function Card({ card }) {
  console.log(card);
  return (
    <div className="card w-96 glass">
      <figure className="h-80">
        <img src={card.Image_URL} alt="car!" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{card.eventName}</h2>
      </div>
    </div>
  );
}
