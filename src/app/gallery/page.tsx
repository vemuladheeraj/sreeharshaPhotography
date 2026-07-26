"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { PageHero } from "@/components/shared/page-hero";
import { PORTFOLIO_ITEMS } from "@/constants";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const slides = PORTFOLIO_ITEMS.map((item) => ({ src: item.src, alt: item.alt }));

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A curated visual archive of emotions we've been honored to preserve."
        image="/images/prewedding1.jpg"
      />

      <section className="section-padding bg-dark">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-square overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
              </button>
            ))}
          </div>
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
