'use client';

import { use, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { getArtworkBySlug } from '@/data/artworks';
import Certificate from '@/components/Certificate';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CertificatePage({ params }: PageProps) {
  const { slug } = use(params);
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    notFound();
  }

  // Generate deterministic details for the artwork
  const dateStr = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  // Simple deterministic ID
  const certId = `AG-${artwork.year}-${slug.substring(0, 4).toUpperCase()}-01`;

  // Hide the global navbar when on this page
  useEffect(() => {
    document.body.classList.add('certificate-view');
    return () => {
      document.body.classList.remove('certificate-view');
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#E5E0D8] p-8 md:p-12 flex flex-col items-center print:p-0 print:bg-white print:m-0 w-full">
      {/* Floating Action Bar - Hidden in print */}
      <div className="fixed bottom-8 bg-[#1F1F1F] shadow-2xl px-6 py-4 rounded-full flex items-center gap-4 print:hidden z-50">
        <button 
          onClick={() => window.print()}
          className="bg-[#C5521A] text-white hover:bg-[#D4632F] rounded-full px-5 py-2.5 text-xs tracking-widest uppercase transition-colors"
          style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
        >
          Print / Save PDF
        </button>
        <div className="w-px h-6 bg-white/20" />
        <Link 
          href={`/gallery/${artwork.slug}`}
          className="text-white hover:text-[#C5521A] text-xs tracking-widest uppercase transition-colors"
          style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
        >
          Back to Artwork
        </Link>
      </div>

      {/* Certificate Viewer Area */}
      <div className="w-full flex justify-center max-w-[100vw] overflow-visible">
        <div className="origin-top transform md:scale-100 scale-[0.6] sm:scale-[0.8] mb-32 md:mb-0 print:scale-100 print:mb-0">
          <Certificate 
            artwork={artwork} 
            certificateNumber={certId} 
            dateIssued={dateStr} 
          />
        </div>
      </div>
    </div>
  );
}
