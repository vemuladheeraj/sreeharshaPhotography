"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WEDDING_STORIES } from "@/constants";
import { SectionHeading } from "@/components/shared/section-heading";

export function FeaturedStoriesSection() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="container-luxury relative z-10">
        <SectionHeading
          subtitle="Real Stories"
          title="Weddings We've Loved"
          description="Every celebration is unique. Explore full stories from couples who trusted us with their most precious day."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {WEDDING_STORIES.map((story, i) => (
            <motion.div
              key={story.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/portfolio/${story.slug}`}
                className="group block relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={story.coverImage}
                  alt={`${story.couple} — ${story.location}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-widest text-accent mb-2">
                    {story.category}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-primary mb-2 group-hover:text-accent transition-colors">
                    {story.couple}
                  </h3>
                  <p className="text-sm text-primary/60">
                    {story.location} · {story.date}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-xs uppercase tracking-widest text-primary/80 group-hover:text-accent transition-colors">
                    View Story
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
