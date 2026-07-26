import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">404</p>
        <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6">
          Lost in the Moment
        </h1>
        <p className="text-primary/60 text-lg mb-10 max-w-md mx-auto">
          The page you&apos;re looking for seems to have wandered off frame. Let&apos;s get you
          back to the story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="gold" size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="glass" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
