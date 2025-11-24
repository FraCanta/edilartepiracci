import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Lightbox({
  slides,
  index,
  onClose,
  onNext,
  onPrev,
  categoryName,
}) {
  if (index === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-6"
        onClick={onClose}
      >
        {/* HEADER */}
        <div className="absolute flex items-center justify-between w-[94%] lg:w-[97%] max-w-[1600px] lg:max-w-[1920px] mx-auto top-6 text-white">
          <div className="flex items-baseline gap-2">
            <h2 className="text-xl font-medium uppercase md:text-2xl">
              {categoryName}
            </h2>
            <span className="text-sm">
              <span className="pl-6 text-2xl">{index + 1}</span> ____
              <span>{slides.length}</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 transition-colors duration-300 rounded-full bg-white/20 hover:bg-white"
          >
            <Icon
              icon="carbon:close"
              width="28"
              height="28"
              className="text-white transition-transform duration-300 transform hover:text-black hover:rotate-180"
            />
          </button>
        </div>

        {/* MAIN IMAGE */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative w-full aspect-video md:aspect-[4/3] lg:w-[97vw] lg:h-[70vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image src={slides[index].src} alt="" fill className="object-cover" />

          {/* Prev button */}
          <button
            onClick={onPrev}
            className="absolute text-4xl text-white -translate-y-1/2 left-4 top-1/2 "
          >
            <Icon icon="ooui:previous-ltr" width="32px" height="32px" />
          </button>

          {/* Next button */}
          <button
            onClick={onNext}
            className="absolute text-4xl text-white -translate-y-1/2 right-4 top-1/2 "
          >
            <Icon icon="ooui:previous-rtl" width="32px" height="32px" />
          </button>
        </motion.div>

        {/* BRAND LOGOS */}
        <div
          className="absolute flex justify-center w-[97%] max-w-[1600px] mx-auto bottom-6 gap-4 px-2 overflow-x-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center w-20 h-20 rounded-lg bg-white/20"
            >
              <span className="text-sm text-white">Logo {i}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
