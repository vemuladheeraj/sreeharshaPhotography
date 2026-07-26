import {
  CATEGORY_FILTER_MAP,
  PORTFOLIO_ITEMS,
  WEDDING_STORIES,
} from "@/constants";
import type { PortfolioItem } from "@/types";

export function resolvePortfolioFilter(categoryParam: string | null): string {
  if (!categoryParam) return "All";

  const normalized = categoryParam.toLowerCase();
  if (CATEGORY_FILTER_MAP[normalized]) {
    return CATEGORY_FILTER_MAP[normalized];
  }

  const directMatch = Object.values(CATEGORY_FILTER_MAP).find(
    (filter) => filter.toLowerCase() === normalized
  );
  if (directMatch) return directMatch;

  return "All";
}

export function filterPortfolioItems(items: readonly PortfolioItem[], filter: string) {
  if (filter === "All") return [...items];
  return items.filter((item) => item.category === filter);
}

export function buildLightboxSlides(items: readonly PortfolioItem[]) {
  return items.map((item) => ({
    src: item.src,
    alt: item.alt,
    title: item.couple ?? item.category,
    description: [item.location, item.date].filter(Boolean).join(" · "),
  }));
}

export function getStoryBySlug(slug: string) {
  return WEDDING_STORIES.find((story) => story.slug === slug);
}

export function getStoryPortfolioItems(slug: string): PortfolioItem[] {
  const story = getStoryBySlug(slug);
  if (!story) return [];

  return PORTFOLIO_ITEMS.filter((item) =>
    (story.imageIds as readonly number[]).includes(item.id)
  ) as PortfolioItem[];
}

export function getStoryCoverItems(): PortfolioItem[] {
  return WEDDING_STORIES.map((story) => {
    const item = PORTFOLIO_ITEMS.find((p) => p.storySlug === story.slug);
    return (
      item ?? {
        id: 0,
        category: story.category,
        width: 800,
        height: 1200,
        src: story.coverImage,
        alt: `${story.couple} wedding story`,
        couple: story.couple,
        location: story.location,
        date: story.date,
        storySlug: story.slug,
      }
    );
  });
}
