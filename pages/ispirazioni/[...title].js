"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox"; // lightbox aggiornato con categoryName e loghi
import { Icon } from "@iconify/react";

function IspirazionePage() {
  const [currentSlides, setCurrentSlides] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [index, setIndex] = useState(null);

  // Categorie con immagini
  const categories = {
    bagno: [
      { src: "https://picsum.photos/900/900?1" },
      { src: "https://picsum.photos/900/900?2" },
      { src: "https://picsum.photos/900/900?3" },
    ],
    cucina: [
      { src: "https://picsum.photos/900/900?4" },
      { src: "https://picsum.photos/900/900?5" },
    ],
    soggiorno: [
      { src: "https://picsum.photos/900/900?6" },
      { src: "https://picsum.photos/900/900?7" },
    ],
    camera: [
      { src: "https://picsum.photos/900/900?8" },
      { src: "https://picsum.photos/900/900?9" },
    ],
    ingresso: [
      { src: "https://picsum.photos/900/900?10" },
      { src: "https://picsum.photos/900/900?11" },
    ],
    terrazzo: [
      { src: "https://picsum.photos/900/900?12" },
      { src: "https://picsum.photos/900/900?13" },
    ],
    giardino: [
      { src: "https://picsum.photos/900/900?14" },
      { src: "https://picsum.photos/900/900?15" },
    ],
    ufficio: [
      { src: "https://picsum.photos/900/900?16" },
      { src: "https://picsum.photos/900/900?17" },
    ],
    corridoio: [
      { src: "https://picsum.photos/900/900?18" },
      { src: "https://picsum.photos/900/900?19" },
    ],
    lavanderia: [
      { src: "https://picsum.photos/900/900?20" },
      { src: "https://picsum.photos/900/900?21" },
    ],
    ripostiglio: [
      { src: "https://picsum.photos/900/900?22" },
      { src: "https://picsum.photos/900/900?23" },
    ],
  };

  // Funzioni Lightbox
  const openCategory = (categoryName, slideIndex = 0) => {
    setCurrentCategory(categoryName);
    setCurrentSlides(categories[categoryName]);
    setIndex(slideIndex);
  };
  const close = () => setIndex(null);
  const next = () => setIndex((i) => (i + 1) % currentSlides.length);
  const prev = () =>
    setIndex((i) => (i - 1 + currentSlides.length) % currentSlides.length);

  return (
    <>
      {/* ================== HERO ================== */}
      <section className="grid grid-cols-1 gap-4 px-4 pt-6 mx-auto mt-20 lg:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="relative flex flex-col justify-center h-[400px] col-span-1 p-6 overflow-hidden 2xl:p-10 rounded-xl md:col-span-2 lg:col-span-2 lg:row-span-2 md:h-auto">
          <Image
            src="/assets/ispirazioni/bagno/mansory/mansory_1.jpg"
            fill
            alt="hero"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(359.99deg,rgba(21,52,72,0.8)_1.62%,rgba(21,52,72,0)_65.37%)]" />
          <div className="relative z-10 flex flex-col justify-between h-full text-white">
            <p className="text-xs tracking-wide uppercase 2xl:text-2xl bg-yellow max-w-max py-[5px] px-[20px] rounded-full">
              Ispirazioni
            </p>
            <div>
              <h1 className="mt-3 text-3xl md:text-5xl 2xl:text-[64px] font-medium leading-none">
                Il bagno che immagini, <br /> senza rinunce.
              </h1>
              <p className="mt-4 text-sm 2xl:text-2xl">
                Sanitari e rubinetteria di pregio, rivestimenti coordinati,
                rendering prima della scelta e ricambi garantiti nel tempo.
              </p>
            </div>
          </div>
        </div>

        {/* 4 quadrati */}
        {["bagno", "cucina", "soggiorno", "camera"].map((cat, i) => (
          <div
            key={cat}
            className="relative overflow-hidden cursor-pointer aspect-square rounded-xl"
            onClick={() => openCategory(cat, 0)}
          >
            <Image
              src={categories[cat][0].src}
              fill
              alt=""
              className="object-cover"
            />
            {/* Icona gallery sempre visibile */}
            <div className="absolute flex items-center justify-center w-6 h-6 rounded-full bottom-2 right-2">
              <Icon
                icon="ph:browsers-simple-light"
                width="32px"
                height="32px"
                className="text-white"
              />
            </div>
          </div>
        ))}

        {/* orizzontale */}
        <div
          className="relative h-48 overflow-hidden cursor-pointer md:h-64 lg:col-span-3 rounded-xl"
          onClick={() => openCategory("ingresso", 0)}
        >
          <Image
            src={categories.ingresso[0].src}
            fill
            alt=""
            className="object-cover"
          />
          <div className="absolute flex items-center justify-center w-6 h-6 rounded-full bottom-2 right-2">
            <Icon
              icon="ph:browsers-simple-light"
              width="32px"
              height="32px"
              className="text-white"
            />
          </div>
        </div>

        {/* rettangolo */}
        <div
          className="relative h-48 overflow-hidden cursor-pointer md:h-64 rounded-xl"
          onClick={() => openCategory("terrazzo", 0)}
        >
          <Image
            src={categories.terrazzo[0].src}
            fill
            alt=""
            className="object-cover"
          />
          <div className="absolute flex items-center justify-center w-6 h-6 rounded-full bottom-2 right-2">
            <Icon
              icon="ph:browsers-simple-light"
              width="32px"
              height="32px"
              className="text-white"
            />
          </div>
        </div>
      </section>

      {/* ================== SEZIONE 2 ================== */}
      <section className="grid grid-cols-1 gap-4 px-6 py-6 mx-auto md:grid-cols-2 lg:grid-cols-4">
        <div className="grid grid-cols-1 col-span-1 gap-4 md:grid-cols-2 lg:col-span-2">
          {["giardino", "ufficio", "corridoio", "lavanderia"].map((cat) => (
            <div
              key={cat}
              className="relative overflow-hidden cursor-pointer aspect-square rounded-xl"
              onClick={() => openCategory(cat, 0)}
            >
              <Image
                src={categories[cat][0].src}
                fill
                alt=""
                className="object-cover"
              />
              <div className="absolute flex items-center justify-center w-6 h-6 rounded-full bottom-2 right-2">
                <Icon
                  icon="ph:browsers-simple-light"
                  width="32px"
                  height="32px"
                  className="text-white"
                />
              </div>
            </div>
          ))}

          <div
            className="relative h-40 col-span-1 overflow-hidden cursor-pointer md:h-48 md:col-span-2 rounded-xl"
            onClick={() => openCategory("ripostiglio", 0)}
          >
            <Image
              src={categories.ripostiglio[0].src}
              fill
              alt=""
              className="object-cover"
            />
            <div className="absolute flex items-center justify-center w-6 h-6 rounded-full bottom-2 right-2">
              <Icon
                icon="ph:browsers-simple-light"
                width="32px"
                height="32px"
                className="text-white"
              />
            </div>
          </div>
        </div>

        <div
          className="relative rounded-xl overflow-hidden cursor-pointer min-h-[300px] md:min-h-[500px] lg:min-h-[700px] col-span-1 lg:col-span-2"
          onClick={() => openCategory("soggiorno", 0)}
        >
          <Image
            src={categories.soggiorno[0].src}
            fill
            alt=""
            className="object-cover"
          />
          <div className="absolute flex items-center justify-center w-6 h-6 rounded-full bottom-2 right-2">
            <Icon
              icon="ph:browsers-simple-light"
              width="32px"
              height="32px"
              className="text-white"
            />
          </div>
        </div>
      </section>

      {/* ================== LIGHTBOX ================== */}
      {currentSlides.length > 0 && (
        <Lightbox
          slides={currentSlides}
          index={index}
          onClose={close}
          onNext={next}
          onPrev={prev}
          categoryName={currentCategory}
        />
      )}

      <div className="flex flex-col justify-center w-full mt-10 overflow-hidden bg-sand lg:gap-10">
        <h2 className="px-4 py-6 text-3xl font-medium lg:text-4xl fxl:text-5xl lg:px-10">
          Alcuni nostri fornitori
        </h2>
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          className="elfsight-app-e0f72b47-65a7-4aae-8533-818355d85689 link_none"
          data-elfsight-app-lazy
        ></div>
      </div>
    </>
  );
}

export default IspirazionePage;
