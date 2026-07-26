import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { BookingForm } from "@/components/forms/booking-form";
import { BookingProcessSection } from "@/sections/home/booking-process";
import { LotusDivider } from "@/components/decorations/cultural-elements";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Book your wedding, pre-wedding, or event photography session with Sree Harsha Photography. Secure your date today.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        title="Book Your Date"
        subtitle="Let's begin preserving your story. Share your details and we'll craft the perfect plan."
        image="/images/kanyadanam2.jpg"
      />

      <section className="section-padding bg-primary relative grain">
        <div className="container-luxury max-w-3xl">
          <div className="text-center mb-12">
            <LotusDivider className="mb-6" />
            <p className="text-text-light">
              Fill in the details below and our team will reach out within 2 hours with a
              personalized proposal.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      <BookingProcessSection />
    </>
  );
}
