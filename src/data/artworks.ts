export type ArtworkStatus = 'available' | 'sold' | 'on request' | 'upcoming';

export interface Artwork {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  price?: string;
  status: ArtworkStatus;
  tags: string[];
  image: string;
  alt: string;
  featured?: boolean;
  description?: string;
  extraImages?: string[];
}

export const artworks: Artwork[] = [
  {
    slug: 'blush-tulips',
    title: 'Blush Tulips',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '30 × 40 cm',
    price: '£250',
    status: 'available',
    tags: ['floral', 'still-life', 'colour'],
    image: '/artworks/blush-tulips.jpeg',
    alt: 'Blush Tulips by Aline Gordiano',
    featured: true,
    description:
      'A delicate floral study capturing the soft textures and vibrant tones of blooming tulips.',
    extraImages: ['/artworks/blush-tulips-overview.jpeg'],
  },
  {
    slug: 'silent-strength',
    title: 'Silent Strength',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '30 × 40 cm',
    price: '£250',
    status: 'available',
    tags: ['portrait', 'emotion', 'colour'],
    image: '/artworks/silent-strength.jpeg',
    alt: 'Silent Strength by Aline Gordiano',
    featured: true,
    description:
      'An expressive study conveying quiet power and movement through rich reds and textural brushwork.',
    extraImages: ['/artworks/silent-strength-overview.jpeg'],
  },
  {
    slug: 'evening-path',
    title: 'Evening Path',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '30 × 40 cm',
    price: '£250',
    status: 'available',
    tags: ['landscape', 'path', 'atmosphere'],
    image: '/artworks/evening-path.jpeg',
    alt: 'Evening Path by Aline Gordiano',
    featured: true,
    description:
      'A luminous landscape centred on a winding path and expansive sky, balancing softness, distance and painterly atmosphere.',
    extraImages: ['/artworks/evening-path-overview.jpeg'],
  },
  {
    slug: 'quiet-tea',
    title: 'Quiet Tea',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '30 × 40 cm',
    price: '£250',
    status: 'available',
    tags: ['interior', 'still-life', 'light'],
    image: '/artworks/quiet-tea.jpeg',
    alt: 'Quiet Tea by Aline Gordiano',
    featured: true,
    description:
      'A quiet interior moment captured through warm light and stillness — a simple cup of tea resting in the morning glow.',
    extraImages: ['/artworks/quiet-tea-overview.jpeg'],
  },
  {
    slug: 'einstein-portrait',
    title: 'Einstein Portrait',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '60 × 80 cm',
    price: 'Sold for £370',
    status: 'sold',
    tags: ['portrait', 'colour', 'contemporary'],
    image: '/artworks/einstein-portrait.jpeg',
    alt: 'Einstein Portrait by Aline Gordiano',
    featured: false,
    description:
      'A vivid portrait study with expressive colour contrasts and textured brushwork, creating a bold and instantly memorable presence.',
    extraImages: ['/artworks/einstein-portrait-room.jpeg'],
  },
  {
    slug: 'winter-reflection',
    title: 'Winter Reflection',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '35 × 91 cm',
    status: 'available',
    tags: ['landscape', 'winter', 'reflection'],
    image: '/artworks/winter-reflection.jpeg',
    alt: 'Winter Reflection by Aline Gordiano',
    featured: true,
    description:
      'A tranquil winter scene illuminated by a warm sun, reflected across still water in soft, textured brushwork.',
    extraImages: ['/artworks/winter-reflection-overview.jpeg'],
  },
];

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((a) => a.featured);
}
