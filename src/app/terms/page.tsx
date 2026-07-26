import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_CONFIG.name}. Booking terms, cancellation policy, and service agreements.`,
};

export default function TermsPage() {
  return (
    <section className="section-padding bg-primary pt-32">
      <div className="container-luxury max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-dark mb-8">Terms of Service</h1>
        <p className="text-sm text-text-light mb-12">Last updated: July 2026</p>

        <div className="prose prose-lg max-w-none text-text space-y-6">
          <p>
            By booking services with {SITE_CONFIG.name}, you agree to the following terms and
            conditions.
          </p>

          <h2 className="font-serif text-2xl text-dark">Booking & Payment</h2>
          <p>
            A booking is confirmed upon receipt of the advance payment (typically 30% of the
            total package). The remaining balance is due before or on the event date as
            agreed in your contract.
          </p>

          <h2 className="font-serif text-2xl text-dark">Cancellation Policy</h2>
          <p>
            Cancellations made more than 60 days before the event date will receive a full
            refund of the advance. Cancellations within 60 days are subject to a 50% retention
            of the advance. Cancellations within 30 days forfeit the advance payment.
          </p>

          <h2 className="font-serif text-2xl text-dark">Delivery Timeline</h2>
          <p>
            Preview galleries are delivered within 48 hours of the event. Final edited
            photographs and films are delivered within 4–6 weeks, depending on the package selected.
          </p>

          <h2 className="font-serif text-2xl text-dark">Copyright</h2>
          <p>
            {SITE_CONFIG.name} retains copyright of all images and films. Clients receive a
            personal use license. Commercial use requires written permission.
          </p>

          <h2 className="font-serif text-2xl text-dark">Force Majeure</h2>
          <p>
            In the event of circumstances beyond our control (natural disasters, government
            restrictions, etc.), we will work with you to reschedule or provide appropriate
            alternatives.
          </p>

          <h2 className="font-serif text-2xl text-dark">Contact</h2>
          <p>
            Questions about these terms? Reach us at{" "}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-accent hover:underline">
              {SITE_CONFIG.email}
            </a>
            .
          </p>
        </div>

        <Button asChild variant="outline" className="mt-12">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
}
