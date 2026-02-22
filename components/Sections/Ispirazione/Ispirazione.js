import Link from "next/link";
import React from "react";

function Ispirazione() {
  return (
    <div className="flex flex-col gap-10 px-6 py-10 lg:px-10 lg:py-20 ">
      <h2 className="mb-6 text-3xl  lg:text-4xl fxl:text-[50px]">
        Trovate la vostra <strong>ispirazione</strong>
      </h2>
      <div className="grid justify-between w-full grid-cols-1 gap-10 lg:grid-cols-2">
        <Link
          href="/ispirazioni/bagno"
          className="flex items-center justify-center w-full rounded-sm shadow-lg aspect-square bg-bagno backdrop-blur-sm shadow-black/25"
        >
          <p className="px-5 lg:px-10 py-4 lg:py-[20px] text-xl 2xl:text-3xl font-medium backdrop-blur-sm text-white bg-white/30 rounded-sm">
            Bagno
          </p>
        </Link>

        <Link
          href="/ispirazioni/living"
          className="flex items-center justify-center w-full rounded-sm shadow-lg aspect-square bg-living backdrop-blur-sm shadow-black/25"
        >
          <p className="px-5 lg:px-10 py-4 lg:py-[20px] text-xl 2xl:text-3xl font-medium backdrop-blur-sm text-white bg-white/30 rounded-sm">
            Living
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Ispirazione;
