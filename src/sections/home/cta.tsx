"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RangoliBackground } from "@/components/decorations/cultural-elements";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url(/images/haldi1.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-dark/70" />
      <RangoliBackground className="opacity-30" />

      <div className="relative z-10 container-luxury text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
            Begin Your Story
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight mb-8 max-w-3xl mx-auto text-balance">
            Let&apos;s Create Timeless Memories Together
          </h2>
          <p className="text-primary/60 text-lg mb-10 max-w-xl mx-auto">
            Your celebration deserves to be remembered exactly as it felt. Let us preserve
            every precious moment for generations to come.
          </p>
          <Button asChild variant="gold" size="lg" magnetic>
            <Link href="/booking">Book Your Date</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
