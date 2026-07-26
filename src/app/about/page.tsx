import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { LotusDivider, WeddingKnot, MangoLeafCorner } from "@/components/decorations/cultural-elements";
import { generateWebPageSchema } from "@/lib/schema";
import { SITE_CONFIG } from "@/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sree Harsha Photography — our passion for capturing emotions, Telugu traditions, and timeless wedding memories across India.",
};

const schema = generateWebPageSchema(
  "About Sree Harsha Photography",
  "Our story, values, and commitment to preserving generations through photography.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        title="Our Story"
        subtitle="Born from passion. Driven by emotion. Rooted in tradition."
        image="/images/reception1.jpg"
      />

      <section className="section-padding bg-primary relative grain">
        <div className="container-luxury max-w-4xl">
          <LotusDivider className="mb-12" />
          <div className="prose prose-lg max-w-none text-text leading-relaxed space-y-6">
            <p className="text-xl font-serif text-dark">
              Photography, for us, was never about cameras and lenses. It was about the tear
              that rolls down a father&apos;s cheek during kanyadaan. The laughter that erupts
              during a sangeet. The quiet prayer before a temple muhurtham.
            </p>
            <p>
              Sree Harsha Photography began in Hyderabad with a simple conviction — that every
              family deserves photographs that feel as real as the moments themselves. What started
              as a one-person passion project has grown into a dedicated team of storytellers,
              each trained in the delicate art of being present without being intrusive.
            </p>
            <p>
              We are deeply rooted in Telugu culture. We know the significance of every ritual,
              every garland, every blessing. Yet we bring a modern cinematic eye — drone
              perspectives, 4K films, and editing that honors natural light and authentic color.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <MangoLeafCorner className="absolute top-8 left-8 opacity-30" />
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/housewarmin1.jpg"
                alt="Photography team capturing a wedding ceremony"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeading
                subtitle="Our Values"
                title="What Guides Every Frame"
                align="left"
              />
              <WeddingKnot className="mb-8" />
              <ul className="space-y-6">
                {[
                  {
                    title: "Emotion First",
                    desc: "We chase feelings, not poses. The best photographs happen when you forget we're there.",
                  },
                  {
                    title: "Cultural Respect",
                    desc: "Every tradition is sacred. We honor rituals with patience, understanding, and reverence.",
                  },
                  {
                    title: "Modern Craft",
                    desc: "Premium equipment, cinematic editing, and contemporary aesthetics meet timeless storytelling.",
                  },
                  {
                    title: "Personal Connection",
                    desc: "We invest time in knowing your family, your story, and what matters most to you.",
                  },
                ].map((item) => (
                  <li key={item.title} className="border-l-2 border-accent pl-6">
                    <h3 className="font-serif text-xl text-dark mb-1">{item.title}</h3>
                    <p className="text-text-light text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark text-center">
        <div className="container-luxury">
          <h2 className="text-4xl font-serif text-primary mb-6">
            Ready to Write Your Chapter?
          </h2>
          <p className="text-primary/60 mb-8 max-w-xl mx-auto">
            We&apos;d love to hear about your celebration and how we can help preserve it.
          </p>
          <Button asChild variant="gold" size="lg">
            <Link href="/booking">Book a Session</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
