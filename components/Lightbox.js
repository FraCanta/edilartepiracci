import { Icon } from "@iconify/react";
import { motion, AnimatePresence, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const LOGO_SPEED = 2;

export default function Lightbox({
  slides,
  index,
  onClose,
  categoryName,
  logos = [],
}) {
  const [[currentIndex, direction], setPage] = useState([index ?? 0, 0]);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isZoomSliderOpen, setIsZoomSliderOpen] = useState(false);
  const [showZoomHint, setShowZoomHint] = useState(true);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const imageAreaRef = useRef(null);
  const zoomControlRef = useRef(null);
  const panStartRef = useRef({ x: 0, y: 0, mouseX: 0, mouseY: 0 });

  const x = useRef(0);
  const containerRef = useRef(null);

  useAnimationFrame(() => {
    if (!containerRef.current) return;

    x.current -= LOGO_SPEED;

    const width = containerRef.current.scrollWidth / 2;

    if (Math.abs(x.current) >= width) {
      x.current = 0;
    }

    containerRef.current.style.transform = `translateX(${x.current}px)`;
  });

  useEffect(() => {
    if (index !== null) setPage([index, 0]);
  }, [index]);

  useEffect(() => {
    const nextSlide = slides[(currentIndex + 1) % slides.length];

    if (!nextSlide?.src) {
      return;
    }

    const preloadImage = new window.Image();
    preloadImage.src = nextSlide.src;
  }, [currentIndex, slides]);

  useEffect(() => {
    setPage([0, 0]);
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
    setShowZoomHint(true);
    setIsZoomSliderOpen(false);
  }, [slides]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        zoomControlRef.current &&
        !zoomControlRef.current.contains(event.target)
      ) {
        setIsZoomSliderOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const paginate = useCallback(
    (newDirection) => {
      const newIndex =
        (currentIndex + newDirection + slides.length) % slides.length;
      setPage([newIndex, newDirection]);
    },
    [currentIndex, slides.length],
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        paginate(1);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        paginate(-1);
      }

      if (event.key === "Escape") {
        event.preventDefault();
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate, onClose]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };
  const clampPan = (nextPan, level) => {
    if (!imageAreaRef.current || level <= 1) return { x: 0, y: 0 };
    const rect = imageAreaRef.current.getBoundingClientRect();
    const maxX = ((rect.width * level) - rect.width) / 2;
    const maxY = ((rect.height * level) - rect.height) / 2;
    return {
      x: Math.min(maxX, Math.max(-maxX, nextPan.x)),
      y: Math.min(maxY, Math.max(-maxY, nextPan.y)),
    };
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  const applyZoom = (nextZoom) => {
    const safeZoom = Math.min(3, Math.max(1, nextZoom));
    setZoomLevel(safeZoom);
    if (safeZoom === 1) {
      setPan({ x: 0, y: 0 });
    } else {
      setPan((curr) => clampPan(curr, safeZoom));
    }
  };

  const handleWheelZoom = (e) => {
    e.preventDefault();
    if (showZoomHint) setShowZoomHint(false);
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    const next = Math.min(3, Math.max(1, +(zoomLevel + delta).toFixed(2)));
    applyZoom(next);
  };

  const handlePanStart = (e) => {
    if (zoomLevel <= 1) return;
    e.preventDefault();
    setIsPanning(true);
    panStartRef.current = {
      x: pan.x,
      y: pan.y,
      mouseX: e.clientX,
      mouseY: e.clientY,
    };
  };

  const handlePanMove = (e) => {
    if (!isPanning) return;
    const dx = e.clientX - panStartRef.current.mouseX;
    const dy = e.clientY - panStartRef.current.mouseY;
    const nextPan = {
      x: panStartRef.current.x + dx,
      y: panStartRef.current.y + dy,
    };
    setPan(clampPan(nextPan, zoomLevel));
  };

  const handlePanEnd = () => setIsPanning(false);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="lightbox"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-6"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* HEADER */}
        <div className="absolute flex items-start justify-between w-[94%] lg:w-[97%] max-w-[1600px] lg:max-w-[1920px] mx-auto top-6 text-white gap-2">
          <div className="flex min-w-0 items-baseline gap-2 pr-1">
            <h2 className="min-w-0 max-w-[42vw] truncate text-base font-medium uppercase leading-10 sm:max-w-none sm:text-xl md:text-2xl">
              {categoryName}
            </h2>
            <span className="flex shrink-0 items-baseline text-xs leading-10 sm:text-sm">
              <span className="text-xl sm:pl-6 sm:text-2xl">
                {currentIndex + 1}
              </span>
              <span className="px-1">/</span>
              <span>{slides.length}</span>
            </span>
          </div>

          <div
            ref={zoomControlRef}
            className="relative flex shrink-0 items-center gap-1 sm:gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomSliderOpen((prev) => !prev);
              }}
              className="h-9 px-3 text-xs transition-colors duration-200 rounded-full bg-white/20 hover:bg-white/30 sm:h-10 sm:text-sm"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <AnimatePresence>
              {isZoomSliderOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 z-40 flex items-center gap-3 px-3 py-2 border rounded-lg -bottom-14 bg-black/80 border-white/20 backdrop-blur-sm"
                >
                  <span className="text-xs text-white/80">100%</span>
                  <input
                    type="range"
                    min="1"
                    max="3"
                    step="0.05"
                    value={zoomLevel}
                    onChange={(e) => applyZoom(Number(e.target.value))}
                    className="w-32 accent-white"
                  />
                  <span className="text-xs text-white/80">300%</span>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetZoom();
              }}
              className="w-9 h-9 text-xl transition-colors duration-200 rounded-full bg-white/20 hover:bg-white/30 sm:h-10 sm:w-10"
              aria-label="Reset zoom"
            >
              <Icon
                icon="mdi:fit-to-page-outline"
                width="18"
                height="18"
                className="mx-auto"
              />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="p-2 transition-colors duration-300 rounded-full bg-white/20 hover:bg-white"
            >
              <Icon
                icon="carbon:close"
                width="24"
                height="24"
                className="text-white transition-transform duration-300 transform hover:text-black hover:rotate-180"
              />
            </button>
          </div>
        </div>

        {/* MAIN IMAGE */}
        <div
          ref={imageAreaRef}
          className="relative w-full aspect-square lg:aspect-video lg:max-w-[97vw] 2xl:max-h-[60vh] fxl:max-h-[70vh]"
          onClick={(e) => e.stopPropagation()}
          onWheel={handleWheelZoom}
          onMouseDown={handlePanStart}
          onMouseMove={handlePanMove}
          onMouseUp={handlePanEnd}
          onMouseLeave={handlePanEnd}
        >
          <AnimatePresence>
            {showZoomHint && zoomLevel === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute z-30 flex items-center gap-2 w-max mx-auto px-4 py-2 text-sm text-white rounded-full pointer-events-none inset-x-0 bottom-4 bg-black/55 backdrop-blur-md border border-white/20"
              >
                <Icon icon="mdi:mouse-scroll-wheel" width="16" height="16" />
                <span>Usa la rotellina per zoommare</span>
              </motion.div>
            )}
          </AnimatePresence>

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
                drag={zoomLevel === 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  if (zoomLevel > 1) return;
                  const swipe = offset.x * velocity.x;
                  if (swipe < -1000) paginate(1);
                  else if (swipe > 1000) paginate(-1);
                }}
                className="absolute bottom-0 left-0 right-0 -top-10"
              >
                <Image
                  src={slides[currentIndex].src}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-contain transition-transform duration-200 ease-out"
                  style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
                    cursor: zoomLevel > 1 ? (isPanning ? "grabbing" : "grab") : "default",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute text-4xl text-white -translate-y-[40%] left-4 top-[40%]"
          >
            <Icon icon="ooui:previous-ltr" width="32px" height="32px" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute text-4xl text-white -translate-y-[40%] right-4 top-[40%]"
          >
            <Icon icon="ooui:previous-rtl" width="32px" height="32px" />
          </button>
        </div>

        {/* BRAND LOGOS */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: zoomLevel > 1 ? 20 : 0,
            opacity: zoomLevel > 1 ? 0 : 1,
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute flex justify-center w-screen overflow-hidden bottom-24 lg:bottom-10 pointer-events-none"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            ref={containerRef}
            className="flex gap-20 lg:gap-40 min-w-max will-change-transform"
          >
            {[...logos, ...logos, ...logos, ...logos, ...logos].map(
              (logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-20 h-auto lg:w-30 shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={100}
                    className={`object-contain ${logo.invert ? "invert" : ""}`}
                  />
                </div>
              ),
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
