import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our wedding, pre-wedding, and event photography portfolio. Candid moments, traditional ceremonies, and cinematic storytelling.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
