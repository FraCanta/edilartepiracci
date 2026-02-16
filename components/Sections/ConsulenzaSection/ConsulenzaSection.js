"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FullpageSection() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    // Pin del container
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => `${sections.length * window.innerHeight}px`,
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
    });

    // Animazioni fade delle sezioni successive
    sections.forEach((section, i) => {
      if (i === 0) return; // la prima sezione resta visibile subito
      gsap.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => `${i * window.innerHeight}px top+=100`,
            end: () => `${(i + 1) * window.innerHeight}px top`,
            scrub: true,
          },
        },
      );
    });

    // Aggiorna ScrollTrigger su resize
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className="absolute top-0 left-0 flex items-center justify-center w-full h-screen text-5xl font-bold text-white"
          style={{
            background: `hsl(${i * 60}, 70%, 40%)`,
            opacity: i === 0 ? 1 : 0,
          }}
        >
          Sezione {i + 1}
        </div>
      ))}
    </div>
  );
}
