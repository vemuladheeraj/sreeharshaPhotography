import { HeroSection } from "@/sections/home/hero";
import { CategoriesSection } from "@/sections/home/categories";
import { AboutSection } from "@/sections/home/about";
import { WhyChooseUsSection } from "@/sections/home/why-choose-us";
import { PortfolioSection } from "@/sections/home/portfolio";
import { CinematicSection } from "@/sections/home/cinematic";
import { TestimonialsSection } from "@/sections/home/testimonials";
import { InstagramSection } from "@/sections/home/instagram";
import { BookingProcessSection } from "@/sections/home/booking-process";
import { CTASection } from "@/sections/home/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <CinematicSection />
      <TestimonialsSection />
      <InstagramSection />
      <BookingProcessSection />
      <CTASection />
    </>
  );
}
