export const SITE_CONFIG = {
  name: "Sree Harsha Photography",
  tagline: "We Don't Capture Moments. We Preserve Generations.",
  description:
    "Premium wedding and event photography studio capturing emotions, traditions, and timeless memories across Andhra Pradesh and beyond.",
  url: "https://sreeharshaphotography.com",
  locale: "en_IN",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@sreeharshaphotography.com",
  instagram: "https://instagram.com/sreeharshaphotography",
  youtube: "https://youtube.com/@sreeharshaphotography",
  mapsUrl: "https://maps.google.com/?q=Hyderabad,India",
  address: "Jubilee Hills, Hyderabad, Telangana 500033",
  workingHours: "Mon – Sat: 10:00 AM – 7:00 PM",
  responseTime: "We respond within 2 hours",
  showreelUrl: "https://www.youtube.com/embed/1pkdW1N2q_0",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const SITE_STATS = [
  { value: 500, suffix: "+", label: "Weddings Captured" },
  { value: 8, suffix: "+", label: "Years of Excellence" },
  { value: 50, suffix: "+", label: "Cities Covered" },
  { value: 1200, suffix: "+", label: "Happy Families" },
] as const;

export const FEATURED_IN = [
  "WeddingSutra",
  "Hyderabad Times",
  "Telugu Bride",
  "WedMeGood",
] as const;

export const CATEGORY_FILTER_MAP: Record<string, string> = {
  wedding: "Wedding",
  "pre-wedding": "Outdoor",
  engagement: "Events",
  "baby-shoot": "Kids",
  maternity: "Kids",
  "house-warming": "Events",
  birthday: "Events",
  corporate: "Corporate",
  temple: "Traditional",
  family: "Kids",
  drone: "Outdoor",
};

export const WEDDING_IMAGES = {
  heroMain: "/images/reception1.jpg",
  heroMandap: "/images/haldi1.jpg",
  heroCouple: "/images/prewedding1.jpg",
  weddingPortrait: "/images/reception2.jpg",
  preWedding: "/images/prewedding1.jpg",
  engagement: "/images/haldi2.webp",
  haldi: "/images/haldi1.jpg",
  mehendi: "/images/mehendi1.webp",
  baby: "/images/baby1.png",
  maternity: "/images/materniy1.jpg",
  family: "/images/housewarmin1.jpg",
  temple: "/images/kanyadanam2.jpg",
  corporate: "/images/drone1.jpg",
  cinematic: "/images/reception1.jpg",
  story: "/images/mangalasutram1.webp",
} as const;

export const CATEGORIES = [
  {
    id: "wedding",
    title: "Wedding",
    image: WEDDING_IMAGES.weddingPortrait,
    alt: "Editorial wedding portrait capturing a Telugu wedding celebration with elegance",
  },
  {
    id: "pre-wedding",
    title: "Pre Wedding",
    image: WEDDING_IMAGES.preWedding,
    alt: "Romantic pre-wedding storytelling with rich Indian and Telugu cultural atmosphere",
  },
  {
    id: "engagement",
    title: "Engagement",
    image: WEDDING_IMAGES.engagement,
    alt: "Engagement ceremony imagery styled with refined Indian luxury and warmth",
  },
  {
    id: "baby-shoot",
    title: "Baby Shoot",
    image: WEDDING_IMAGES.baby,
    alt: "Warm baby portrait inspired by family traditions and premium storytelling",
  },
  {
    id: "maternity",
    title: "Maternity",
    image: WEDDING_IMAGES.maternity,
    alt: "Elegant maternity portrait with timeless editorial quality",
  },
  {
    id: "house-warming",
    title: "House Warming",
    image: WEDDING_IMAGES.family,
    alt: "Traditional house warming ceremony captured with cultural depth and grace",
  },
  {
    id: "birthday",
    title: "Birthday",
    image: WEDDING_IMAGES.family,
    alt: "Joyful birthday celebration with family warmth and cinematic framing",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    image: WEDDING_IMAGES.corporate,
    alt: "Professional corporate event photography with polished and modern styling",
  },
  {
    id: "temple",
    title: "Temple Ceremonies",
    image: WEDDING_IMAGES.temple,
    alt: "Sacred temple celebration presented with rich traditional atmosphere",
  },
  {
    id: "family",
    title: "Family Portraits",
    image: WEDDING_IMAGES.family,
    alt: "Warm family portrait inspired by Indian togetherness and refined editorial style",
  },
  {
    id: "drone",
    title: "Drone Photography",
    image: WEDDING_IMAGES.cinematic,
    alt: "Aerial wedding venue photography with cinematic grandeur",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: "camera",
    title: "Natural Candid Photography",
    description:
      "Authentic emotions captured in their purest form — no forced poses, only genuine smiles and tears of joy.",
  },
  {
    icon: "temple",
    title: "Traditional Telugu Coverage",
    description:
      "Deep understanding of Telugu wedding rituals, customs, and the sacred moments that matter most to your family.",
  },
  {
    icon: "film",
    title: "Cinematic Editing",
    description:
      "Every frame edited with the warmth of golden hour and the elegance of a wedding film.",
  },
  {
    icon: "drone",
    title: "Drone Coverage",
    description:
      "Breathtaking aerial perspectives that showcase the grandeur of your celebration.",
  },
  {
    icon: "album",
    title: "Premium Albums",
    description:
      "Handcrafted luxury albums with archival-quality prints that become family heirlooms.",
  },
  {
    icon: "clock",
    title: "Fast Delivery",
    description:
      "Preview galleries within 48 hours. Complete delivery without compromising on quality.",
  },
  {
    icon: "users",
    title: "Professional Team",
    description:
      "Experienced photographers and cinematographers who blend into your celebration seamlessly.",
  },
  {
    icon: "map",
    title: "Destination Events",
    description:
      "From Hyderabad to destination weddings across India — we travel wherever your story unfolds.",
  },
] as const;

export const PORTFOLIO_FILTERS = [
  "All",
  "Wedding",
  "Outdoor",
  "Traditional",
  "Events",
  "Kids",
  "Corporate",
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: "Wedding",
    width: 800,
    height: 1200,
    src: WEDDING_IMAGES.heroMain,
    alt: "Editorial wedding portrait with warm ceremonial atmosphere",
    couple: "Priya & Karthik",
    location: "Hyderabad",
    date: "December 2025",
    storySlug: "priya-karthik-hyderabad",
  },
  {
    id: 2,
    category: "Outdoor",
    width: 1200,
    height: 800,
    src: WEDDING_IMAGES.preWedding,
    alt: "Outdoor pre-wedding storytelling in a premium, cinematic setting",
    couple: "Sneha & Arjun",
    location: "Araku Valley",
    date: "November 2025",
    storySlug: "sneha-arjun-araku",
  },
  {
    id: 3,
    category: "Traditional",
    width: 800,
    height: 1000,
    src: WEDDING_IMAGES.temple,
    alt: "Temple-inspired imagery capturing sacred rituals with elegance",
    couple: "Lakshmi & Venkat",
    location: "Tirupati",
    date: "October 2025",
  },
  {
    id: 4,
    category: "Events",
    width: 1200,
    height: 900,
    src: WEDDING_IMAGES.engagement,
    alt: "Grand event photography with rich Indian color and cinematic mood",
    couple: "Divya & Rohan",
    location: "Vijayawada",
    date: "September 2025",
  },
  {
    id: 5,
    category: "Kids",
    width: 800,
    height: 800,
    src: WEDDING_IMAGES.baby,
    alt: "Family and baby moments photographed with timeless editorial warmth",
    couple: "The Reddy Family",
    location: "Hyderabad",
    date: "August 2025",
  },
  {
    id: 6,
    category: "Wedding",
    width: 1200,
    height: 800,
    src: WEDDING_IMAGES.heroMandap,
    alt: "Wedding story told through refined, high-end ceremonial imagery",
    couple: "Ananya & Ravi",
    location: "Goa",
    date: "January 2026",
    storySlug: "ananya-ravi-goa",
  },
  {
    id: 7,
    category: "Corporate",
    width: 1200,
    height: 800,
    src: WEDDING_IMAGES.corporate,
    alt: "Corporate event visuals styled with elegance and modern luxury",
    couple: "TechCorp India",
    location: "Bangalore",
    date: "July 2025",
  },
  {
    id: 8,
    category: "Traditional",
    width: 800,
    height: 1200,
    src: WEDDING_IMAGES.story,
    alt: "Traditional ceremony visuals with rich heritage tones and depth",
    couple: "Meera & Aditya",
    location: "Warangal",
    date: "June 2025",
  },
  {
    id: 9,
    category: "Outdoor",
    width: 1200,
    height: 900,
    src: WEDDING_IMAGES.cinematic,
    alt: "Outdoor celebration photography framed with cinematic editorial composition",
    couple: "Kavya & Nikhil",
    location: "Visakhapatnam",
    date: "May 2025",
  },
  {
    id: 10,
    category: "Wedding",
    width: 800,
    height: 1000,
    src: WEDDING_IMAGES.heroCouple,
    alt: "Emotional wedding moment captured with premium cultural storytelling",
    couple: "Priya & Karthik",
    location: "Hyderabad",
    date: "December 2025",
    storySlug: "priya-karthik-hyderabad",
  },
  {
    id: 11,
    category: "Events",
    width: 1200,
    height: 800,
    src: WEDDING_IMAGES.haldi,
    alt: "Live celebration imagery with cinematic energy and luxury styling",
    couple: "Ananya & Ravi",
    location: "Goa",
    date: "January 2026",
    storySlug: "ananya-ravi-goa",
  },
  {
    id: 12,
    category: "Kids",
    width: 800,
    height: 1000,
    src: WEDDING_IMAGES.mehendi,
    alt: "Newborn and family portrait styled with an elevated editorial finish",
    couple: "Sneha & Arjun",
    location: "Araku Valley",
    date: "November 2025",
    storySlug: "sneha-arjun-araku",
  },
] as const;

export const WEDDING_STORIES = [
  {
    slug: "priya-karthik-hyderabad",
    couple: "Priya & Karthik",
    location: "Hyderabad",
    date: "December 2025",
    category: "Telugu Wedding",
    coverImage: WEDDING_IMAGES.heroMain,
    description:
      "A three-day Telugu wedding celebration blending temple traditions with a grand reception at a heritage venue in Jubilee Hills.",
    imageIds: [1, 6, 10],
    quote:
      "Sree Harsha didn't just photograph our wedding — they preserved every emotion, every tear, every laugh.",
    quoteAuthor: "Priya & Karthik",
  },
  {
    slug: "ananya-ravi-goa",
    couple: "Ananya & Ravi",
    location: "Goa",
    date: "January 2026",
    category: "Destination Wedding",
    coverImage: WEDDING_IMAGES.heroMandap,
    description:
      "A sun-kissed destination wedding on the beaches of Goa, where Telugu traditions met tropical elegance.",
    imageIds: [6, 11],
    quote:
      "The cinematic film they created made our families cry happy tears. Unmatched understanding of our traditions.",
    quoteAuthor: "Ananya & Ravi",
  },
  {
    slug: "sneha-arjun-araku",
    couple: "Sneha & Arjun",
    location: "Araku Valley",
    date: "November 2025",
    category: "Pre-Wedding",
    coverImage: WEDDING_IMAGES.preWedding,
    description:
      "A romantic pre-wedding journey through the misty valleys of Araku — golden hour, coffee plantations, and endless love.",
    imageIds: [2, 12],
    quote:
      "Our pre-wedding shoot felt like a romantic film. The results were beyond our wildest dreams.",
    quoteAuthor: "Sneha & Arjun",
  },
] as const;

export const PRICING_PACKAGES = [
  {
    id: "essential",
    name: "Essential",
    price: "₹75,000",
    description: "Perfect for intimate ceremonies and single-day celebrations.",
    features: [
      "Single day coverage (8 hours)",
      "1 lead photographer",
      "300+ edited photos",
      "Online gallery delivery",
      "Preview within 48 hours",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹1,50,000",
    description: "Our most popular package for complete wedding coverage.",
    features: [
      "Two day coverage (16 hours)",
      "2 photographers + 1 cinematographer",
      "800+ edited photos",
      "5–7 min cinematic highlight film",
      "Premium online gallery",
      "Complimentary pre-wedding consultation",
    ],
    highlighted: true,
  },
  {
    id: "luxury",
    name: "Luxury",
    price: "₹3,50,000",
    description: "The ultimate experience for grand celebrations and destination weddings.",
    features: [
      "Multi-day full coverage",
      "3 photographers + 2 cinematographers",
      "Drone aerial coverage",
      "15–20 min cinematic wedding film",
      "Same-day highlight reel",
      "Luxury handcrafted album",
      "Dedicated account manager",
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya & Karthik",
    event: "Wedding — Hyderabad",
    image: WEDDING_IMAGES.heroMain,
    rating: 5,
    text: "Sree Harsha didn't just photograph our wedding — they preserved every emotion, every tear, every laugh. When we look at our album, we're transported back to the most magical day of our lives.",
  },
  {
    id: 2,
    name: "Ananya & Ravi",
    event: "Destination Wedding — Goa",
    image: WEDDING_IMAGES.preWedding,
    rating: 5,
    text: "The cinematic film they created made our families cry happy tears. Their understanding of Telugu traditions while bringing modern creativity is unmatched.",
  },
  {
    id: 3,
    name: "Lakshmi Family",
    event: "House Warming — Vijayawada",
    image: WEDDING_IMAGES.family,
    rating: 5,
    text: "Professional, warm, and incredibly talented. They captured the essence of our grihapravesham with such grace. Every photo tells a story.",
  },
  {
    id: 4,
    name: "Sneha & Arjun",
    event: "Pre-Wedding — Araku Valley",
    image: WEDDING_IMAGES.preWedding,
    rating: 5,
    text: "Our pre-wedding shoot felt like a romantic film. The team made us comfortable, and the results were beyond our wildest dreams.",
  },
  {
    id: 5,
    name: "TechCorp India",
    event: "Corporate Event — Bangalore",
    image: WEDDING_IMAGES.corporate,
    rating: 5,
    text: "Impeccable professionalism for our annual conference. Fast delivery, stunning quality, and they understood our brand perfectly.",
  },
] as const;

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    src: WEDDING_IMAGES.preWedding,
    alt: "Elegant pre-wedding storytelling with rich cultural atmosphere",
    link: SITE_CONFIG.instagram,
  },
  {
    id: 2,
    src: WEDDING_IMAGES.heroMandap,
    alt: "Wedding ceremony imagery with premium editorial warmth",
    link: SITE_CONFIG.instagram,
  },
  {
    id: 3,
    src: WEDDING_IMAGES.cinematic,
    alt: "Cinematic wedding storytelling rendered in rich Indian tones",
    link: SITE_CONFIG.instagram,
  },
  {
    id: 4,
    src: WEDDING_IMAGES.temple,
    alt: "Temple ceremony photography with sacred and heritage-rich framing",
    link: SITE_CONFIG.instagram,
  },
  {
    id: 5,
    src: WEDDING_IMAGES.family,
    alt: "Family togetherness and wedding memories captured with a luxury editorial tone",
    link: SITE_CONFIG.instagram,
  },
  {
    id: 6,
    src: WEDDING_IMAGES.heroMain,
    alt: "Telugu wedding portrait with refined lighting and timeless emotion",
    link: SITE_CONFIG.instagram,
  },
] as const;

export const BOOKING_STEPS = [
  {
    step: 1,
    title: "Contact",
    description: "Reach out via WhatsApp, phone, or our booking form. Share your event details and vision.",
  },
  {
    step: 2,
    title: "Discussion",
    description: "We meet to understand your traditions, preferences, and create a customized coverage plan.",
  },
  {
    step: 3,
    title: "Shoot",
    description: "Our team arrives prepared, blending seamlessly into your celebration to capture every moment.",
  },
  {
    step: 4,
    title: "Editing",
    description: "Each frame is carefully edited with cinematic warmth and natural colors that tell your story.",
  },
  {
    step: 5,
    title: "Delivery",
    description: "Receive your online gallery, films, and premium albums — memories preserved for generations.",
  },
] as const;

export const SERVICES = [
  {
    title: "Wedding Photography",
    description:
      "Complete coverage of your sacred union — from muhurtham to reception, every ritual documented with reverence and artistry.",
    image: WEDDING_IMAGES.heroMain,
  },
  {
    title: "Wedding Films",
    description:
      "Cinematic wedding films that feel like watching your love story unfold on the silver screen.",
    image: WEDDING_IMAGES.cinematic,
  },
  {
    title: "Pre Wedding",
    description:
      "Romantic storytelling sessions in breathtaking locations — the prelude to your forever.",
    image: WEDDING_IMAGES.preWedding,
  },
  {
    title: "Engagement",
    description:
      "Celebrate your promise with elegant coverage of ring ceremonies and intimate gatherings.",
    image: WEDDING_IMAGES.engagement,
  },
  {
    title: "Haldi",
    description:
      "The golden glow of haldi ceremonies captured with warmth, laughter, and vibrant energy.",
    image: WEDDING_IMAGES.haldi,
  },
  {
    title: "Mehendi",
    description:
      "Intricate mehendi designs and joyful celebrations documented in rich, detailed frames.",
    image: WEDDING_IMAGES.mehendi,
  },
  {
    title: "Sangeet",
    description:
      "The rhythm of dance, music, and celebration — your sangeet night brought to life.",
    image: WEDDING_IMAGES.heroMandap,
  },
  {
    title: "Reception",
    description:
      "Grand reception coverage with elegant portraits and candid moments of celebration.",
    image: WEDDING_IMAGES.heroCouple,
  },
  {
    title: "Temple Wedding",
    description:
      "Sacred temple ceremonies covered with deep respect for tradition and spiritual significance.",
    image: WEDDING_IMAGES.temple,
  },
  {
    title: "Baby Shoot",
    description:
      "Gentle, heartwarming sessions capturing the innocence and wonder of your little one.",
    image: WEDDING_IMAGES.baby,
  },
  {
    title: "Maternity",
    description:
      "Celebrate the beauty of motherhood with elegant, emotive maternity portraits.",
    image: WEDDING_IMAGES.maternity,
  },
  {
    title: "Birthday",
    description:
      "Joyful birthday celebrations captured with the energy and happiness they deserve.",
    image: WEDDING_IMAGES.family,
  },
  {
    title: "Corporate",
    description:
      "Professional event photography for conferences, launches, and corporate gatherings.",
    image: WEDDING_IMAGES.corporate,
  },
  {
    title: "Product Photography",
    description:
      "Stunning product visuals that elevate your brand with premium commercial photography.",
    image: WEDDING_IMAGES.cinematic,
  },
  {
    title: "Drone Coverage",
    description:
      "Spectacular aerial perspectives that reveal the scale and beauty of your event.",
    image: WEDDING_IMAGES.heroCouple,
  },
  {
    title: "Album Design",
    description:
      "Luxury handcrafted albums designed to become treasured family heirlooms for generations.",
    image: WEDDING_IMAGES.story,
  },
] as const;

export const EVENT_TYPES = [
  "Wedding",
  "Pre Wedding",
  "Engagement",
  "Baby Shoot",
  "Maternity",
  "House Warming",
  "Birthday",
  "Corporate Event",
  "Temple Ceremony",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "Above ₹5,00,000",
] as const;
