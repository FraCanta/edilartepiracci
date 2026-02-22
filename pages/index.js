import Banner from "@/components/layout/Banner";
import Hero from "@/components/layout/Hero";
import Reviews from "@/components/layout/Reviews";
import StickyBanner from "@/components/layout/StickyBanner";
import Ispirazione from "@/components/Sections/Ispirazione/Ispirazione";
import Progetti from "@/components/Sections/Progetti/Progetti";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home({ onHeroFinished, hasHeroAnimated }) {
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
      <Hero onHeroFinished={onHeroFinished} />
      <StickyBanner />
      <Progetti />
      <Reviews />

      <div className="flex flex-col gap-20 ">
        <div className="relative">
          <Image
            src="/assets/grande_scritta.svg"
            alt="showroom interno"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
          />
          <div className="absolute left-0 flex flex-col justify-center w-full overflow-hidden -bottom-24 lg:bottom-0 bg-sand lg:gap-10 ">
            <h2 className="px-4 py-6 text-3xl font-medium lg:text-4xl fxl:text-5xl lg:px-10">
              Alcuni nostri fornitori
            </h2>
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div
              className="elfsight-app-e0f72b47-65a7-4aae-8533-818355d85689 link_none"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </div>

      <div className="grid items-center justify-center w-full grid-cols-1 gap-10 px-6 mt-36 lg:min-h-screen lg:gap-10 lg:grid-cols-2 lg:p-10">
        <div className="flex flex-col gap-6 text-black">
          <h2 className="text-[32px] lg:text-[38px] fxl:text-[52px] font-medium leading-none">
            Un lavoro che <strong>cresce in famiglia</strong>
          </h2>
          <p className="text-sm text-black lg:text-lg fxl:text-xl">
            Siamo un’<strong>azienda familiare alla seconda generazione</strong>
            : la nostra filosofia portante si fonda sull’
            <strong>ascolto</strong> delle esigenze e delle idee dei nostri
            clienti, sulla <strong>selezione</strong> dei marchi più prestigiosi
            e sulla <strong>consulenza sartoriale</strong> nella scelta dei
            materiali. Questo ci consente di dare vita a spazi su misura e
            curati in ogni dettaglio, trasformando i sogni dei clienti in
            progetti unici
          </p>
          <Link
            href="/chi-siamo"
            className="w-full px-6 py-4 text-lg text-center text-white uppercase bg-yellow xl:text-sm lg:px-10 2xl:text-base md:py-5 lg:max-w-max"
          >
            la nostra storia
          </Link>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/assets/combo.png"
            alt="showroom interno"
            fill
            className="object-cover object-center w-full h-full "
          />
        </div>
      </div>
      <div>
        <h2 className="px-4 py-6 text-3xl font-medium lg:text-4xl fxl:text-5xl lg:px-10">
          La nostra <strong>anima</strong>
        </h2>
        <div className="grid items-center justify-center w-full grid-cols-2 my-10 text-center text-blue gap-y-6 fxl:gap-20 lg:grid-cols-5 lg:px-10">
          <div className="flex flex-col items-center justify-center w-full fxl:p-10">
            <Icon
              icon="material-symbols-light:editor-choice-outline"
              width="100px"
              height="100px"
              className="text-yellow w-16 h-16 lg:w-[100px] lg:h-[100px]"
            />
            <h3 className="mt-4 mb-2 text-sm font-medium lg:text-lg">
              Consulenza
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center w-full fxl:p-10">
            <Icon
              icon="material-symbols-light:extension-outline"
              width="100px"
              height="100px"
              className="text-yellow  w-16 h-16 lg:w-[100px] lg:h-[100px]"
            />
            <h3 className="mt-4 mb-2 text-sm font-medium lg:text-lg">
              Qualità
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center w-full fxl:p-10">
            <Icon
              icon="material-symbols-light:crown-outline"
              width="100px"
              height="100px"
              className="text-yellow  w-16 h-16 lg:w-[100px] lg:h-[100px]"
            />
            <h3 className="mt-4 mb-2 text-sm font-medium lg:text-lg">Design</h3>
          </div>
          <div className="flex flex-col items-center justify-center w-full fxl:p-10">
            <Icon
              icon="material-symbols-light:shield-with-heart-outline"
              width="100px"
              height="100px"
              className="text-yellow  w-16 h-16 lg:w-[100px] lg:h-[100px]"
            />
            <h3 className="mt-4 mb-2 text-sm font-medium lg:text-lg">
              Affidabilità
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center w-full fxl:p-10">
            <Icon
              icon="material-symbols-light:shield-with-heart-outline"
              width="100px"
              height="100px"
              className="text-yellow  w-16 h-16 lg:w-[100px] lg:h-[100px]"
            />
            <h3 className="mt-4 mb-2 text-sm font-medium lg:text-lg">
              Storicità
            </h3>
          </div>
        </div>
      </div>
      <Banner />
      {/* <div className="relative flex flex-col justify-between min-h-screen p-4 lg:p-10 bg-consulenza">
        <div className="z-10 flex flex-col gap-4 lg:gap-10">
          <div className="flex flex-col lg:gap-1">
            <h2 className="mb-6 text-3xl font-medium lg:text-4xl fxl:text-[50px]">
              Il vero risparmio è evitare gli errori
            </h2>
            <h3 className="text-lg text-black lg:text-2xl">
              Il giusto equilibrio tra la qualità, prezzo e assistenza
            </h3>
          </div>
          <p className="text-base text-black fxl:text-xl">
            Comprare singoli materiali direttamente dal produttore può sembrare
            conveniente. Finché non ti accorgi che formati, colori e finiture
            non dialogano tra loro, o che manca un ricambio quando serve. La
            nostra consulenza unisce estetica, tecnica e assistenza: scegli oggi
            con serenità, vivi meglio domani.
          </p>
        </div>
        <div className="z-10 grid grid-cols-2 gap-3 my-10 lg:my-0 lg:gap-20 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center w-full text-center fxl:p-10">
            <Icon
              icon="material-symbols-light:360"
              width="120px"
              height="120px"
              className="text-yellow w-14 h-14 lg:w-[100px] lg:h-[100px] fxl:w-[120px] fxl:h-[120px]"
            />
            <h3 className="mt-4 mb-2 text-lg font-medium lg:text-2xl fxl:text-3xl text-blue">
              Coerenza estetica
            </h3>
            <p className="text-sm text-black lg:text-lg fxl:text-xl">
              abbinamenti pensati sull’architettura della tua casa
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full text-center fxl:p-10">
            <Icon
              icon="material-symbols-light:star-shine-rounded"
              width="120px"
              height="120px"
              className="text-yellow w-14 h-14 lg:w-[100px] lg:h-[100px] fxl:w-[120px] fxl:h-[120px]"
            />
            <h3 className="mt-4 mb-2 text-lg font-medium lg:text-2xl fxl:text-3xl text-blue">
              Qualità verificabile
            </h3>
            <p className="text-sm text-black lg:text-lg fxl:text-xl">
              certificazioni e schede tecniche, niente sorprese.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full text-center fxl:p-10">
            <Icon
              icon="material-symbols-light:clock-loader-40"
              width="120px"
              height="120px"
              className="text-yellow w-14 h-14 lg:w-[100px] lg:h-[100px] fxl:w-[120px] fxl:h-[120px]"
            />
            <h3 className="mt-4 mb-2 text-lg font-medium lg:text-2xl fxl:text-3xl text-blue">
              Tempo risparmiato
            </h3>
            <p className="text-sm text-black lg:text-lg fxl:text-xl">
              un referente unico, zero giri a vuoto.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full text-center fxl:p-10">
            <Icon
              icon="material-symbols-light:person-celebrate-rounded"
              width="120px"
              height="120px"
              className="text-yellow w-14 h-14 lg:w-[100px] lg:h-[100px] fxl:w-[120px] fxl:h-[120px]"
            />
            <h3 className="mt-4 mb-2 text-lg font-medium lg:text-2xl fxl:text-3xl text-blue">
              Tranquillità nel tempo
            </h3>
            <p className="text-sm text-black lg:text-lg fxl:text-xl">
              ricambi originali e supporto anche tra molti anni.{" "}
            </p>
          </div>
        </div>
        <div className="z-10 flex flex-col items-center gap-4 mx-auto text-center max-w-max-lg">
          <h3 className="text-xl font-medium lg:text-2xl">
            La tua casa, con materiali che durano nel tempo e raccontano chi sei
          </h3>
          <Link
            href="/"
            className="uppercase bg-yellow max-w-max text-white px-[20px] py-[20px] text-center text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5"
          >
            Approfondisci i passaggi
          </Link>
        </div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
      </div> */}
      <Ispirazione />
      <div className="w-full aspect-square lg:h-screen bg-showroom"></div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      hasHeroAnimated: true,
    },
  };
};
