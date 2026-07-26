"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

export function StickyBookingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsVisible(scrollY > 400 && scrollY < docHeight - 800);
    };
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <Link
            href="/booking"
            className="flex items-center justify-center gap-2 w-full py-4 bg-dark text-primary text-sm uppercase tracking-widest"
          >
            <Calendar className="w-4 h-4 text-accent" />
            Book Your Session
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
