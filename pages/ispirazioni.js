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
      />

      <div className="grid justify-between w-full grid-cols-1 gap-10 lg:grid-cols-2 h-[490px] my-20 px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center justify-center w-full h-full bg-bagno rounded-[15px] lg:rounded-[40px] backdrop-blur-sm shadow-lg shadow-black/25"
        >
          <p className="px-5 lg:px-10 py-4 lg:py-[20px] text-xl lg:text-3xl font-bold backdrop-blur-sm bg-white/21 rounded-lg lg:rounded-[20px]">
            Bagno
          </p>
        </Link>

        <Link
          href="/"
          className="flex items-center justify-center w-full h-full bg-living rounded-[15px] lg:rounded-[40px] backdrop-blur-sm shadow-lg shadow-black/25"
        >
          <p className="px-5 lg:px-10 py-4 lg:py-[20px] text-xl lg:text-3xl font-bold backdrop-blur-sm bg-white/21 rounded-lg lg:rounded-[20px]">
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
