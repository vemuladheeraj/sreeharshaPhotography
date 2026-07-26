"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover scale-105"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-dark/20" />
      <div className="relative z-10 section-padding pb-16 w-full">
        <div className="container-luxury">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs uppercase tracking-[0.3em] text-accent mb-4"
          >
            Sree Harsha Photography
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary leading-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg text-primary/70 max-w-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
