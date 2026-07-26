import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { SITE_CONFIG } from "@/constants";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";
import { LotusDivider } from "@/components/decorations/cultural-elements";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sree Harsha Photography. We respond within 2 hours. Call, WhatsApp, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear about your celebration. Reach out anytime."
        image="/images/reception1.jpg"
      />

      <section className="section-padding bg-primary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif text-dark mb-4">Send a Message</h2>
              <p className="text-text-light mb-8">
                Fill out the form and we&apos;ll get back to you within 2 hours.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-serif text-dark mb-4">Get in Touch</h2>
              <LotusDivider className="mb-8 !mx-0 !w-32" />

              <div className="space-y-6 mb-10">
                <a
                  href={formatPhoneLink(SITE_CONFIG.phone)}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-dark transition-colors">
                    <Phone className="w-5 h-5 text-accent group-hover:text-dark" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-light">Phone</p>
                    <p className="text-dark">{SITE_CONFIG.phone}</p>
                  </div>
                </a>

                <a
                  href={formatWhatsAppLink(SITE_CONFIG.whatsapp, "Hello! I'd like to inquire about photography services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-colors">
                    <MessageCircle className="w-5 h-5 text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-light">WhatsApp</p>
                    <p className="text-dark">Chat with us instantly</p>
                  </div>
                </a>

                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-dark transition-colors">
                    <Mail className="w-5 h-5 text-accent group-hover:text-dark" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-light">Email</p>
                    <p className="text-dark">{SITE_CONFIG.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-light">Studio</p>
                    <p className="text-dark">{SITE_CONFIG.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-light">Hours</p>
                    <p className="text-dark">{SITE_CONFIG.workingHours}</p>
                    <p className="text-sm text-accent mt-1">{SITE_CONFIG.responseTime}</p>
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-secondary/50 border border-secondary overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.352489782!2d78.407!3d17.423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzIyLjgiTiA3OMKwMjQnMjUuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sree Harsha Photography Studio Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
