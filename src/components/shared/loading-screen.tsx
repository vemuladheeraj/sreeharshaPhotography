"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADER_KEY = "shp-visited";
const LOADER_DURATION = 1000;

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem(LOADER_KEY);
    if (visited) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem(LOADER_KEY, "1");
      setIsLoading(false);
    }, LOADER_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
        >
          <div className="relative w-32 h-32 mb-8">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ rotate: i * 60, scale: 1 }}
                animate={{ rotate: i * 60 + 360, scale: [1, 0.3, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.08,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-center"
                style={{
                  clipPath: "polygon(50% 50%, 50% 0%, 75% 15%)",
                  background: "linear-gradient(135deg, #C8A96A, #E8D8C4)",
                  opacity: 0.8,
                }}
              />
            ))}
            <div className="absolute inset-4 rounded-full border border-accent/30" />
            <div className="absolute inset-8 rounded-full bg-dark" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary/60 text-xs uppercase tracking-[0.4em] font-light"
          >
            Sree Harsha Photography
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: LOADER_DURATION / 1000, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-[2px] bg-accent origin-left w-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
