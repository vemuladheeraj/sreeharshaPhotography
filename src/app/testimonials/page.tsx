import type { Metadata } from "next";
import { TestimonialsSection } from "@/sections/home/testimonials";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/sections/home/cta";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what our clients say about their experience with Sree Harsha Photography. Real stories from real celebrations.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials"
        subtitle="The words that mean the most come from the families we've served."
        image="/images/housewarmin1.jpg"
      />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
