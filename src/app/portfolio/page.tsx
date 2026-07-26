"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { PageHero } from "@/components/shared/page-hero";
import { PORTFOLIO_ITEMS, PORTFOLIO_FILTERS } from "@/constants";
import { cn } from "@/lib/utils";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered =
    activeFilter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  const slides = filtered.map((item) => ({ src: item.src, alt: item.alt }));

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    el.style.transform = `perspective(1000px) rotateY(${x * 0.3}deg) rotateX(${-y * 0.3}deg) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateY(0) rotateX(0) scale(1)";
  }, []);

  return (
    <>
      <PageHero
        title="Portfolio"
        subtitle="A visual journey through celebrations, traditions, and timeless emotions."
        image="/images/haldi1.jpg"
      />

      <section className="section-padding bg-primary">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {PORTFOLIO_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 border",
                  activeFilter === filter
                    ? "bg-dark text-primary border-dark"
                    : "text-text border-secondary hover:border-accent hover:text-accent"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative overflow-hidden transition-transform duration-300">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-500 flex items-end p-6">
                      <span className="text-xs uppercase tracking-widest text-accent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </>
  );
}
