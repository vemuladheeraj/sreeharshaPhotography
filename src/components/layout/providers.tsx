"use client";

import { Toaster } from "sonner";
import { useLenis } from "@/hooks/use-lenis";

export function Providers({ children }: { children: React.ReactNode }) {
  useLenis();
  return (
    <>
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          classNames: {
            toast:
              "bg-dark text-primary border border-accent/30 font-sans shadow-xl",
            title: "font-serif text-accent",
            description: "text-primary/70",
          },
        }}
      />
    </>
  );
}
