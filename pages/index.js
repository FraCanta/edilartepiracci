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

      <div className="flex flex-col px-4 py-6 lg:py-10 lg:px-10 lg:justify-center min-h-screen lg:min-h-[40vh] gap-10 lg:gap-20   overflow-x-hidden">
        <h2 className="text-3xl font-medium lg:text-4xl fxl:text-5xl">
          Dicono di noi
        </h2>
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          className="elfsight-app-91403e13-7093-478f-a7c3-731b0445758e"
          data-elfsight-app-lazy
        ></div>
      </div>

      <div className="flex flex-col min-h-screen gap-20 py-4 mt-10 lg:mt-20 lg:py-10">
        <div className="relative">
          <Image
            src="/assets/grande_scritta.svg"
            alt="showroom interno"
            width={1920}
            height={1080}
            className="object-cover w-full h-auto "
          />
          <div className="absolute left-0 lg:-bottom-24 h-[30vh] bg-[#DDD2C0] w-full  flex flex-col justify-center gap-10">
            <h2 className="px-4 text-3xl font-medium lg:text-4xl fxl:text-5xl lg:px-10">
              Alcuni nostri fornitori
            </h2>
            <p>marquee loghi</p>
          </div>
        </div>
      </div>
    </>
  );
}
