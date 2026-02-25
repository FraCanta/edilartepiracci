import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CtaPrimary from "./layout/Cta/CtaPrimary";
import { motion, AnimatePresence } from "framer-motion";
const cardsData = [
  {
    id: 1,
    sub: [{ posto: "Bagno" }, { stile: "Stile" }],
    title: "Vieste - 2023",
    desc: "Palette [stile] con [materiali/finitura] per un risultato coerente e funzionale.",
    img: "/assets/placeholder.png",
  },
  {
    id: 2,
    sub: [{ posto: "Living" }, { stile: "Stile" }],

    title: "Foggia - 2023",
    desc: "Palette [stile] con [materiali/finitura] per un risultato coerente e funzionale.",
    img: "/assets/placeholder.png",
  },
  {
    id: 3,
    sub: [{ posto: "Bagno" }, { stile: "Stile" }],
    title: "Vico del Gargano - 2021",
    desc: "Palette [stile] con [materiali/finitura] per un risultato coerente e funzionale.",
    img: "/assets/placeholder.png",
  },
  {
    id: 4,
    sub: [{ posto: "Living" }, { stile: "Stile" }],
    title: "Rodi Garganico - 2020",
    desc: "Palette [stile] con [materiali/finitura] per un risultato coerente e funzionale.",
    img: "/assets/placeholder.png",
  },
  {
    id: 5,
    sub: [{ posto: "Cucina" }, { stile: "Stile" }],
    title: "Vieste - 2022",
    desc: "Palette [stile] con [materiali/finitura] per un risultato coerente e funzionale.",
    img: "/assets/placeholder.png",
  },
  {
    id: 6,
    sub: [{ posto: "Bagno" }, { stile: "Stile" }],
    title: "Peschici - 2022",
    desc: "Palette [stile] con [materiali/finitura] per un risultato coerente e funzionale.",
    img: "/assets/placeholder.png",
  },
];

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-") // spazi → trattini
    .replace(/[^\w\-]+/g, "") // rimuove simboli strani
    .replace(/\-\-+/g, "-") // evita doppi trattini
    .trim();
function CardGrid() {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => setVisibleCount((prev) => prev + 4);

  return (
    <div className="px-4 py-10 lg:px-10" id="progetti">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <AnimatePresence>
          {cardsData.slice(0, visibleCount).map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              layout
            >
              <Link
                href={`/progetti/${slugify(card.title)}`}
                passHref
                key={card.id}
              >
                <div className="relative w-full overflow-hidden bg-white rounded-sm shadow-md h-[400px] lg:h-[600px] fxl:h-[800px]">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(359.99deg,rgba(21,52,72,0.8)_1.62%,rgba(21,52,72,0)_65.37%)]" />
                  <div className="absolute p-4 lg:top-6 lg:left-4">
                    <div className="flex flex-wrap gap-4 font-medium text-white uppercase">
                      {card.sub.map((item, index) => (
                        <p
                          className="text-sm lg:text-base tracking-wide uppercase bg-yellow max-w-max py-[5px] px-[20px] rounded-full"
                          key={index}
                        >
                          {item.posto || item.stile}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="absolute left-0 p-4 bottom-6 lg:bottom-10 lg:left-6">
                    <h2 className="text-3xl font-medium text-white lg:text-5xl fxl:text-6xl">
                      {card.title}
                    </h2>
                    <p className="max-w-lg mt-4 text-white lg:text-lg fxl:text-2xl">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-6 my-6 lg:gap-10">
        <CtaPrimary link="/consulenza">Prenota la tua consulenza</CtaPrimary>
        {visibleCount < cardsData.length && (
          <button
            onClick={loadMore}
            className="uppercase justify-center flex w-full lg:w-fit items-end border border-yellow text-yellow px-[20px] py-[20px] xl:px-10 text-center text-base xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5"
          >
            Carica altri
          </button>
        )}
      </div>
    </div>
  );
}

export default CardGrid;
