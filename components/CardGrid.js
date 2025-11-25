import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const cardsData = [
  { id: 1, title: "Card 1", img: "/assets/placeholder.png" },
  { id: 2, title: "Card 2", img: "/assets/placeholder.png" },
  { id: 3, title: "Card 3", img: "/assets/placeholder.png" },
  { id: 4, title: "Card 4", img: "/assets/placeholder.png" },
  { id: 5, title: "Card 5", img: "/assets/placeholder.png" },
  { id: 6, title: "Card 6", img: "/assets/placeholder.png" },
  { id: 7, title: "Card 7", img: "/assets/placeholder.png" },
  { id: 8, title: "Card 8", img: "/assets/placeholder.png" },
];
function CardGrid() {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => setVisibleCount((prev) => prev + 4);

  return (
    <div className="px-4 py-10 lg:px-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {cardsData.slice(0, visibleCount).map((card) => (
          <div
            key={card.id}
            className="relative w-full overflow-hidden bg-white shadow-md aspect-square lg:aspect-auto lg:h-[650px] rounded-xl"
          >
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-[linear-gradient(359.99deg,rgba(21,52,72,0.8)_1.62%,rgba(21,52,72,0)_65.37%)]" />

            <div className="absolute p-4 bottom-6 left-6">
              <h3 className="text-lg font-medium">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < cardsData.length && (
        <div className="flex justify-center w-full mt-6">
          <button
            onClick={loadMore}
            className="px-6 py-3 text-white uppercase rounded-lg bg-yellow hover:bg-yellow-600 max-w-max"
          >
            Carica altri
          </button>
        </div>
      )}
    </div>
  );
}

export default CardGrid;
