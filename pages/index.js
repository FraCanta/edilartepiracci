import Banner from "@/components/layout/Banner";
import Hero from "@/components/layout/Hero";
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
      <div className="w-full min-h-[20svh] lg:min-h-[20vh] bg-gradient-to-r from-[#DDD2C0] to-[#BCA70D] px-4 py-6 lg:py-10 lg:px-10 sticky top-[calc(100svh-27svh)] lg:top-[calc(100vh-20vh)] z-50 flex flex-col lg:flex-row  items-center lg:justify-between gap-4">
        {/* wrapper testo */}
        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-[28px] fxl:text-[42px] text-white leading-none font-medium">
            Affidati alla nostra consulenza in showroom
          </h2>
          <p className="text-[15px] fxl:text-[21px] text-white leading-none">
            Qualità certificata, fornitori esclusivi, consulenza sartoriale
          </p>
        </div>

        <div className="flex items-center w-full gap-4 lg:w-fit">
          {" "}
          <Link
            href="/"
            className="uppercase bg-[#306D93] text-white px-[10px] py-[20px] text-center text-xs lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5 w-full lg:max-w-max"
          >
            prenota
          </Link>
          <Link
            href="/"
            className="uppercase border border-white text-white px-[10px] py-[20px] text-center text-xs lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5 w-full lg:max-w-max"
          >
            scopri come funziona
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-4 py-6 overflow-hidden -mt-[150px] mb-20 lg:mb-0 overflow-x-hidden lg:py-10 lg:px-10 lg:justify-center lg:gap-20">
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
      <div className="grid items-center justify-center w-full grid-cols-1 gap-10 px-6 mt-32 mb-10 lg:min-h-screen lg:gap-10 lg:grid-cols-2 lg:p-10">
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
            className="uppercase bg-[#BCA70D] text-center text-white px-6 py-4 text-lg xl:text-sm lg:px-10 2xl:text-base md:py-5 w-full lg:max-w-max"
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
      <div className="my-20">
        <h2 className="px-4 py-6 text-3xl font-medium lg:text-4xl fxl:text-5xl lg:px-10">
          Perchè sceglierci
        </h2>
        <div className="grid items-center justify-center w-full grid-cols-2 text-center gap-y-6 lg:gap-20 lg:grid-cols-4 lg:px-10">
          <div className="flex flex-col items-center justify-center w-full lg:p-10">
            <Icon
              icon="material-symbols-light:editor-choice-outline"
              width="100px"
              height="100px"
              className="text-[#BCA70D]"
            />
            <h3 className="mt-4 mb-2 text-lg font-medium">
              Qualità certificata
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center w-full lg:p-10">
            <Icon
              icon="material-symbols-light:extension-outline"
              width="100px"
              height="100px"
              className="text-[#BCA70D]"
            />
            <h3 className="mt-4 mb-2 text-lg font-medium">
              Qualità certificata
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center w-full lg:p-10">
            <Icon
              icon="material-symbols-light:crown-outline"
              width="100px"
              height="100px"
              className="text-[#BCA70D]"
            />
            <h3 className="mt-4 mb-2 text-lg font-medium">
              Qualità certificata
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center w-full lg:p-10">
            <Icon
              icon="material-symbols-light:shield-with-heart-outline"
              width="100px"
              height="100px"
              className="text-[#BCA70D]"
            />
            <h3 className="mt-4 mb-2 text-lg font-medium">
              Qualità certificata
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
