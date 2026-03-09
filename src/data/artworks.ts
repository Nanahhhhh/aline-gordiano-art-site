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
    status: 'available',
    tags: ['portrait', 'colour', 'contemporary'],
    image: '/artworks/einstein-portrait.svg',
    alt: 'Einstein Portrait by Aline Gordiano',
    featured: true,
    description:
      'A vivid portrait study with expressive colour contrasts and textured brushwork, creating a bold and instantly memorable presence.',
  },
  {
    slug: 'red-horse-study',
    title: 'Red Horse Study',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '30 × 40 cm',
    status: 'available',
    tags: ['animal', 'portrait', 'texture'],
    image: '/artworks/red-horse-study.svg',
    alt: 'Red Horse Study by Aline Gordiano',
    featured: true,
    description:
      'A warm and expressive horse portrait with strong contrast, movement and rich colour transitions.',
  },
  {
    slug: 'evening-path',
    title: 'Evening Path',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: '30 × 40 cm',
    status: 'available',
    tags: ['landscape', 'path', 'atmosphere'],
    image: '/artworks/evening-path.svg',
    alt: 'Evening Path by Aline Gordiano',
    featured: true,
    description:
      'A luminous landscape centred on a winding path and expansive sky, balancing softness, distance and painterly atmosphere.',
  },
  {
    slug: 'morning-cup',
    title: 'Morning Cup',
    year: 2026,
    medium: 'Acrylic on canvas',
    dimensions: 'TBC',
    status: 'upcoming',
    tags: ['interior', 'still life'],
    image: '/artworks/morning-cup.svg',
    alt: 'Morning Cup in progress',
    description:
      'A quiet interior study built around morning light, shadow and stillness, exploring warmth, routine and atmosphere.',
  },
  {
    slug: 'luminous-earth',
    title: 'Luminous Earth',
    year: 2025,
    medium: 'Acrylic on canvas',
    dimensions: '60 × 80 cm',
    price: '£560',
    status: 'sold',
    tags: ['earth tones', 'abstract', 'light'],
    image: '/artworks/luminous-earth.svg',
    alt: 'Luminous Earth by Aline Gordiano',
    description:
      'Marked as sold to help the site show both available and sold work sections in a more professional gallery format.',
  },
  {
    slug: 'aurora-study',
    title: 'Aurora Study',
    year: 2025,
    medium: 'Acrylic on canvas',
    dimensions: '50 × 70 cm',
    price: '£430',
    status: 'sold',
    tags: ['colour', 'light', 'atmosphere'],
    image: '/artworks/aurora-study.svg',
    alt: 'Aurora Study by Aline Gordiano',
    description:
      'A temporary sold-work record, useful for showing credibility and a more complete artist portfolio layout.',
  },
];

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((a) => a.featured);
}
