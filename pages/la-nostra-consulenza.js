import HeroPage from "@/components/layout/HeroPage";
import ConsulenzaSection from "@/components/Sections/ConsulenzaSection/ConsulenzaSection";
import React from "react";

function Consulenza() {
  return (
    <>
      <HeroPage
        title={"Una consulenza <strong>personalizzata</strong>"}
        paragraph={
          "Iniziate a dare forma ai vostri spazi prenotando una <strong>consulenza gratuita</strong> nel nostro showroom"
        }
        backgroundClass="bg-[url('/assets/hero_consulenza.webp')]"
      />
      {/* <ConsulenzaSection /> */}
    </>
  );
}

export default Consulenza;
