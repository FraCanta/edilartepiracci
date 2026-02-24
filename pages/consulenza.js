import HeroPage from "@/components/layout/HeroPage";
import ConsulenzaSection from "@/components/Sections/ConsulenzaSection/ConsulenzaSection";
import Head from "next/head";
import React from "react";

function Consulenza() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/icon1.png" />
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Edilarte Piracci" />
        <link rel="manifest" href="/manifest" />
        <title>Edilarte Piracci | Consulenza personalizzata</title>
        <meta
          name="description"
          content="Iniziate a dare forma ai vostri spazi prenotando una consulenza gratuita nel nostro showroom."
        />
        <meta name="author" content="Edilarte Piracci" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Edilarte Piracci | Consulenza personalizzata"
        />
        <meta
          property="og:image"
          content="https://edilartepiracci.vercel.app/assets/hero_consulenza.webp"
        />
        <meta
          property="og:description"
          content="Iniziate a dare forma ai vostri spazi prenotando una consulenza gratuita nel nostro showroom."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="edilartepiracci.com
"
        />
        <meta
          name="twitter:image"
          content="https://edilartepiracci.vercel.app/assets/hero_consulenza.webp"
        />
        <meta
          property="twitter:url"
          content="https://www.edilartepiracci.com/consulenza"
        />
        <meta
          name="twitter:title"
          content="Edilarte Piracci | Consulenza personalizzata"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <HeroPage
        title={"Una consulenza <strong>personalizzata</strong>"}
        paragraph={
          "Iniziate a dare forma ai vostri spazi prenotando una <strong>consulenza gratuita</strong> nel nostro showroom"
        }
        backgroundClass="bg-[url('/assets/hero_consulenza.webp')]"
      />
      <div className="px-4 my-20 lg:px-6">
        <h3 className="text-xl text-black lg:text-3xl">
          Esperienza generazionale al vostro servizio, affinché il vostro
          desiderio di casa diventi realtà.
        </h3>
        <h2 className="my-6 text-3xl font-bold text-black lg:my-10 lg:text-5xl">
          Soluzioni di qualità e stile <strong>su ogni dettaglio</strong>
        </h2>
        <section>
          <ConsulenzaSection />
        </section>
      </div>
    </>
  );
}

export default Consulenza;
