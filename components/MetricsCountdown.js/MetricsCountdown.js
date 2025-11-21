import React, { useEffect, useRef, useState } from "react"; // JS version

// removed TypeScript types for JS
const METRICS = [
  { id: "years", label: "Anni", target: 50 },
  { id: "gens", label: "Generazioni", target: 2 },
  { id: "company", label: "Solida azienda", target: 1 },
];

// easing function
function easeOutQuad(t) {
  return t * (2 - t);
}

function animateNumber(from, to, duration, onUpdate, onFinish) {
  const start = performance.now();
  const diff = to - from;

  function step(now) {
    const elapsed = Math.min(1, (now - start) / duration);
    const eased = easeOutQuad(elapsed);
    const current = Math.round(from + diff * eased);
    onUpdate(current);
    if (elapsed < 1) requestAnimationFrame(step);
    else onFinish && onFinish();
  }

  requestAnimationFrame(step);
}

export default function MetricsCountdown() {
  const ref = useRef(null);
  const [played, setPlayed] = useState(false);
  const [values, setValues] = useState(METRICS.map((m) => m.target));
  const [bump, setBump] = useState({});

  useEffect(() => {
    // IntersectionObserver to trigger animation once when visible
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played) {
            setPlayed(true);
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [played]);

  useEffect(() => {
    if (!played) return;

    // For each metric, animate from a higher value down to the target to give a countdown feel.
    METRICS.forEach((m, idx) => {
      // choose a start that's visually pleasing
      let start =
        m.target +
        (m.target > 10 ? Math.floor(m.target * 0.4) + 10 : 8 + idx * 6);
      // But always at least target + 3
      start = Math.max(start, m.target + 3);

      // Stagger durations and delays so they don't all move at the same time.
      const baseDuration = 900 + idx * 300; // ms
      const delay = idx * 180; // ms

      setTimeout(() => {
        animateNumber(start, m.target, baseDuration, (current) => {
          setValues((prev) => {
            const next = [...prev];
            next[idx] = current;
            return next;
          });
          // small bump animation whenever value updates
          setBump((prev) => ({ ...prev, [m.id]: true }));
          // remove bump shortly after
          setTimeout(
            () => setBump((prev) => ({ ...prev, [m.id]: false })),
            220
          );
        });
      }, delay);
    });
  }, [played]);

  return (
    <div ref={ref} className="flex justify-center w-full">
      <div className="flex items-center justify-between w-full max-w-5xl px-6 pt-16 lg:px-0 pb-14 lg:pb-4 lg:pt-14">
        {METRICS.map((m, idx) => (
          <div key={m.id} className="flex flex-col items-center flex-1">
            <div
              className={
                "text-3xl md:text-6xl text-blue font-extrabold tracking-tight transition-transform duration-200 " +
                (bump[m.id] ? "transform scale-105 -translate-y-1" : "")
              }
              // aria-hidden for decorative animation
              aria-hidden
            >
              <h2>{values[idx]}</h2>
            </div>
            <div className="mt-2 text-sm text-black lg:text-base ">
              <p>{m.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
Usage:
- Place this file inside your Next.js project (e.g. components/MetricsCountdown.tsx)
- Ensure Tailwind CSS is installed / configured. If you don't use Tailwind,
  replace utility classes with your preferred CSS.
- Import and render the component where you want the metrics to appear:
    import MetricsCountdown from '@/components/MetricsCountdown';
    <MetricsCountdown />

Customization:
- Change METRICS array to update numbers and labels.
- Adjust durations and delays in the effect to tune "countdown" feel.
- The animation triggers once when the component enters the viewport (IntersectionObserver).
*/
