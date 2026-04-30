import Banner from "@/components/layout/Banner";
import Hero from "@/components/layout/Hero";
import Reviews from "@/components/layout/Reviews";
import StickyBanner from "@/components/layout/StickyBanner";
import LogoMarquee from "@/components/LogoMarquee/LogoMarquee";
import Ispirazione from "@/components/Sections/Ispirazione/Ispirazione";
import Progetti from "@/components/Sections/Progetti/Progetti";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import homeIT from "@/public/locales/it/home.json";
export default function Home({ onHeroFinished, hasHeroAnimated, translation }) {
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
          property="og:image"
          content="https://edilartepiracci.vercel.app/assets/hero_home2.jpg"
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
          name="twitter:image"
          content="https://edilartepiracci.vercel.app/assets/hero_home2.jpg"
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
          <div className="absolute left-0 flex flex-col justify-center w-full py-8 overflow-hidden -bottom-24 lg:bottom-0 bg-sand lg:gap-10">
            <h2 className="px-4 pt-6 text-3xl font-medium lg:text-4xl fxl:text-5xl lg:px-10">
              Alcuni nostri fornitori
            </h2>
            {/* <script src="https://elfsightcdn.com/platform.js" async></script>
            <div
              className="elfsight-app-e0f72b47-65a7-4aae-8533-818355d85689 link_none"
              data-elfsight-app-lazy
            ></div> */}
            <LogoMarquee translation={translation.marquee} />
          </div>
        </div>
      </div>

      <div className="grid items-center justify-center w-full grid-cols-1 gap-10 px-4 mt-36 lg:min-h-screen lg:gap-10 lg:grid-cols-2 lg:p-10">
        <div className="flex flex-col gap-6 text-black">
          <h2 className="text-[32px] lg:text-[38px] fxl:text-[52px] font-medium leading-none">
            Un lavoro che <strong>cresce in famiglia</strong>
          </h2>
          <p className="text-base text-black lg:text-lg fxl:text-xl">
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
        <div className="grid items-center justify-center w-full grid-cols-3 my-10 text-center text-blue gap-y-6 fxl:gap-20 lg:grid-cols-5 lg:px-10">
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
              icon="material-symbols-light:crown-outline"
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
              icon="material-symbols-light:extension-outline"
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
              icon="material-symbols-light:castle-outline"
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

      <Ispirazione />
      <div className="w-full aspect-square lg:h-screen bg-showroom"></div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  let obj;

  switch (locale) {
    case "it":
      obj = homeIT;
      break;

    default:
      obj = homeIT;
      break;
  }

  return {
    props: {
      hasHeroAnimated: true,
      translation: obj.home,
    },
  };
};
