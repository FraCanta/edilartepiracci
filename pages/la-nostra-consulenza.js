import HeroPage from "@/components/layout/HeroPage";
import ConsulenzaSection from "@/components/Sections/ConsulenzaSection/ConsulenzaSection";
import React from "react";

function Consulenza() {
  return (
    <>
      <HeroPage
        title={"La consulenza che <br/> ti fa scegliere bene."}
        paragraph={
          "Mezza giornata in showroom per capire cosa comprare e perchè, con rendering e abbinamenti. <br/>Poi un'offerta chiara e un post-vendita che non ti lascia mai solo."
        }
        backgroundClass="bg-[url('/assets/hero_consulenza.webp')]"
      />
      {/* <ConsulenzaSection /> */}
    </>
  );
}

export default Consulenza;
