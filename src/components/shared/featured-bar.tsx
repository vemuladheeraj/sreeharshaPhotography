"use client";

import { motion } from "framer-motion";
import { FEATURED_IN } from "@/constants";

export function FeaturedBar() {
  return (
    <section className="py-6 bg-secondary/40 border-b border-secondary/60 overflow-hidden">
      <div className="container-luxury px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
          <p className="text-[10px] uppercase tracking-[0.35em] text-text-light shrink-0">
            Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {FEATURED_IN.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="font-serif text-sm md:text-base text-dark/70 hover:text-accent transition-colors"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
