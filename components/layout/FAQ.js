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
      q: "Do you charge for each upgrade?",
      a: "Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder.",
    },
    {
      q: "Do I need to purchase a license for each website?",
      a: "Yes, you need to purchase a separate license for each website where you plan to use our components. Each license is tied to a single domain and its subdomains.",
    },
    {
      q: "What is regular license?",
      a: "A regular license grants you the right to use our components on a single website or project. It includes access to all basic features and support.",
    },
    {
      q: "What is extended license?",
      a: "An extended license provides usage rights for multiple websites, priority support, and premium components. Ideal for agencies and enterprises.",
    },
  ];

  return (
    <div className="py-8 lg:py-20">
      <div className="px-6 lg:px-10">
        {/* HEADER */}
        <div className="mb-10 lg:mb-24">
          <h2 className="text-2xl font-semibold text-base-content md:text-3xl lg:text-4xl fxl:text-5xl">
            Domande Frequenti
          </h2>
        </div>

        {/* ACCORDION */}
        <div className="w-full divide-y divide-neutral/20">
          {faqs.map((item, i) => (
            <div key={i} className="py-4 accordion-item">
              {/* Toggle Button */}
              <button
                className="inline-flex items-center justify-between w-full text-left"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-medium">{item.q}</span>

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
