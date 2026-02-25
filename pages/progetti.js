import CardGrid from "@/components/CardGrid";
import HeroPage from "@/components/layout/HeroPage";
import Reviews from "@/components/layout/Reviews";
import StickyBanner from "@/components/layout/StickyBanner";
import { Icon } from "@iconify/react";
import Head from "next/head";
import React from "react";
import progettiIT from "../public/locales/it/progetti.json";
function Progetti({ progetti }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/icon1.png" />
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Edilarte Piracci" />
        <link rel="manifest" href="/manifest" />
        <title>Edilarte Piracci | Progetti</title>
        <meta
          name="description"
          content="Da 50 anni uniamo tradizione, innovazione e ricerca di brand affermati sul mercato per creare i vostri spazi: fatevi ispirare dai progetti che abbiamo realizzato."
        />
        <meta name="author" content="Edilarte Piracci" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Edilarte Piracci | Progetti" />
        <meta
          property="og:image"
          content="https://edilartepiracci.vercel.app/assets/hero_progetti.webp"
        />
        <meta
          property="og:description"
          content="Da 50 anni uniamo tradizione, innovazione e ricerca di brand affermati sul mercato per creare i vostri spazi: fatevi ispirare dai progetti che abbiamo realizzato."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="edilartepiracci.com
"
        />
        <meta
          name="twitter:image"
          content="https://edilartepiracci.vercel.app/assets/hero_progetti.webp"
        />
        <meta
          property="twitter:url"
          content="https://www.edilartepiracci.com/progetti
/"
        />
        <meta name="twitter:title" content="Edilarte Piracci | Progetti" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <HeroPage
        title="Dalle idee alla realtà:<br/>
<strong>spazi che vivono nel tempo</strong>"
        paragraph="Da 50 anni uniamo tradizione, innovazione e ricerca di brand affermati sul mercato per <br/> realizzare i vostri spazi, trasformandoli da un desiderio a una casa che vi emoziona ogni giorno."
        link2={true}
        linkCta1="#progetti"
        linkCta2="/contatti"
        linkName1="sfogliate i progetti"
        linkName2="prenotate la vostra consulenza"
        backgroundClass="bg-[url('/assets/hero_progetti.webp')]"
      />
      <Reviews />
      <CardGrid />
      <div>
        <h2
          dangerouslySetInnerHTML={{ __html: progetti.method.title }}
          className="px-4 py-6 text-3xl font-medium lg:text-4xl fxl:text-5xl lg:px-10"
        ></h2>
        <div className="grid items-stretch w-full grid-cols-2 my-10 text-center lg:grid-cols-6 gap-y-10 lg:px-10">
          {" "}
          {progetti.method.steps.map((step, index) => {
            const isFourth = index === 3;
            const isFifth = index === 4;

            return (
              <div
                key={index}
                className={`
    flex flex-col items-center justify-start h-full

    ${isFifth ? "col-start-1" : ""}

    lg:col-span-2
    ${isFourth ? "lg:col-start-2" : ""}
    ${isFifth ? "lg:col-start-4" : ""}
  `}
              >
                <div className="flex items-center justify-center w-20 h-20 text-3xl rounded-full lg:w-28 lg:h-28 bg-sand text-yellow">
                  {step.number}
                </div>

                <h3
                  dangerouslySetInnerHTML={{ __html: step.title }}
                  className="mt-4 mb-2 text-sm font-medium lg:text-2xl text-blue"
                />
              </div>
            );
          })}
        </div>
      </div>
      <StickyBanner />
      <div className="px-4 py-10 lg:px-10">
        <p className="mb-10 text-lg max-w-max lg:text-xl">
          Da 50 anni operiamo nel <strong>Gargano Nord</strong>, dando forma
          alle vostre idee e trasformandole in spazi reali. Dalla zona living al
          bagno, selezioniamo i materiali dei migliori brand sul mercato per
          realizzare
          <strong> progetti unici e su misura per voi</strong>.<br /> Ci
          impegniamo ogni giorno per dare ai nostri clienti riferimenti sicuri e
          competenze per <strong>rispondere ad ogni esigenza</strong>, dalla
          consulenza al supporto al cantiere, fino al supporto post vendita.
        </p>
      </div>
    </>
  );
}

export default Progetti;

export async function getStaticProps(context) {
  const { params, locale } = context;

  let obj = progettiIT;

  return {
    props: {
      progetti: obj.progetti,
    },
  };
}
