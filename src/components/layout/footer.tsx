import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/icons/social-icons";
import { SITE_CONFIG } from "@/constants";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";
import { LotusDivider } from "@/components/decorations/cultural-elements";

export function Footer() {
  return (
    <footer className="bg-dark text-primary/70 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[100px]" />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-luxury">
          <LotusDivider className="mb-12 opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="font-serif text-2xl text-primary mb-2">
                Sree Harsha
              </h3>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
                Photography
              </p>
              <p className="text-sm leading-relaxed text-primary/50">
                Preserving generations through the art of emotional storytelling.
                Based in Hyderabad, serving celebrations across India.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/services", label: "Services" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/booking", label: "Book a Session" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={formatPhoneLink(SITE_CONFIG.phone)}
                    className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
                  >
                    <Phone className="w-4 h-4 text-accent" />
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={formatWhatsAppLink(SITE_CONFIG.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-accent" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {SITE_CONFIG.address}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent mb-6">
                Follow Us
              </h4>
              <div className="flex gap-4 mb-6">
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                  aria-label="Google Maps"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-primary/40">{SITE_CONFIG.workingHours}</p>
            </div>
          </div>

          <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary/40">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs text-primary/40 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-primary/40 hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
