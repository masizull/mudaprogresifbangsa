"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionTransitionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export default function SectionTransition({
  children,
  id,
  className = "",
  delay = 0,
}: SectionTransitionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}
