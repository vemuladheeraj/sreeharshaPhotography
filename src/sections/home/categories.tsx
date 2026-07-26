"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { KolamPattern } from "@/components/decorations/cultural-elements";
import { staggerContainer, fadeUpVariants } from "@/animations/variants";

export function CategoriesSection() {
  return (
    <section className="section-padding bg-primary relative grain">
      <div className="container-luxury">
        <SectionHeading
          subtitle="What We Capture"
          title="Every Chapter of Your Story"
          description="From sacred temple ceremonies to grand celebrations — we specialize in preserving the emotions that matter most."
        />

        <KolamPattern className="mb-12 opacity-60" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {CATEGORIES.map((category) => (
            <motion.div key={category.id} variants={fadeUpVariants}>
              <Link
                href={`/portfolio?category=${category.id}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-lg md:text-xl text-primary group-hover:text-accent transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="w-0 group-hover:w-12 h-[1px] bg-accent transition-all duration-500 mt-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
