import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Original Artworks',
  description:
    'Discover original oil and acrylic paintings by Aline Gordiano. Each artwork is a unique, hand-painted piece created in London and accompanied by a Certificate of Authenticity.',
  openGraph: {
    images: [{ url: '/artworks/quiet-tea.jpeg', alt: 'Quiet Tea by Aline Gordiano' }],
  },
};

const FEATURES = [
  {
    title: 'Original Artwork',
    description: 'Each piece is hand-painted using premium oil and acrylic paints on high-quality canvas or linen.',
  },
  {
    title: 'One-of-a-Kind',
    description: 'A unique creation with its own rich texture, depth, and emotional resonance. Accompanied by a signed Certificate of Authenticity.',
  },
  {
    title: 'Worldwide Shipping',
    description: 'Carefully packaged and fully insured, shipped securely from the London studio to collectors worldwide.',
  },
];

export default function OriginalArtworksPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="pt-36 pb-24 px-6 lg:px-12 max-w-4xl mx-auto text-center fade-in">
        <div className="flex flex-col items-center gap-6">
          <div className="divider mx-auto" aria-hidden />
          <h1 className="section-title">Original Artworks</h1>
          <p
            className="text-base text-[#6B6B6B] max-w-2xl leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Discover original oil and acrylic paintings by Aline Gordiano. Each artwork is a unique, hand-painted piece created in London and accompanied by a Certificate of Authenticity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="https://www.etsy.com/shop/AlineGordianoArtCo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              id="shop-etsy"
            >
              Shop on Etsy
            </a>
            <Link href="/gallery" className="btn-outline" id="shop-gallery">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 bg-[#F9F8F6]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            {FEATURES.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-4">
                <div className="w-8 h-px bg-[#C5521A]" aria-hidden />
                <h3
                  className="text-lg text-[#1F1F1F]"
                  style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 500 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm text-[#6B6B6B] leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
