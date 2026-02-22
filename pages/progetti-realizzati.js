import CardGrid from "@/components/CardGrid";
import HeroPage from "@/components/layout/HeroPage";
import Reviews from "@/components/layout/Reviews";
import React from "react";

function ProgettiRealizzati() {
  return (
    <>
      <HeroPage
        title="Dalle idee alla realtà:<br/>
<strong>spazi che vivono nel tempo</strong>"
        paragraph="Da 50 anni uniamo tradizione, innovazione e ricerca di brand affermati sul mercato per <br/> realizzare i vostri spazi, trasformandoli da un desiderio a una casa che vi emoziona ogni giorno."
        link2={true}
        linkCta1="/"
        linkCta2="/"
        linkName1="sfogliate i progetti"
        linkName2="prenotate la vostra consulenza"
        backgroundClass="bg-[url('/assets/hero_progetti.webp')]"
      />
      <Reviews />
      <CardGrid />
    </>
  );
}

export default ProgettiRealizzati;
