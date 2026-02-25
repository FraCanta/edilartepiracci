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
      let isAnimating = false;

      const panels = gsap.utils.toArray(".slide");

      // posizione iniziale
      panels.forEach((panel, i) => {
        gsap.set(panel, {
          yPercent: i === 0 ? 0 : 100,
          force3D: true,
        });
      });

      function goTo(index) {
        if (isAnimating) return;
        if (index < 0 || index >= panels.length) return;

        isAnimating = true;

        const direction = index > currentIndex;

        const current = panels[currentIndex];
        const next = panels[index];

        const tl = gsap.timeline({
          defaults: { duration: 0.8, ease: "power2.inOut" },
          onComplete: () => {
            currentIndex = index;
            isAnimating = false;
          },
        });

        tl.to(current, {
          yPercent: direction ? -100 : 100,
          force3D: true,
        }).fromTo(
          next,
          { yPercent: direction ? 100 : -100 },
          { yPercent: 0, force3D: true },
          "<",
        );
      }
      const wheelHandler = (e) => {
        if (isAnimating) return;

        if (e.deltaY > 0) {
          if (currentIndex === panels.length - 1) return; // ultima slide → lascia scroll naturale
          goTo(currentIndex + 1);
        } else {
          if (currentIndex === 0) return; // prima slide → lascia scroll naturale
          goTo(currentIndex - 1);
        }
      };

      const section = containerRef.current;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=100%", // solo 1 viewport
        pin: true,
        anticipatePin: 1,
        onEnter: () => window.addEventListener("wheel", wheelHandler),
        onEnterBack: () => window.addEventListener("wheel", wheelHandler),
        onLeave: () => window.removeEventListener("wheel", wheelHandler),
        onLeaveBack: () => window.removeEventListener("wheel", wheelHandler),
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
