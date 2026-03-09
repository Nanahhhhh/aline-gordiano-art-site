import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Aline Gordiano — a London-based contemporary artist whose practice centres on expressive acrylic painting, colour and light.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="mb-20 flex flex-col gap-4 max-w-xl">
        <div className="divider" aria-hidden />
        <h1 className="section-title">About Aline</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="relative aspect-[3/4] bg-[#EDE8E2] overflow-hidden">
          <Image
            src="/artist-placeholder.svg"
            alt="Portrait of Aline Gordiano"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h2
              className="text-2xl text-[#C5521A] mb-4"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
            >
              Artist Statement
            </h2>
            <p className="text-sm leading-relaxed text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Aline Gordiano is a Brazilian artist based in London. Her work focuses on original acrylic painting, exploring colour, atmosphere and textured mark-making through portrait and landscape compositions.
            </p>
          </div>

          <div>
            <h2
              className="text-2xl text-[#C5521A] mb-4"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
            >
              Practice
            </h2>
            <p className="text-sm leading-relaxed text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Working primarily in acrylic on canvas, she develops paintings with an emphasis on surface, contrast and emotional resonance. Her practice moves between luminous landscapes and expressive figurative studies, always guided by a strong sensitivity to colour and painterly texture.
            </p>
          </div>

          <div>
            <h2
              className="text-2xl text-[#C5521A] mb-4"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
            >
              Works & Availability
            </h2>
            <p className="text-sm leading-relaxed text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Her current body of work includes original one-of-a-kind paintings, with selected prints in development. Available works are presented through the gallery, and enquiries regarding collectors, availability and future releases can be made through the contact page.
            </p>
            <p className="text-sm leading-relaxed text-[#6B6B6B] mt-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              <strong className="text-[#1F1F1F] font-medium">Based in London, United Kingdom.</strong>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link href="/gallery" className="btn-primary" id="about-view-gallery">
              View Gallery
            </Link>
            <Link href="/contact" className="btn-outline" id="about-contact">
              Artwork Enquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
