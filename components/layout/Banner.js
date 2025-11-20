import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";

export default function Banner() {
  const [open, setOpen] = useState(true);

  return (
    <div className="sticky bottom-0 left-0 z-50 w-full">
      <motion.div
        animate={{ y: open ? 0 : 100 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative bg-[#BCA70D] px-4 lg:px-10 overflow-hidden"
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center gap-4 py-6 lg:py-10 lg:flex-row lg:justify-between"
            >
              <div className="flex flex-col justify-center gap-2">
                <h2 className="text-[28px] fxl:text-[42px] text-white leading-none font-medium">
                  Affidati alla nostra consulenza in showroom
                </h2>
                <p className="text-[15px] fxl:text-[21px] text-white leading-none">
                  Qualità certificata, fornitori esclusivi, consulenza
                  sartoriale
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/"
                  className="uppercase bg-[#306D93] text-white px-6 py-4 text-lg xl:text-sm lg:px-10 2xl:text-base md:py-5 w-full lg:max-w-max"
                >
                  prenota
                </Link>
                <Link
                  href="/"
                  className="w-full px-6 py-4 text-lg text-white uppercase border border-white xl:text-sm lg:px-10 2xl:text-base md:py-5 lg:max-w-max"
                >
                  scopri come funziona
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          className="absolute right-4 w-10 h-10 bg-[#BCA70D] flex items-center justify-center cursor-pointer"
          animate={{
            top: open ? 16 : 10,
            rotate: open ? 0 : 180,
          }}
          transition={{ duration: 0.4 }}
        >
          <Icon
            icon="carbon:chevron-down"
            width="28px"
            height="28px"
            style={{ color: "#fff" }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
}
