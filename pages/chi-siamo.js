import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import MetricsCountdown from "@/components/MetricsCountdown.js/MetricsCountdown";
import Team from "@/components/Sections/Team/Team";
import HeroPage from "@/components/layout/HeroPage";
import Head from "next/head";

function ChiSiamo({ onHeroFinished }) {
  useEffect(() => {
    setTimeout(() => {
      onHeroFinished?.(); // fa comparire la navbar
    }, 2000);
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/icon1.png" />
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Edilarte Piracci" />
        <link rel="manifest" href="/manifest" />
        <title>
          Edilarte Piracci | La vostra casa, come l’avete immaginata
        </title>
        <meta
          name="description"
          content="Da 50 anni una realtà unica dove tradizione, innovazione e ricerca dei brand di eccellenza sul mercato si incontrano per dare forma alla casa dei tuoi sogni."
        />
        <meta name="author" content="Edilarte Piracci" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Edilarte Piracci | La vostra casa, come l’avete immaginata"
        />

        <meta
          property="og:description"
          content="Da 50 anni una realtà unica dove tradizione, innovazione e ricerca dei brand di eccellenza sul mercato si incontrano per dare forma alla casa dei tuoi sogni."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="edilartepiracci.com
"
        />
        <meta
          property="twitter:url"
          content="https://www.edilartepiracci.com
/"
        />
        <meta
          name="twitter:title"
          content="Edilarte Piracci | La vostra casa, come l’avete immaginata"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <HeroPage
        title="Da oltre 50 anni, <br />  
<strong>passione che veste gli spazi</strong>"
        paragraph="Una realtà dove esperienza generazionale, dedizione al lavoro, ascolto del cliente e ricerca dell’eccellenza rendono <strong>ogni spazio un progetto unico</strong>."
        link="/"
        linkName="Prenota un appuntamento"
        backgroundClass="bg-[url('/assets/hero_chisiamo.webp')]"
      />
      {/* <MetricsCountdown /> */}
      <div className="px-4 pb-10 lg:py-20 lg:px-6">
        <div className="grid justify-center grid-cols-1 gap-10 lg:grid-cols-2 min-h-[40vh]">
          <div>
            <h2 className="mb-6 text-3xl font-semibold leading-tight text-black lg:text-5xl ">
              La nostra storia
            </h2>
            <p className="text-black lg:text-xl">
              Tutto inizia con Padre Piracci, il più piccolo di quattro
              fratelli. Vendeva carbonella con lo zio, poi l’autotrasporto, poi
              il primo magazzino nel 1968. Nel 1978 la rivendita prende forma.
              Nel 1992 la famiglia perde il fondatore, ma i figli — ventiduenni,
              sostenuti dalla madre — non mollano: trasformano la rivendita
              in showroom, aggiornano esposizioni, selezionano nuovi fornitori.
              Oggi Edilarte Piracci è il punto di riferimento per chi
              vuole qualità, progettazione e assistenza nel tempo.
            </p>
          </div>
          <div className="relative aspect-square lg:aspect-video lg:h-full">
            <Image
              src="/assets/placeholder.png"
              alt="La nostra missione"
              fill
              className="object-cover w-full h-full "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-6 my-10 lg:gap-10 lg:px-10">
        <h2 className="text-3xl font-medium lg:text-4xl fxl:text-[50px] ">
          I nostri valori
        </h2>
        <div className="grid grid-cols-2 gap-3 my-10 gap-y-6 lg:my-0 lg:gap-20 lg:grid-cols-5">
          <div className="flex flex-col items-center justify-center w-full text-center ">
            <Icon
              icon="material-symbols-light:star-shine-rounded"
              width="120px"
              height="120px"
              className="text-yellow w-14 h-14 lg:w-[100px] lg:h-[100px] "
            />
            <h3 className="mt-4 mb-2 text-lg font-medium lg:text-2xl text-blue">
              Qualità certificata
            </h3>
            <p className="text-sm text-black lg:text-lg ">
              materiali che mantengono ciò che promettono.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full text-center">
            <Icon
              icon="material-symbols-light:clock-loader-40"
              width="120px"
              height="120px"
              className="text-yellow w-14 h-14 lg:w-[100px] lg:h-[100px] "
            />
            <h3 className="mt-4 mb-2 text-lg font-medium lg:text-2xl text-blue">
              Sartorialità
            </h3>
            <p className="text-sm text-black lg:text-lg ">
              progettiamo come se fosse casa nostra.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full text-center ">
            <Icon
              icon="material-symbols-light:person-celebrate-rounded"
              width="120px"
              height="120px"
              className="text-yellow w-14 h-14 lg:w-[100px] lg:h-[100px] "
            />
            <h3 className="mt-4 mb-2 text-lg font-medium lg:text-2xl text-blue">
              Professionalità
            </h3>
            <p className="text-sm text-black lg:text-lg ">
              competenza tecnica, chiarezza, rispetto dei tempi.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full text-center ">
            <Icon
              icon="material-symbols-light:person-celebrate-rounded"
              width="120px"
              height="120px"
              className="text-yellow w-14 h-14 lg:w-[100px] lg:h-[100px] "
            />
            <h3 className="mt-4 mb-2 text-lg font-medium lg:text-2xl text-blue">
              Esclusività
            </h3>
            <p className="text-sm text-black lg:text-lg ">
              fornitori e collezioni introvabili nelle rivendite comuni.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full text-center ">
            <Icon
              icon="material-symbols-light:person-celebrate-rounded"
              width="120px"
              height="120px"
              className="text-yellow w-14 h-14 lg:w-[100px] lg:h-[100px] "
            />
            <h3 className="mt-4 mb-2 text-lg font-medium lg:text-2xl text-blue">
              Assistenza nel tempo
            </h3>
            <p className="text-sm text-black lg:text-lg ">
              quando serve, ci siamo.
            </p>
          </div>
        </div>
      </div>
      <Team />
      <div className="px-6 pb-10 lg:p-10">
        <div className="grid justify-center grid-cols-1 gap-10 lg:grid-cols-2 min-h-[35vh]">
          <div className="flex flex-col justify-between h-full gap-10">
            <div>
              <h2 className="mb-6 text-3xl font-semibold leading-tight text-black lg:text-5xl ">
                Non ti lasciamo mai solo
              </h2>
              <p className="text-black lg:text-xl">
                Le garanzie del produttore sono l’inizio. La differenza è
                avere noi come partner: se si rompe un componente, ti troviamo
                il ricambio originale e ti assistiamo nella sostituzione.
              </p>
            </div>

            <div className="flex flex-wrap items-end justify-between w-full gap-y-6">
              <p>Hai bisogno di assistenza?</p>
              <Link
                href="/"
                className="uppercase w-full lg:w-fit bg-yellow text-white px-[20px] py-[20px] text-center text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5"
              >
                chiama
              </Link>
            </div>
          </div>
          <div className="relative h-full aspect-square lg:aspect-auto">
            <Image
              src="/assets/placeholder.png"
              alt="La nostra missione"
              fill
              className="object-cover w-full h-full "
            />
          </div>
        </div>
      </div>
      {/* <Banner /> */}
      {/* <div className="w-full min-h-[20svh] lg:min-h-[20vh] bg-gradient-to-r from-[#DDD2C0] to-yellow px-4 py-6 lg:py-10 lg:px-10 sticky top-[calc(100svh-20svh)] lg:top-[calc(100vh-20vh)] z-50 flex flex-col lg:flex-row  items-center lg:justify-between gap-4"> */}
      <div className="w-full bg-gradient-to-r from-[#DDD2C0] to-yellow px-4 py-6 lg:py-10 lg:px-10  flex flex-col lg:flex-row  items-center lg:justify-between gap-4">
        {/* wrapper testo */}
        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-[28px] fxl:text-[42px] text-white leading-none font-medium">
            Affidati alla nostra consulenza in showroom
          </h2>
          <p className="text-[15px] fxl:text-[21px] text-white leading-none">
            Qualità certificata, fornitori esclusivi, consulenza sartoriale
          </p>
        </div>

        <div className="flex items-center w-full gap-2 lg:w-fit">
          {" "}
          <Link
            href="/"
            className="uppercase bg-blue text-white px-[10px] py-[20px] text-center text-[0.7rem] lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5 w-full lg:max-w-max"
          >
            prenota
          </Link>
          <Link
            href="/"
            className="uppercase border border-white text-white px-[10px] py-[20px] text-center text-[0.73rem] lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5 w-full lg:max-w-max"
          >
            scopri come funziona
          </Link>
        </div>
      </div>
    </>
  );
}

export default ChiSiamo;
