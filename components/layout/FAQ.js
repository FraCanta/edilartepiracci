import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqs = [
    {
      q: "La consulenza è gratuita?",
      a: "Sì: offriamo gratuitamente consulenza e progettazione.",
    },
    {
      q: "Si possono richiedere campioni di materiali?",
      a: "Possiamo fornire le campionature dei materiali gratuitamente",
    },
    {
      q: "Offrite supporto tecnico?",
      a: "Per ogni prodotto da noi fornito, offriamo il supporto tecnico necessario.",
    },
  ];

  return (
    <div className="py-8 lg:py-20 lg:w-[60%] mx-auto ">
      <div className="px-4 lg:px-6">
        {/* HEADER */}
        <div className="mb-10 lg:mb-24">
          <h2 className="text-2xl font-semibold text-base-content md:text-3xl lg:text-4xl fxl:text-5xl">
            Domande Frequenti
          </h2>
        </div>

        {/* ACCORDION */}
        <div className="divide-y divide-neutral/20">
          {faqs.map((item, i) => (
            <div key={i} className="py-4 accordion-item">
              {/* Toggle Button */}
              <button
                className="inline-flex items-center justify-between w-full text-left"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-medium lg:text-xl">
                  {item.q}
                </span>

                {openIndex === i ? (
                  <Icon icon="mdi-light:minus" className="w-5 text-black" />
                ) : (
                  <Icon icon="mdi-light:plus" className="w-5 text-black" />
                )}
              </button>

              {/* Animated Content */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0, y: -6 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-1 pt-3 text-base-content/80">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
