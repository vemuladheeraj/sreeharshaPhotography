"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MangoLeafCorner, WeddingKnot } from "@/components/decorations/cultural-elements";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function AboutSection() {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      <MangoLeafCorner className="absolute top-8 left-8 opacity-40" />
      <MangoLeafCorner className="absolute bottom-8 right-8 opacity-40 rotate-180" />

      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
              <Image
                src="/images/housewarmin1.jpg"
                alt="Sree Harsha, founder and lead photographer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 400px"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-accent/20 m-4 pointer-events-none" />
            </div>
            <div className="absolute -bottom-6 -right-6 md:right-0 bg-dark text-primary p-6 md:p-8 max-w-[200px]">
              <p className="text-4xl font-serif text-accent">
                <AnimatedCounter end={8} suffix="+" />
              </p>
              <p className="text-xs uppercase tracking-widest mt-1 text-primary/60">
                Years of Experience
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              About Sree Harsha
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-dark leading-tight mb-6">
              Where Tradition Meets Timeless Artistry
            </h2>
            <WeddingKnot className="mb-8" />

            <div className="space-y-5 text-text leading-relaxed">
              <p>
                Born from a deep love for Telugu traditions and the raw beauty of human
                connection, Sree Harsha Photography was founded with one belief — that
                photographs should make you feel, not just see.
              </p>
              <p>
                We understand the sacred weight of a muhurtham, the joy of a sangeet night,
                the quiet tears during a vidhi. Our team blends traditional values with
                modern cinematic creativity to create imagery that becomes your family&apos;s
                most treasured heirloom.
              </p>
              <p>
                With professional-grade equipment, a warm and unobtrusive approach, and an
                eye trained in both candid moments and composed artistry — we don&apos;t just
                attend your celebration. We become part of your story.
              </p>
            </div>

            <Button asChild variant="outline" className="mt-8" magnetic>
              <Link href="/about">Our Full Story</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
