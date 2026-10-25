"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  { text: "Scalable APIs", className: "text-[#8ec5ff]", final: false },
  { text: "Cloud Infrastructure", className: "text-[#c4b5fd]", final: false },
  { text: "Reliable Systems", className: "text-[#f0c9a6]", final: false },
  { text: "Cloud-Native Solutions.", className: "", final: true },
] as const;

export function MovingWords() {
  const [index, setIndex] = useState(0);
  const word = words[index];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIndex(words.length - 1);
      return;
    }

    if (index >= words.length - 1) return;

    const timer = window.setTimeout(() => {
      setIndex((current) => current + 1);
    }, 1100);

    return () => window.clearTimeout(timer);
  }, [index]);

  return (
    <span className="relative mt-1 block h-[2.24em] overflow-hidden">
      <span className="words-static absolute inset-x-0 top-0 block">
        <span className="gradient-text block whitespace-nowrap">Cloud-Native</span>
        <span className="gradient-text block">Solutions.</span>
      </span>
      <span className="words-live absolute inset-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={word.text}
            className={`absolute inset-x-0 top-0 block ${word.className}`}
            initial={index === 0 ? false : { y: "72%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-72%", opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {word.final ? (
              <>
                <span className="gradient-text block whitespace-nowrap">Cloud-Native</span>
                <span className="gradient-text block">Solutions.</span>
              </>
            ) : (
              word.text
            )}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
