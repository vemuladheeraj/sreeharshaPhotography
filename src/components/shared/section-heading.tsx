"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <p
          className={`text-xs uppercase tracking-[0.3em] mb-4 ${
            light ? "text-accent" : "text-accent"
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-balance ${
          light ? "text-primary" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-base md:text-lg max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-primary/70" : "text-text-light"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
