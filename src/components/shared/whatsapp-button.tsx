"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/constants";
import { formatWhatsAppLink } from "@/lib/utils";

export function WhatsAppButton() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const toggle = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const stickyCtaVisible = scrollY > 400 && scrollY < docHeight - 800;
      setHidden(stickyCtaVisible && window.innerWidth < 1024);
    };

    window.addEventListener("scroll", toggle, { passive: true });
    window.addEventListener("resize", toggle);
    toggle();

    return () => {
      window.removeEventListener("scroll", toggle);
      window.removeEventListener("resize", toggle);
    };
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.a
          href={formatWhatsAppLink(
            SITE_CONFIG.whatsapp,
            "Hello! I'd like to inquire about photography services."
          )}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow lg:bottom-6 max-lg:bottom-20"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse motion-reduce:animate-none" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
