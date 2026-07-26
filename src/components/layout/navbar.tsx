"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-dark focus:text-sm"
      >
        Skip to content
      </a>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[90] transition-all duration-500",
          isScrolled
            ? "bg-primary/95 backdrop-blur-xl shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="container-luxury px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <Link href="/" className="group">
            <span
              className={cn(
                "font-serif text-xl md:text-2xl tracking-wide transition-colors",
                isScrolled ? "text-dark" : "text-primary"
              )}
            >
              Sree Harsha
            </span>
            <span
              className={cn(
                "block text-[10px] uppercase tracking-[0.3em] transition-colors",
                isScrolled ? "text-accent" : "text-primary/60"
              )}
            >
              Photography
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = isActiveLink(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-xs uppercase tracking-widest transition-colors relative group",
                    active
                      ? "text-accent"
                      : isScrolled
                        ? "text-text hover:text-dark"
                        : "text-primary/80 hover:text-primary"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              variant={isScrolled ? "default" : "glass"}
              size="sm"
              magnetic
            >
              <Link href="/booking">Book a Session</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled ? "text-dark" : "text-primary"
            )}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] bg-dark/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {NAV_LINKS.map((link, i) => {
                const active = isActiveLink(pathname, link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "text-2xl font-serif transition-colors",
                        active ? "text-accent" : "text-primary hover:text-accent"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <Button asChild variant="gold" className="mt-4">
                <Link href="/booking">Book a Session</Link>
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
