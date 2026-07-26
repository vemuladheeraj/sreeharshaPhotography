"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/icons/social-icons";
import { INSTAGRAM_POSTS, SITE_CONFIG } from "@/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { JasmineAccent } from "@/components/decorations/cultural-elements";

export function InstagramSection() {
  return (
    <section className="section-padding bg-primary relative">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Instagram"
          title="Follow Our Journey"
          description="Daily glimpses into the celebrations, behind-the-scenes moments, and stories we preserve."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {INSTAGRAM_POSTS.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 16vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-colors duration-500 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-10">
          <JasmineAccent className="mx-auto mb-4 opacity-60" />
          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-dark hover:text-accent transition-colors group"
          >
            <InstagramIcon className="w-4 h-4" />
            @sreeharshaphotography
            <span className="w-0 group-hover:w-8 h-[1px] bg-accent transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
