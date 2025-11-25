import CardGrid from "@/components/CardGrid";
import HeroPage from "@/components/layout/HeroPage";
import Reviews from "@/components/layout/Reviews";
import React from "react";

function ProgettiRealizzati() {
  return (
    <>
      <HeroPage
        title="Dalle idee ai risultati: <br /> progetti che durano."
        paragraph="Materiali certificati, abbinamenti coerenti, assistenza nel tempo. <br/> 
Scorri i progetti e vieni in showroom a dirci: “Voglio un risultato così, per casa mia.”"
        link2={true}
        linkCta1="/"
        linkCta2="/"
        linkName1="guarda i progetti"
        linkName2="prenota la consulenza"
        backgroundClass="bg-progetti"
      />
      <Reviews />
      <CardGrid />
    </>
  );
}

export default ProgettiRealizzati;
