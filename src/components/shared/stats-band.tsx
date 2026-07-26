"use client";

import { motion } from "framer-motion";
import { SITE_STATS } from "@/constants";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function StatsBand() {
  return (
    <section className="py-12 md:py-16 bg-dark border-y border-accent/20">
      <div className="container-luxury px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {SITE_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-accent mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-primary/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
