import Banner from "@/components/layout/Banner";
import Hero from "@/components/layout/Hero";
import Ispirazione from "@/components/Sections/Ispirazione/Ispirazione";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home({ onHeroFinished }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/icon1.png" />
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Edilarte Piracci" />
        <link rel="manifest" href="/manifest" />
      </Head>
      <Hero onHeroFinished={onHeroFinished} />
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

      <div className="flex flex-col gap-10 px-4 py-6 my-10 overflow-hidden lg:mb-0 lg:py-10 lg:px-10 lg:justify-center lg:gap-20">
        <h2 className="text-3xl font-medium lg:text-4xl fxl:text-5xl">
          Dicono di noi
        </h2>
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          className="elfsight-app-91403e13-7093-478f-a7c3-731b0445758e"
          data-elfsight-app-lazy
        ></div>
      </div>

      <div className="flex flex-col gap-20 ">
        <div className="relative">
          <Image
            src="/assets/grande_scritta.svg"
            alt="showroom interno"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
          />
          <div className="absolute left-0 -bottom-24 lg:bottom-0 overflow-hidden bg-[#DDD2C0] w-full  flex flex-col justify-center lg:gap-10 ">
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
            Un lavoro che cresce in famiglia
          </h2>
          <p className="text-sm text-black fxl:text-xl">
            Siamo un’azienda familiare con oltre 40 anni di esperienza nella
            rivendita di materiali edili e finiture per privati. Oggi la seconda
            generazione porta avanti gli stessi principi: scelta accurata dei
            fornitori, ascolto del cliente, responsabilità nel tempo.
          </p>
          <Link
            href="/"
            className="w-full px-6 py-4 text-lg text-center text-white uppercase bg-yellow xl:text-sm lg:px-10 2xl:text-base md:py-5 lg:max-w-max"
          >
            scopri di più
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
          Perchè sceglierci
        </h2>
        <div className="grid items-center justify-center w-full grid-cols-2 my-10 text-center text-blue gap-y-6 fxl:gap-20 lg:grid-cols-4 lg:px-10">
          <div className="flex flex-col items-center justify-center w-full fxl:p-10">
            <Icon
              icon="material-symbols-light:editor-choice-outline"
              width="100px"
              height="100px"
              className="text-yellow w-16 h-16 lg:w-[100px] lg:h-[100px]"
            />
            <h3 className="mt-4 mb-2 text-sm font-medium lg:text-lg">
              Qualità certificata
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
              Sartorialità
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center w-full fxl:p-10">
            <Icon
              icon="material-symbols-light:crown-outline"
              width="100px"
              height="100px"
              className="text-yellow  w-16 h-16 lg:w-[100px] lg:h-[100px]"
            />
            <h3 className="mt-4 mb-2 text-sm font-medium lg:text-lg">
              Esclusività dei fornitori
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
              Asssistenza post-vendita garantita
            </h3>
          </div>
        </div>
      </div>
      <Banner />
      <div className="relative flex flex-col justify-between min-h-screen p-4 lg:p-10 bg-consulenza">
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
        <div className="z-10 flex flex-col gap-4 mx-auto text-center max-w-max-lg">
          <h3 className="text-xl font-medium lg:text-2xl">
            La tua casa, con materiali che durano nel tempo e raccontano chi sei
          </h3>
          <Link
            href="/"
            className="uppercase bg-yellow text-white px-[20px] py-[20px] text-center text-lg xl:text-sm lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5"
          >
            Approfondisci i passaggi
          </Link>
        </div>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
      </div>
      <Ispirazione />
      <div className="w-full aspect-square lg:h-screen bg-showroom"></div>
      <div className="relative flex flex-col justify-center min-h-screen px-4 py-10 lg:px-10 lg:py-20 bg-flower">
        {/* Overlay SEMPRE sotto */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-white/85"></div>

        {/* Tutto il resto SEMPRE sopra */}
        <div className="relative z-10 flex flex-col h-full gap-6 text-black">
          <div className="grid w-full gap-6 lg:grid-cols-[1fr_auto]">
            {/* Titolo */}
            <h2 className="order-1 text-[32px] lg:text-[38px] fxl:text-[52px] font-medium leading-none">
              Dalle parole ai fatti
            </h2>

            {/* Bottone */}
            <Link
              href="/"
              className="order-3 w-full px-6 py-4 text-center text-white uppercase bg-yellow lg:order-2 lg:w-auto"
            >
              Vedi tutti
            </Link>

            {/* Testo */}
            <p className="order-2 text-sm text-black lg:order-3 lg:col-span-2 lg:text-xl">
              Residenze, appartamenti, strutture ricettive del territorio.
              Stessa promessa: bellezza, funzionalità e durata.
            </p>
          </div>

          <div className="relative z-10 grid justify-between w-full grid-cols-1 gap-10 mt-10 lg:grid-cols-3">
            <div className="block w-full ">
              <Link href="/">
                <Image
                  width={400}
                  height={300}
                  src="/assets/placeholder.png"
                  className="w-full"
                  alt=""
                />

                <h4 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-blue text-heading">
                  Appartamento vista mare
                </h4>
                <p className="text-xl text-black">Vieste, [Anno]</p>

                <p className="my-6 text-black text-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
              </Link>
            </div>
            <div className="block w-full ">
              <Link href="/">
                <Image
                  width={400}
                  height={300}
                  src="/assets/placeholder.png"
                  className="w-full"
                  alt=""
                />

                <h4 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-blue text-heading">
                  Appartamento vista mare
                </h4>
                <p className="text-xl text-black">Vieste, [Anno]</p>

                <p className="my-6 text-black text-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
              </Link>
            </div>
            <div className="block w-full ">
              <Link href="/">
                <Image
                  width={400}
                  height={300}
                  src="/assets/placeholder.png"
                  className="w-full"
                  alt=""
                />

                <h4 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-blue text-heading">
                  Appartamento vista mare
                </h4>
                <p className="text-xl text-black">Vieste, [Anno]</p>

                <p className="my-6 text-black text-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
