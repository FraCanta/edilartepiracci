import Link from "next/link";
import React from "react";

function Ispirazione() {
  return (
    <div className="flex flex-col gap-10 px-6 py-10 lg:px-10 lg:py-20 lg:gap-20 ">
      <div className="flex flex-col gap-2">
        <h2 className="mb-6 text-3xl font-medium lg:text-4xl fxl:text-[50px]">
          Trova la tua ispirazione
        </h2>

        <p className="text-base text-black fxl:text-2xl">
          Inizia da qui: Bagno e Living, Pavimenti & Rivestimenti, Accessori.
        </p>
      </div>
      <div className="grid justify-between w-full grid-cols-1 gap-10 lg:grid-cols-2 h-[490px]">
        <Link
          href="/ispirazioni/bagno"
          className="flex items-center justify-center w-full h-full bg-bagno rounded-[15px] lg:rounded-[40px] backdrop-blur-sm shadow-lg shadow-black/25"
        >
          <p className="px-5 lg:px-10 py-4 lg:py-[20px] text-xl lg:text-3xl font-bold backdrop-blur-sm bg-white/21 rounded-lg lg:rounded-[20px]">
            Bagno
          </p>
        </Link>

        <Link
          href="/ispirazioni/living"
          className="flex items-center justify-center w-full h-full bg-living rounded-[15px] lg:rounded-[40px] backdrop-blur-sm shadow-lg shadow-black/25"
        >
          <p className="px-5 lg:px-10 py-4 lg:py-[20px] text-xl lg:text-3xl font-bold backdrop-blur-sm bg-white/21 rounded-lg lg:rounded-[20px]">
            Living
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Ispirazione;
