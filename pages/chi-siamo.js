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
        <title>Edilarte Piracci | Una storia generazionale</title>
        <meta
          name="description"
          content="Da 50 anni vi guidiamo nella scelta degli elementi migliori per realizzare i vostri spazi, attraverso l’esplorazione di materiali, l’accostamento di forme, genere e colori."
        />
        <meta name="author" content="Edilarte Piracci" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Edilarte Piracci | Una storia generazionale"
        />
        <meta
          property="og:image"
          content="https://edilartepiracci.vercel.app/assets/hero_chisiamo.webp"
        />
        <meta
          property="og:description"
          content="Da 50 anni vi guidiamo nella scelta degli elementi migliori per realizzare i vostri spazi, attraverso l’esplorazione di materiali, l’accostamento di forme, genere e colori."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="edilartepiracci.com
"
        />
        <meta
          property="twitter:url"
          content="https://www.edilartepiracci.com/chi-siamo
/"
        />
        <meta
          name="twitter:image"
          content="https://edilartepiracci.vercel.app/assets/hero_chisiamo.webp"
        />
        <meta
          name="twitter:title"
          content="Edilarte Piracci | Una storia generazionale"
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
      <div className="grid items-center justify-center w-full grid-cols-1 gap-10 px-4 py-10 lg:gap-10 lg:grid-cols-2 lg:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl leading-tight text-black lg:text-5xl ">
            <span className="font-medium">La nostra </span>{" "}
            <span className="font-bold">storia</span>
          </h2>
          <p className="text-base text-black lg:text-lg fxl:text-xl">
            Nata agli inizi degli anni Settanta, l’azienda ha sempre unito
            <strong> dedizione</strong> al lavoro, <strong>ascolto</strong> del
            cliente e ricerca dell’<strong>eccellenza</strong> nella selezione
            di brand e materiali. Tutto inizia con il fondatore, che nel 1974
            apre il primo negozio di articoli per l’edilizia e la
            termoidraulica. Lavorando fianco a fianco con la moglie, nel 1982
            vede l’inaugurazione della nuova sede, dove ancora oggi accogliamo i
            nostri clienti. Nel 1989 fanno il proprio ingresso in azienda i
            figli, <strong>Enzo e Pino</strong>, attuali titolari. Oggi Edilarte
            Piracci è una realtà che si fa portavoce di un’
            <strong>esperienza generazionale</strong>. Dal rilievo in cantiere,
            alla consulenza per l’arredo, fino alla progettazione 3D ed alla
            relativa assistenza tecnica,{" "}
            <strong>dà anima e personalità ai vostri spazi</strong>.
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
      <div className="flex flex-col gap-4 px-4 my-10 lg:gap-10 lg:px-6">
        <h2 className="text-3xl font-medium lg:text-4xl fxl:text-[50px] ">
          <span className="font-medium">La nostra </span>{" "}
          <span className="font-bold">filosofia</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 my-10 gap-y-6 lg:my-0 lg:gap-20 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center w-full text-center ">
            <Icon
              icon="material-symbols-light:star-shine-rounded"
              width="120px"
              height="120px"
              className="text-yellow w-14 h-14 lg:w-[100px] lg:h-[100px] "
            />
            <h3 className="mt-4 mb-2 text-lg font-medium lg:text-2xl text-blue">
              Consulenza
            </h3>
            <p className="text-sm text-black lg:text-lg ">
              personalizzata per ciascun cliente
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
              Qualità
            </h3>
            <p className="text-sm text-black lg:text-lg ">
              materiali durevoli nel tempo
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
              Design
            </h3>
            <p className="text-sm text-black lg:text-lg ">
              progetti che vivono nel tempo
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
              Affidabilità
            </h3>
            <p className="text-sm text-black lg:text-lg ">
              assistenza post vendita dedicata
            </p>
          </div>
        </div>
      </div>
      <Team />
      <div className="grid justify-center grid-cols-1 gap-10 lg:grid-cols-2 min-h-[35vh] px-4 lg:px-6 my-10">
        <div className="flex flex-col justify-center h-full gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium leading-tight text-black lg:text-5xl ">
              Dalla prima visita fino al post vendita
            </h2>
            <p className="text-base text-black lg:text-lg fxl:text-xl">
              Dalla consulenza in showroom dedicata alla scelta dei materiali,
              al supporto tecnico e successivamente di post vendita, mettiamo
              sempre a disposizione con dedizione le nostre competenze atte a
              creare insieme a voi spazi confortevoli ed eleganti, curati in
              ogni dettaglio. Selezioniamo con attenzione i brand più affermati
              sul mercato per qualità, storicità, design ed affidabilità.
            </p>
          </div>

          <div className="flex flex-wrap items-end justify-between w-full gap-y-6">
            <Link
              href="/"
              className="uppercase w-full lg:w-fit bg-yellow text-white px-[20px] py-[20px] text-center text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5"
            >
              Prenotate un appuntamento
            </Link>
          </div>
        </div>
        <div className="relative h-full aspect-square lg:aspect-video">
          <Image
            src="/assets/chisiamo/consulenza_showroom_chisiamo.webp"
            alt="La nostra missione"
            fill
            className="object-cover w-full h-full "
          />
        </div>
      </div>
      {/* <Banner /> */}
      {/* <div className="w-full min-h-[20svh] lg:min-h-[20vh] bg-gradient-to-r from-[#DDD2C0] to-yellow px-4 py-6 lg:py-10 lg:px-10 sticky top-[calc(100svh-20svh)] lg:top-[calc(100vh-20vh)] z-50 flex flex-col lg:flex-row  items-center lg:justify-between gap-4"> */}
    </>
  );
}

export default ChiSiamo;
