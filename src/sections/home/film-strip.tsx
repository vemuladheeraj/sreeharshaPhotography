"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/constants";

const stripItems = PORTFOLIO_ITEMS.slice(0, 8);

export function FilmStripSection() {
  return (
    <section className="py-12 md:py-16 bg-primary overflow-hidden">
      <div className="mb-8 px-6 md:px-12 lg:px-20">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2 text-center">
          The Archive
        </p>
        <h2 className="text-3xl md:text-4xl font-serif text-dark text-center">
          Moments in Motion
        </h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-3 md:gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...stripItems, ...stripItems].map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="relative w-48 md:w-64 lg:w-72 aspect-[3/4] shrink-0 overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="288px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/0 hover:bg-dark/20 transition-colors" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
