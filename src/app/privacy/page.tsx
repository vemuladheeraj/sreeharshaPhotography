import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_CONFIG.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-primary pt-32">
      <div className="container-luxury max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-dark mb-8">Privacy Policy</h1>
        <p className="text-sm text-text-light mb-12">Last updated: July 2026</p>

        <div className="prose prose-lg max-w-none text-text space-y-6">
          <p>
            At {SITE_CONFIG.name}, we respect your privacy and are committed to protecting
            your personal information. This policy outlines how we collect, use, and safeguard
            your data.
          </p>

          <h2 className="font-serif text-2xl text-dark">Information We Collect</h2>
          <p>
            When you contact us or book our services, we may collect your name, email address,
            phone number, event details, and any messages you send us through our forms.
          </p>

          <h2 className="font-serif text-2xl text-dark">How We Use Your Information</h2>
          <p>
            We use your information solely to respond to inquiries, provide photography services,
            deliver your photographs and films, and communicate about your booking. We never sell
            or share your personal data with third parties for marketing purposes.
          </p>

          <h2 className="font-serif text-2xl text-dark">Photographs & Consent</h2>
          <p>
            Photographs taken during your event may be used in our portfolio and marketing
            materials only with your explicit consent. You may opt out at any time by contacting us.
          </p>

          <h2 className="font-serif text-2xl text-dark">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information
            and deliver your media through secure, password-protected online galleries.
          </p>

          <h2 className="font-serif text-2xl text-dark">Contact</h2>
          <p>
            For privacy-related inquiries, contact us at{" "}
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
