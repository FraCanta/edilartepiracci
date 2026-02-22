"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";
import ispirazioniIT from "../../public/locales/it/ispirazioni.json";
import Head from "next/head";

function IspirazionePage({ ispirazioni, slug }) {
  const [currentSlides, setCurrentSlides] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [index, setIndex] = useState(null);

  const heroRef = useRef(null);
  const section2Ref = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isSection2InView = useInView(section2Ref, {
    once: true,
    margin: "-100px",
  });

  const categories = ispirazioni.masonry || {};
  const allCats = Object.keys(categories);

  const firstSection = allCats.slice(0, 6);
  const secondSection = allCats.slice(6, 10);
  const lastBig = allCats[10];
  const wideCard = allCats[allCats.length - 1];

  // Apri il Lightbox
  const openCategory = (categoryName, slideIndex = 0) => {
    const slides = categories[categoryName]?.images.length
      ? categories[categoryName].images
      : [{ src: "/assets/placeholder.png" }];
    if (slides.length === 0) return; // blocca se non ci sono immagini
    setCurrentCategory(categoryName);
    setCurrentSlides(slides);
    setIndex(slideIndex);
  };

  const close = () => setIndex(null);

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/icon1.png" />
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Edilarte Piracci" />
        <link rel="manifest" href="/manifest" />
        <title>{ispirazioni.head.seoTitle}</title>
        <meta name="description" content={ispirazioni.head.seoDescription} />
        <meta name="author" content="Edilarte Piracci" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ispirazioni.head.seoTitle} />
        <meta
          property="og:image"
          content={`https://edilartepiracci.vercel.app${ispirazioni.head.seoImg}`}
        />
        <meta
          property="og:description"
          content={ispirazioni.head.seoDescription}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="edilartepiracci.com
"
        />
        <meta
          name="twitter:image"
          content={`https://edilartepiracci.vercel.app${ispirazioni.head.seoImg}`}
        />
        <meta
          property="twitter:url"
          content={`https://www.edilartepiracci.com/ispirazioni/${slug}`}
        />
        <meta name="twitter:title" content={ispirazioni.head.seoTitle} />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* ================== HERO ================== */}
      <section className="grid grid-cols-1 gap-4 px-4 pt-6 mx-auto mt-20 lg:px-6 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col justify-center h-[400px] col-span-1 p-6 overflow-hidden 2xl:p-10 rounded-xl md:col-span-2 lg:col-span-2 lg:row-span-2 md:h-auto"
        >
          <Image
            src={ispirazioni.hero.img}
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
              <h1
                dangerouslySetInnerHTML={{ __html: ispirazioni.hero.title }}
                className="mt-3 text-3xl md:text-5xl 2xl:text-[60px]  leading-none"
              ></h1>
              <p className="mt-4 text-sm 2xl:text-2xl">
                {ispirazioni.hero.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================== GALLERY MANSORY ================== */}
        {firstSection.map((cat, i) => (
          <motion.div
            key={cat}
            custom={i}
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`relative overflow-hidden cursor-pointer rounded-xl ${
              i < 4
                ? "aspect-square"
                : i === 4
                  ? "h-48 md:h-64 lg:col-span-3"
                  : "h-48 md:h-64"
            }`}
            onClick={() => openCategory(cat, 0)}
          >
            <Image
              src={
                categories[cat]?.images?.[0]?.src || "/assets/placeholder.png"
              }
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
          </motion.div>
        ))}
      </section>

      {/* ================== SEZIONE 2 ================== */}
      <section
        ref={section2Ref}
        className="grid grid-cols-1 gap-4 px-6 py-6 mx-auto md:grid-cols-2 lg:grid-cols-4"
      >
        <div className="grid grid-cols-1 col-span-1 gap-4 md:grid-cols-2 lg:col-span-2">
          {secondSection.map((cat, i) => (
            <motion.div
              key={cat}
              custom={i}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative overflow-hidden cursor-pointer aspect-square rounded-xl"
              onClick={() => openCategory(cat, 0)}
            >
              <Image
                src={
                  categories[cat]?.images?.[0]?.src || "/assets/placeholder.png"
                }
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
            </motion.div>
          ))}

          {wideCard && (
            <motion.div
              custom={4}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-40 col-span-1 overflow-hidden cursor-pointer md:h-48 md:col-span-2 rounded-xl"
              onClick={() => openCategory(wideCard, 0)}
            >
              <Image
                src={
                  categories[wideCard]?.images?.[0]?.src ||
                  "/assets/placeholder.png"
                }
                fill
                alt=""
                className="object-cover"
              />
            </motion.div>
          )}
        </div>

        <motion.div
          custom={5}
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-xl overflow-hidden cursor-pointer min-h-[300px] md:min-h-[500px] lg:min-h-[700px] col-span-1 lg:col-span-2"
          onClick={() => openCategory(lastBig, 0)}
        >
          <Image
            src={
              categories[lastBig]?.images?.[0]?.src || "/assets/placeholder.png"
            }
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
        </motion.div>
      </section>

      {/* LIGHTBOX */}
      {currentSlides.length > 0 && index !== null && (
        <Lightbox
          slides={currentSlides}
          index={index}
          onClose={close}
          categoryName={categories[currentCategory]?.label}
          logos={
            ispirazioni.masonry[currentCategory]?.logos?.length
              ? ispirazioni.masonry[currentCategory].logos
              : ["/assets/placeholder.png"]
          }
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

export async function getStaticProps(context) {
  const { params, locale } = context;
  let obj;

  switch (locale) {
    case "it":
      obj = ispirazioniIT;
      break;

    default:
      obj = ispirazioniIT;
      break;
  }
  let targetObj = obj?.ispirazioni?.ispirazionePage?.[params?.title];

  const arr = Object.keys(obj?.ispirazioni?.ispirazionePage);

  const filteredOthers = arr
    .filter((el) => el !== params?.title) // Exclude the current service
    .map((el) => {
      return {
        name: obj?.ispirazioni?.ispirazionePage?.[el]?.title,
        img: obj?.ispirazioni?.ispirazionePage?.[el]?.img,
        descrizione: obj?.ispirazioni?.ispirazionePage?.[el]?.description,
        seoTitle: obj?.ispirazioni?.ispirazionePage?.[el]?.head?.seoTitle,
        seoDesc: obj?.ispirazioni?.ispirazionePage?.[el]?.head?.seoDescription,

        link: el,
      };
    });

  return {
    props: {
      ispirazioni: targetObj,
      slug: params?.title,
    },
  };
}

export async function getStaticPaths({ locale }) {
  let obj;

  switch (locale) {
    case "it":
      obj = ispirazioniIT;
      break;

    default:
      obj = ispirazioniIT;
      break;
  }

  const ispirazioni = Object.keys(obj?.ispirazioni?.ispirazionePage);

  const pathIt = ispirazioni?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "it",
    };
  });
  const paths = pathIt;
  return {
    paths,
    fallback: false,
  };
}
