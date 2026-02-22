import Link from "next/link";
import React from "react";

function StickyBanner() {
  return (
    <>
      {/* <Banner /> */}
      {/* <div className="w-full min-h-[20svh] lg:min-h-[20vh] bg-gradient-to-r from-[#DDD2C0] to-yellow px-4 py-6 lg:py-10 lg:px-10 sticky top-[calc(100svh-20svh)] lg:top-[calc(100vh-20vh)] z-50 flex flex-col lg:flex-row  items-center lg:justify-between gap-4"> */}
      <div className="w-full bg-gradient-to-r from-[#DDD2C0] to-yellow px-4 py-6 lg:py-10 lg:px-10  flex flex-col lg:flex-row  items-center lg:justify-between gap-4">
        {/* wrapper testo */}
        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-[28px] fxl:text-[42px] text-white leading-none font-medium">
            Consulenza in showroom
          </h2>
          <p className="text-[16px] fxl:text-[21px] text-white leading-none">
            Assistenza, qualità, design e affidabilità nel tempo
          </p>
        </div>

        <div className="flex flex-wrap items-center w-full gap-2 lg:w-fit">
          {" "}
          <Link
            href="/"
            className="uppercase bg-blue text-white px-[10px] py-[20px] text-center text-base lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5 w-full lg:max-w-max"
          >
            Prenotate la vostra visita
          </Link>
          <Link
            href="/"
            className="uppercase border border-white text-white px-[10px] py-[20px] text-center text-base lg:px-[42px] 2xl:text-base fxl:px-[60px] md:py-5 w-full lg:max-w-max"
          >
            Come funziona?
          </Link>
        </div>
      </div>
    </>
  );
}

export default StickyBanner;
