"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Church,
  Film,
  Plane,
  BookOpen,
  Clock,
  Users,
  MapPin,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { LotusDivider } from "@/components/decorations/cultural-elements";
import { staggerContainer, fadeUpVariants } from "@/animations/variants";

const iconMap: Record<string, React.ReactNode> = {
  camera: <Camera className="w-6 h-6" />,
  temple: <Church className="w-6 h-6" />,
  film: <Film className="w-6 h-6" />,
  drone: <Plane className="w-6 h-6" />,
  album: <BookOpen className="w-6 h-6" />,
  clock: <Clock className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  map: <MapPin className="w-6 h-6" />,
};

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-primary relative grain">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Crafted With Purpose, Delivered With Love"
          description="Every detail of our process is designed to honor your celebration and preserve its soul."
        />

        <LotusDivider className="mb-16" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_CHOOSE_US.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUpVariants}
              className="group p-8 bg-white/50 border border-secondary/50 hover:border-accent/30 transition-all duration-500 hover-lift relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32" />
              <div className="text-accent mb-6 transition-transform duration-300 group-hover:scale-110">
                {iconMap[feature.icon]}
              </div>
              <h3 className="font-serif text-xl text-dark mb-3">{feature.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
