"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoMarquee({ translation }) {
  const items = [...translation, ...translation];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-20 lg:gap-[150px]"
        animate={{ x: ["0%", "-200%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((logo, i) => (
          <div
            key={i}
            className="relative flex items-center justify-center w-20 h-20 mt-10 lg:mt-0 lg:w-32 lg:h-32 shrink-0 grayscale"
          >
            <Image
              src={logo.src}
              alt=""
              fill
              className={`object-contain ${logo.invert ? "invert" : ""}`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
