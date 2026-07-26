import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/constants";
import { KolamPattern } from "@/components/decorations/cultural-elements";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium wedding photography, cinematic films, pre-wedding shoots, drone coverage, and more. Explore our full range of photography services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Every celebration deserves to be remembered with artistry and heart."
        image="/images/reception2.jpg"
      />

      <section className="section-padding bg-primary relative grain">
        <div className="container-luxury">
          <SectionHeading
            subtitle="What We Offer"
            title="Crafted for Every Occasion"
            description="From intimate temple ceremonies to grand destination weddings — we bring the same passion to every frame."
          />
          <KolamPattern className="mb-16 opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="group bg-white/50 border border-secondary/50 overflow-hidden hover-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} photography service`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-serif text-xl text-primary">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-text-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="gold" size="lg">
              <Link href="/booking">Get a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
