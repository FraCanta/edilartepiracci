import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Lightbox({
  slides,
  index,
  onClose,
  onNext,
  onPrev,
  categoryName,
}) {
  const [[page, direction], setPage] = useState([index ?? 0, 0]); // inizializza con index

  // Sincronizza page se cambia index dall'esterno
  useEffect(() => {
    if (index !== null && index !== page) {
      setPage([index, 0]);
    }
  }, [index]);

  if (index === null) return null;

  const paginate = (newDirection) => {
    const newIndex = (page + newDirection + slides.length) % slides.length;
    setPage([newIndex, newDirection]);
  };

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <AnimatePresence mode="wait">
      {index !== null && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-6"
          onClick={onClose} // mantiene chiusura cliccando sfondo
        >
          {/* HEADER */}
          <div className="absolute flex items-center justify-between w-[94%] lg:w-[97%] max-w-[1600px] lg:max-w-[1920px] mx-auto top-6 text-white">
            <div className="flex items-baseline gap-2">
              <h2 className="text-xl font-medium uppercase md:text-2xl">
                {categoryName}
              </h2>
              <span className="text-sm">
                <span className="pl-6 text-2xl">{page + 1}</span> /{" "}
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
          <div
            className="relative w-full aspect-square lg:aspect-video lg:max-w-[97vw] lg:max-h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence initial={false} custom={direction}>
              {slides[page] && (
                <motion.div
                  key={slides[page].src}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = offset.x * velocity.x;
                    if (swipe < -1000) paginate(1);
                    else if (swipe > 1000) paginate(-1);
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[page].src}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Prev button */}
            <button
              onClick={() => paginate(-1)}
              className="absolute text-4xl text-white -translate-y-1/2 left-4 top-1/2"
            >
              <Icon icon="ooui:previous-ltr" width="32px" height="32px" />
            </button>

            {/* Next button */}
            <button
              onClick={() => paginate(1)}
              className="absolute text-4xl text-white -translate-y-1/2 right-4 top-1/2"
            >
              <Icon icon="ooui:previous-rtl" width="32px" height="32px" />
            </button>
          </div>

          {/* BRAND LOGOS */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute flex justify-center w-[97%] max-w-[1600px] mx-auto bottom-16 lg:bottom-6 gap-4 px-2 overflow-x-auto"
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
