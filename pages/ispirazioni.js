import FAQ from "@/components/layout/FAQ";
import HeroPage from "@/components/layout/HeroPage";
import StickyBanner from "@/components/layout/StickyBanner";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Ispirazioni = () => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/icon1.png" />
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Edilarte Piracci" />
        <link rel="manifest" href="/manifest" />
        <title>Edilarte Piracci | Ispirazione, progetto e forma</title>
        <meta
          name="description"
          content="Dalle vostre idee alle nostre proposte di materiali, forme e colori per realizzare con charme ed originalità i vostri spazi."
        />
        <meta name="author" content="Edilarte Piracci" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Edilarte Piracci | Ispirazione, progetto e forma"
        />
        <meta
          property="og:image"
          content="https://edilartepiracci.vercel.app/assets/hero_ispirazioni.webp"
        />
        <meta
          property="og:description"
          content="Dalle vostre idee alle nostre proposte di materiali, forme e colori per realizzare con charme ed originalità i vostri spazi."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="edilartepiracci.com
"
        />
        <meta
          name="twitter:image"
          content="https://edilartepiracci.vercel.app/assets/hero_ispirazioni.webp"
        />
        <meta
          property="twitter:url"
          content="https://www.edilartepiracci.com/ispirazioni
/"
        />
        <meta
          name="twitter:title"
          content="Edilarte Piracci | Ispirazione, progetto e forma"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <HeroPage
        title="<strong>Ispirazione, <br/>progetto e forma</strong>"
        paragraph="Un mondo in ogni stanza: dalle vostre idee alle nostre proposte di <strong>materiali, forme e colori</strong> per realizzare con charme ed originalità i vostri spazi."
        backgroundClass="bg-[url('/assets/hero_ispirazioni.webp')]"
      />

      <div className="grid justify-between w-full grid-cols-1 gap-10 px-4 mt-20 mb-10 lg:mb-6 lg:grid-cols-2 lg:px-6">
        <Link
          href="/ispirazioni/bagno"
          className="flex items-center justify-center w-full rounded-sm shadow-lg aspect-square bg-bagno backdrop-blur-sm shadow-black/25"
        >
          <p className="px-5 lg:px-10 py-4 lg:py-[20px] text-xl 2xl:text-3xl font-medium backdrop-blur-sm text-white bg-white/30 rounded-sm">
            Bagno
          </p>
        </Link>

        <Link
          href="/ispirazioni/spazio-living"
          className="flex items-center justify-center w-full rounded-sm shadow-lg aspect-square bg-living backdrop-blur-sm shadow-black/25"
        >
          <p className="px-5 lg:px-10 py-4 lg:py-[20px] text-xl 2xl:text-3xl font-medium backdrop-blur-sm text-white bg-white/30 rounded-sm">
            Living
          </p>
        </Link>
      </div>
      <FAQ />
      <StickyBanner />
    </>
  );
};

export default Ispirazioni;
