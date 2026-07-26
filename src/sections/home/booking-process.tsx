"use client";

import { motion } from "framer-motion";
import { BOOKING_STEPS } from "@/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { KolamPattern } from "@/components/decorations/cultural-elements";

export function BookingProcessSection() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="container-luxury relative z-10">
        <SectionHeading
          subtitle="How It Works"
          title="Your Journey With Us"
          description="From first hello to final delivery — a seamless, personal experience at every step."
          light
        />

        <KolamPattern className="mb-16 opacity-30" />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-[1px] bg-accent/20" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {BOOKING_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center group"
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-accent/30 bg-dark mb-6 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500 mx-auto">
                  <span className="font-serif text-2xl text-accent">{step.step}</span>
                </div>

                <h3 className="font-serif text-xl text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-primary/50 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
