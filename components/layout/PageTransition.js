import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({
  isVisible,
  colors = ["#306d93", "#ddd2c0"],
}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setActive(true);
    } else {
      // Rimani montato durante la leave animation
      const timeout = setTimeout(() => setActive(false), 20);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  // Variants genitore per stagger
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }, // più veloce
    exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
  };

  // Variants singolo layer
  const layerVariant = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 0.4, ease: [0, 0, 0.05, 1] } },
    exit: { y: "-100%", transition: { duration: 0.4, ease: [0, 0, 0.05, 1] } },
  };

  return (
    <AnimatePresence>
      {(isVisible || active) && (
        <motion.div
          className="transition"
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {colors.map((color, i) => (
            <motion.div
              key={i}
              className="transition__layer"
              style={{ backgroundColor: color, zIndex: 1000 + i }}
              variants={layerVariant}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
