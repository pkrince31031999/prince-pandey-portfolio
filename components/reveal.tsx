"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="reveal-item"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
