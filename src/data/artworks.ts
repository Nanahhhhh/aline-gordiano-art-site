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
    featured: true,
    description:
      'A vivid portrait study with expressive colour contrasts and textured brushwork, creating a bold and instantly memorable presence.',
    extraImages: ['/artworks/einstein-portrait-room.jpeg'],
  },
  {
    slug: 'evening-path',
    title: 'Evening Path',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '30 × 40 cm',
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
    slug: 'silent-strength',
    title: 'Silent Strength',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '30 × 40 cm',
    status: 'available',
    tags: ['portrait', 'emotion', 'colour'],
    image: '/artworks/silent-strength.jpeg',
    alt: 'Silent Strength by Aline Gordiano',
    featured: true,
    description:
      'An expressive study conveying quiet power and movement through rich reds and textural brushwork.',
    extraImages: ['/artworks/silent-strength-overview.jpeg'],
  },
];

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((a) => a.featured);
}
