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

  /* ================= SEZIONI ================= */

  const firstSection = allCats.slice(0, 4); // hero + 4
  const secondSection = allCats.slice(4, 7); // 2 rettangoli + 1 quadrato
  const thirdSection = allCats.slice(7, 12); // 4 sinistra + 1 destra
  const extraSections = allCats.slice(12);

  const extraGroups = [];
  for (let i = 0; i < extraSections.length; i += 3) {
    extraGroups.push(extraSections.slice(i, i + 3));
  }
  /* ================= LIGHTBOX ================= */

  const openCategory = (categoryName, slideIndex = 0) => {
    const slides = categories[categoryName]?.images?.length
      ? categories[categoryName].images
      : [{ src: "/assets/placeholder.png" }];

    if (!slides.length) return;

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
        <meta property="twitter:domain" content="edilartepiracci.com" />
        <meta
          name="twitter:image"
          content={`https://edilartepiracci.vercel.app${ispirazioni.head.seoImg}`}
        />
        <meta
          property="twitter:url"
          content={`https://www.edilartepiracci.com/ispirazioni/${slug}`}
        />
        <meta name="twitter:title" content={ispirazioni.head.seoTitle} />
      </Head>

      {/* ================= HERO + 4 ================= */}
      <section
        className="grid grid-cols-1 lg:grid-cols-4 grid-rows-2
        gap-4 px-4 pt-6 mx-auto mt-14 lg:mt-20 lg:px-6 
        xl:h-[calc(100vh-100px)]"
      >
        {" "}
        {/* HERO */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col justify-center h-[400px] lg:h-full col-span-1 p-6 overflow-hidden rounded-xl md:col-span-2 lg:col-span-2 lg:row-span-2"
        >
          <Image
            src={ispirazioni.hero.img}
            fill
            alt="hero"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(359.99deg,rgba(21,52,72,0.8)_1.62%,rgba(21,52,72,0)_65.37%)]" />

          <div className="relative z-10 flex flex-col justify-between h-full text-white">
            <p className="text-xs tracking-wide uppercase bg-yellow max-w-max py-[5px] px-[20px] rounded-full">
              Ispirazioni
            </p>

            <div>
              <h1
                dangerouslySetInnerHTML={{ __html: ispirazioni.hero.title }}
                className="mt-3 text-3xl leading-none md:text-5xl"
              />
              <p className="mt-4 text-sm">{ispirazioni.hero.description}</p>
            </div>
          </div>
        </motion.div>
        {/* 4 CARD */}
        {firstSection.map((cat, i) => (
          <motion.div
            key={cat}
            custom={i}
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative overflow-hidden cursor-pointer h-[400px] lg:h-full lg:aspect-auto rounded-xl"
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

            <div className="absolute bottom-2 right-2">
              <Icon
                icon="ph:browsers-simple-light"
                width="32"
                height="32"
                className="text-white"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* ================= SEZIONE 2 ================= */}
      <section
        ref={section2Ref}
        className="grid grid-cols-1 gap-4 px-6 py-6 md:grid-cols-2"
      >
        {/* sinistra — 2 rettangoli */}
        <div className="flex flex-col gap-4">
          {secondSection.slice(0, 2).map((cat, i) => (
            <motion.div
              key={cat}
              custom={i}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-40 overflow-hidden cursor-pointer md:h-72 rounded-xl"
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
              <div className="absolute bottom-2 right-2">
                <Icon
                  icon="ph:browsers-simple-light"
                  width="32"
                  height="32"
                  className="text-white"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* destra — quadrato alto uguale */}
        {secondSection[2] && (
          <motion.div
            custom={2}
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[calc(2*10rem+1rem)] md:h-[calc(2*18rem+1rem)] rounded-xl overflow-hidden cursor-pointer"
            onClick={() => openCategory(secondSection[2], 0)}
          >
            <Image
              src={
                categories[secondSection[2]]?.images?.[0]?.src ||
                "/assets/placeholder.png"
              }
              fill
              alt=""
              className="object-cover"
            />
            <div className="absolute bottom-2 right-2">
              <Icon
                icon="ph:browsers-simple-light"
                width="32"
                height="32"
                className="text-white"
              />
            </div>
          </motion.div>
        )}
      </section>

      {/* ================== SEZIONE 3 ================== */}
      <section className="grid grid-cols-1 gap-4 px-6 pb-10 md:grid-cols-2">
        {/* SINISTRA → 4 immagini 2x2 */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {thirdSection.slice(0, 4).map((cat, i) => (
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
              <div className="absolute bottom-2 right-2">
                <Icon
                  icon="ph:browsers-simple-light"
                  width="32"
                  height="32"
                  className="text-white"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* DESTRA → immagine grande */}
        {thirdSection[4] && (
          <motion.div
            custom={4}
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-full min-h-[300px] md:min-h-full rounded-xl overflow-hidden cursor-pointer"
            onClick={() => openCategory(thirdSection[4], 0)}
          >
            <Image
              src={
                categories[thirdSection[4]]?.images?.[0]?.src ||
                "/assets/placeholder.png"
              }
              fill
              alt=""
              className="object-cover"
            />
            <div className="absolute bottom-2 right-2">
              <Icon
                icon="ph:browsers-simple-light"
                width="32"
                height="32"
                className="text-white"
              />
            </div>
          </motion.div>
        )}
      </section>
      {extraGroups.map((group, gIndex) => (
        <section
          key={gIndex}
          className="grid grid-cols-1 gap-4 px-6 pb-10 md:grid-cols-2"
        >
          {/* DESTRA — quadrato */}
          {group[2] && (
            <motion.div
              custom={2}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[calc(2*10rem+1rem)] md:h-[calc(2*18rem+1rem)] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openCategory(group[2], 0)}
            >
              <Image
                src={
                  categories[group[2]]?.images?.[0]?.src ||
                  "/assets/placeholder.png"
                }
                fill
                alt=""
                className="object-cover"
              />

              <div className="absolute bottom-2 right-2">
                <Icon
                  icon="ph:browsers-simple-light"
                  width="32"
                  height="32"
                  className="text-white"
                />
              </div>
            </motion.div>
          )}
          {/* SINISTRA — 2 rettangoli */}
          <div className="flex flex-col gap-4">
            {group.slice(0, 2).map((cat, i) => (
              <motion.div
                key={cat}
                custom={i}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative h-40 overflow-hidden cursor-pointer md:h-72 rounded-xl"
                onClick={() => openCategory(cat, 0)}
              >
                <Image
                  src={
                    categories[cat]?.images?.[0]?.src ||
                    "/assets/placeholder.png"
                  }
                  fill
                  alt=""
                  className="object-cover"
                />

                <div className="absolute bottom-2 right-2">
                  <Icon
                    icon="ph:browsers-simple-light"
                    width="32"
                    height="32"
                    className="text-white"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
      {/* ================= LIGHTBOX ================= */}
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

      {/* ================= FORNITORI ================= */}
      <div className="flex flex-col justify-center w-full mt-10 overflow-hidden bg-sand lg:gap-10">
        <h2 className="px-4 py-6 text-3xl font-medium lg:text-4xl lg:px-10">
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

/* ================= STATIC PROPS ================= */

export async function getStaticProps(context) {
  const { params, locale } = context;

  let obj = ispirazioniIT;
  let targetObj = obj?.ispirazioni?.ispirazionePage?.[params?.title];

  return {
    props: {
      ispirazioni: targetObj,
      slug: params?.title,
    },
  };
}

/* ================= STATIC PATHS ================= */

export async function getStaticPaths({ locale }) {
  let obj = ispirazioniIT;

  const ispirazioni = Object.keys(obj?.ispirazioni?.ispirazionePage);

  const paths = ispirazioni.map((el) => ({
    params: { title: el },
    locale: "it",
  }));

  return {
    paths,
    fallback: false,
  };
}
