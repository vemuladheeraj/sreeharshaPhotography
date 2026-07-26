"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { BrassLamp } from "@/components/decorations/cultural-elements";

const features = [
  "Storytelling that unfolds like a wedding film",
  "Natural colors that honor golden hour warmth",
  "Emotional editing that captures every tear and smile",
  "Premium Sony & Canon cinema-grade equipment",
  "4K cinematic wedding films with licensed music",
  "Aerial drone films for breathtaking perspectives",
];

export function CinematicSection() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden grain">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <SectionHeading
              subtitle="Cinematic Experience"
              title="Your Story, Told Like a Film"
              align="left"
            />

            <div className="flex items-center gap-3 mb-8">
              <BrassLamp className="w-6 h-8 text-accent" />
              <div className="h-[1px] flex-1 bg-accent/30" />
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-text leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-text-light italic font-serif text-lg">
              &ldquo;We don&apos;t just record events — we compose visual poetry.&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/reception1.jpg"
                alt="Cinematic wedding film still with golden hour lighting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-accent/30" />
            <div className="absolute -top-4 -right-4 w-32 h-32 border border-accent/30" />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center cursor-pointer"
              >
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-primary border-b-[10px] border-b-transparent ml-1" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
