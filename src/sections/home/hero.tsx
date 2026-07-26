"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants";

const heroImages = [
  "/images/reception1.jpg",
  "/images/haldi1.jpg",
  "/images/prewedding1.jpg",
];

const heroParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  duration: 2.8 + (i % 5) * 0.3,
  delay: (i % 7) * 0.25,
}));

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    let frame: number;
    let scale = 1;
    const animate = () => {
      scale += 0.00008;
      if (scale > 1.15) scale = 1;
      el.style.transform = `scale(${scale})`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const words = SITE_CONFIG.tagline.split(" ");
  const contentDelay = 0.4;

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        {isMobile ? (
          <div className="relative w-full h-full">
            <Image
              src={heroImages[0]}
              alt="Hero wedding photography"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ) : (
          <div className="absolute inset-0 grid grid-cols-3">
            {heroImages.map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <Image
                  src={src}
                  alt={`Hero wedding photography ${i + 1}`}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-dark/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/70" />

      {!isMobile &&
        heroParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-accent/30 motion-reduce:hidden"
            style={{ left: particle.left, top: particle.top }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: contentDelay, duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-accent mb-6"
        >
          Sree Harsha Photography
        </motion.p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-primary leading-[1.1] mb-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: contentDelay + 0.1 + i * 0.06,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: contentDelay + 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Capturing weddings, celebrations and every unforgettable chapter of your story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: contentDelay + 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild variant="gold" size="lg" magnetic>
            <Link href="/booking">Book a Session</Link>
          </Button>
          <Button asChild variant="glass" size="lg" magnetic>
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: contentDelay + 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-reduce:hidden"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
