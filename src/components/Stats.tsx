"use client";

import { useEffect, useState, useRef } from "react";

const STATS = [
  {
    target: 2400,
    label: "Happy students",
    icon: (
      <>
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-1a6 6 0 0 1 6-6" />
        <circle cx="17" cy="17" r="3" />
        <path d="M14 21a3 3 0 0 1 6 0" />
      </>
    ),
    bg: "bg-coral",
  },
  {
    target: 38,
    label: "Programs running",
    icon: (
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    ),
    bg: "bg-green",
  },
  {
    target: 98,
    suffix: "%",
    label: "Parent satisfaction",
    icon: (
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    ),
    bg: "bg-amber",
  },
  {
    target: 12,
    suffix: "+",
    label: "Years of joy",
    icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />,
    bg: "bg-purple",
  },
];

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let startTimestamp: number | null = null;
    const duration = 1400;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [visible, target]);

  return (
    <div
      ref={ref}
      className="font-display text-[42px] font-semibold text-navy leading-none"
    >
      {count >= 1000 ? count.toLocaleString() : count}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="reveal text-center p-7 bg-white rounded-lg shadow-sm hover:-translate-y-1 transition-transform"
            >
              <div
                className={`w-14 h-14 mx-auto mb-3.5 rounded-2xl grid place-items-center text-white ${s.bg}`}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
              </div>
              <Counter target={s.target} suffix={s.suffix} />
              <div className="mt-1.5 text-sm text-ink-soft font-bold uppercase tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
