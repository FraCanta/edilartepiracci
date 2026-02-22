import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Lightbox({
  slides,
  index,
  onClose,
  categoryName,
  logos = [],
}) {
  // Stato interno: currentIndex e direction
  const [[currentIndex, direction], setPage] = useState([index ?? 0, 0]);

  // Quando cambia l'index esterno
  useEffect(() => {
    if (index !== null) setPage([index, 0]);
  }, [index]);

  // Quando cambiano le slides, resetta l'indice
  useEffect(() => {
    setPage([0, 0]);
  }, [slides]);

  const paginate = (newDirection) => {
    const newIndex =
      (currentIndex + newDirection + slides.length) % slides.length;
    setPage([newIndex, newDirection]);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="lightbox"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
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
              <span className="pl-6 text-2xl">{currentIndex + 1}</span> /{" "}
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
            {slides[currentIndex] && (
              <motion.div
                key={slides[currentIndex].src}
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
                  src={slides[currentIndex].src}
                  alt=""
                  fill
                  className="object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Prev/Next buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute text-4xl text-white -translate-y-1/2 left-4 top-1/2"
          >
            <Icon icon="ooui:previous-ltr" width="32px" height="32px" />
          </button>
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
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-20 h-20 rounded-lg bg-white/20"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
