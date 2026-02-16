import FAQ from "@/components/layout/FAQ";
import HeroPage from "@/components/layout/HeroPage";
import StickyBanner from "@/components/layout/StickyBanner";
import Link from "next/link";
import React from "react";

const Ispirazioni = () => {
  return (
    <>
      <HeroPage
        title="Ispirazioni che <br/> diventano progetti."
        paragraph="Clicca sulla stanza che preferisci per trovare tutte le idee che ti servono!"
        backgroundClass="bg-[url('/assets/hero_ispirazioni.jpg')]"
      />

      <Ispirazioni />
      <FAQ />
      <StickyBanner />
    </>
  );
};

export default Ispirazioni;
