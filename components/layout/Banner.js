import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="px-4 footer_bg lg:px-10">
      <div className="flex flex-col items-center w-full gap-4 py-6 lg:py-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center w-full gap-2">
          <h2 className="text-[25px] lg:text-[28px] fxl:text-[42px] text-white leading-none font-medium">
            Avete bisogno di assistenza?
          </h2>
          <p className="text-[15px] fxl:text-[21px] text-white leading-none">
            Chiamateci o prenotate un appuntamento in showroom
          </p>
        </div>

        <div className="flex flex-wrap items-center w-full gap-4 text-center lg:justify-end">
          <Link
            href="/"
            className="w-full px-6 py-4 text-lg text-white uppercase lg:w-fit bg-yellow xl:text-sm lg:px-10 2xl:text-base md:py-5 lg:max-w-max"
          >
            Contatti
          </Link>
        </div>
      </div>
    </div>
  );
}
