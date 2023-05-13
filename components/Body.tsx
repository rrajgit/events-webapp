"use client";
import Link from "next/link";
import HOME_PAGE_CARDS_DATA from "./../public/Constants";
import Card from "./Card";

const Body = () => {
  return (
    <main className="m-10 flex justify-center">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ gap: "30px 10%" }}
      >
        {HOME_PAGE_CARDS_DATA[0].Events.Cards.map((card) => {
          return (
            <>
              <Link href={"/" + card.eventName}>
                <Card card={card} />
              </Link>
            </>
          );
        })}
      </div>
    </main>
  );
};

export default Body;
