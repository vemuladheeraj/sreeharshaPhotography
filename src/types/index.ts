export type NavLink = {
  href: string;
  label: string;
};

export type Category = {
  id: string;
  title: string;
  image: string;
  alt: string;
};

export type PortfolioItem = {
  id: number;
  category: string;
  width: number;
  height: number;
  src: string;
  alt: string;
  couple?: string;
  location?: string;
  date?: string;
  storySlug?: string;
};

export type Testimonial = {
  id: number;
  name: string;
  event: string;
  image: string;
  rating: number;
  text: string;
};

export type Service = {
  title: string;
  description: string;
  image: string;
};

export type WeddingStory = {
  slug: string;
  couple: string;
  location: string;
  date: string;
  category: string;
  coverImage: string;
  description: string;
  imageIds: number[];
  quote: string;
  quoteAuthor: string;
};

export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type BookingFormData = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  location: string;
  budget: string;
  message?: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
