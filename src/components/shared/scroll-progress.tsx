"use client";

import { useScrollProgress } from "@/hooks/use-lenis";

export function ScrollProgress() {
  const progressRef = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-secondary/30">
      <div
        ref={progressRef}
        className="h-full bg-accent transition-none"
        style={{ width: "0%" }}
      />
    </div>
  );
}
