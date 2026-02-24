"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "1",
    title: "Visita personalizzata in showroom",
    list: [
      "Partiamo dai vostri desideri ed esigenze.",
      "Vi proponiamo materiali, forme, colori e combinazioni.",
      "Identifichiamo con voi le migliori soluzioni di stile, comfort e praticità nel tempo.",
      "Curiamo ogni dettaglio per l’armonia di tutti i vostri spazi.",
    ],
    image: "/assets/consulenza/visita_showroom.webp",
  },
  {
    number: "2",
    title: "Proposta di progetto",
    list: [
      "Creiamo il rendering dei vostri ambienti con i materiali visionati.",
      "Condividiamo con voi ogni dettaglio.",
      "Elaboriamo la proposta finale.",
    ],
    image: "/assets/consulenza/proposta_progetto.webp",
  },
  {
    number: "3",
    title: "Offerta economica",
    list: [
      "Formuliamo gratuitamente un preventivo analitico.",
      "Valutate eventuali modifiche da apportare.",
      "Scegliete senza impegno se e quando procedere.",
    ],
    image: "/assets/consulenza/offerta_economica.webp",
  },
  {
    number: "4",
    title: "Supporto al cantiere",
    list: [
      "Forniamo schede tecniche ed indicazioni di posa necessarie.",
      "Siamo disponibili al supporto degli operatori in cantiere.",
      "I nostri fornitori, in caso di esigenze particolari, offrono servizio tecnico tramite i loro centri di assistenza di zona.",
    ],
    image: "/assets/home/consulenza_section.webp",
  },
  {
    number: "5",
    title: "Supporto post vendita",
    list: [
      "I materiali forniti provengono da brand affermati, tali da garantire nel tempo i ricambi e l’assistenza necessaria.",
    ],
    image: "/assets/placeholder.png",
  },
];

export default function ConsulenzaSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let currentIndex = 0;
      let animating = false;

      const panels = gsap.utils.toArray(".slide");

      panels
        .slice()
        .reverse()
        .forEach((panel, i) => {
          gsap.set(panel, { zIndex: i });
        });

      function gotoPanel(index, isScrollingDown) {
        if (animating) return;
        animating = true;

        if (
          (index === panels.length && isScrollingDown) ||
          (index === -1 && !isScrollingDown)
        ) {
          intentObserver.disable();
          animating = false;
          return;
        }

        const target = panels[index];
        const prev = isScrollingDown ? panels[index - 1] : panels[index + 1];

        if (prev) {
          gsap.to(prev, {
            yPercent: isScrollingDown ? -100 : 100,
            duration: 0.7,
            ease: "power2.inOut",
          });
        }

        gsap.fromTo(
          target,
          { yPercent: isScrollingDown ? 100 : -100 },
          {
            yPercent: 0,
            duration: 0.7,
            ease: "power2.inOut",
          },
        );

        currentIndex = index;
        gsap.delayedCall(0.8, () => (animating = false));
      }

      const intentObserver = ScrollTrigger.observe({
        type: "wheel,touch",
        onDown: () => gotoPanel(currentIndex + 1, true),
        onUp: () => gotoPanel(currentIndex - 1, false),
        tolerance: 10,
        preventDefault: true,
      });

      intentObserver.disable();

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        pin: true,
        onEnter: () => {
          intentObserver.enable();
          gotoPanel(currentIndex + 1, true);
        },
        onEnterBack: () => {
          intentObserver.enable();
          gotoPanel(currentIndex - 1, false);
        },
        onLeave: () => intentObserver.disable(),
        onLeaveBack: () => intentObserver.disable(),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative hidden h-screen overflow-hidden lg:block"
      >
        <div className="relative w-full h-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="absolute inset-0 flex items-center slide"
            >
              {/* LEFT TEXT */}
              <div className="flex items-start w-1/2 gap-6 bg-white ">
                <div className="flex items-center justify-center w-24 h-24 text-3xl rounded-full bg-sand">
                  {step.number}
                </div>
                <div className="flex flex-col justify-center">
                  <h2
                    className="text-4xl font-bold"
                    dangerouslySetInnerHTML={{ __html: step.title }}
                  />

                  <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
                    {step.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative w-1/2 aspect-square">
                <Image
                  src={step.image}
                  fill
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* MOBILE */}
      <section className="py-10 space-y-20 lg:hidden">
        {steps.map((step, i) => (
          <div key={i}>
            <div className="flex items-center gap-6 overflow-x-hidden">
              {" "}
              <div className="flex items-center justify-center w-10 h-10 text-xl rounded-full bg-sand">
                {step.number}
              </div>
              <h2 className="text-2xl font-bold">{step.title}</h2>
            </div>

            <ul className="mt-4 space-y-2 text-lg list-disc list-inside">
              {step.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="relative aspect-square">
              {" "}
              <Image
                fill
                src={step.image}
                className="object-cover mt-6 rounded-sm "
                alt={step.title}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
