import type { Artwork } from '@/data/artworks';
import Image from 'next/image';

interface CertificateProps {
  artwork: Artwork;
  certificateNumber: string;
  dateIssued: string;
}

export default function Certificate({ artwork, certificateNumber, dateIssued }: CertificateProps) {
  return (
    <div 
      id="certificate"
      className="relative w-[210mm] h-[297mm] mx-auto overflow-hidden bg-white shadow-2xl print:shadow-none print:m-0 shrink-0 select-none"
    >
      {/* Master Design Reference Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/artworks/certificate-template.jpeg"
          alt="Certificate of Authenticity Template"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dynamic Data Overlay */}
      {/* ARTIST overlay */}
      <div 
        className="absolute left-[39%] text-[13px] text-[#1F1F1F] font-medium z-10 w-[50%]"
        style={{ fontFamily: 'var(--font-inter), sans-serif', top: '43.3%' }}
      >
        Aline Gordiano
      </div>

      {/* TITLE overlay */}
      <div 
        className="absolute left-[39%] text-[13px] text-[#1F1F1F] z-10 w-[50%]"
        style={{ fontFamily: 'var(--font-inter), sans-serif', top: '48.1%' }}
      >
        {artwork.title}
      </div>

      {/* MEDIUM overlay */}
      <div 
        className="absolute left-[39%] text-[13px] text-[#1F1F1F] z-10 w-[50%]"
        style={{ fontFamily: 'var(--font-inter), sans-serif', top: '53%' }}
      >
        {artwork.medium}
      </div>

      {/* SIZE overlay */}
      <div 
        className="absolute left-[39%] text-[13px] text-[#1F1F1F] z-10 w-[50%]"
        style={{ fontFamily: 'var(--font-inter), sans-serif', top: '57.8%' }}
      >
        {artwork.dimensions}
      </div>

      {/* YEAR overlay */}
      <div 
        className="absolute left-[39%] text-[13px] text-[#1F1F1F] z-10 w-[50%]"
        style={{ fontFamily: 'var(--font-inter), sans-serif', top: '62.7%' }}
      >
        {artwork.year}
      </div>

      {/* CERTIFICATE NO overlay */}
      <div 
        className="absolute left-[39%] text-[#1F1F1F] z-10 w-[50%] font-mono tracking-widest text-[11px]"
        style={{ top: '67.7%' }}
      >
        {certificateNumber}
      </div>

      {/* DATE ISSUED overlay */}
      <div 
        className="absolute left-[39%] text-[13px] text-[#1F1F1F] z-10 w-[50%]"
        style={{ fontFamily: 'var(--font-inter), sans-serif', top: '72.4%' }}
      >
        {dateIssued}
      </div>
      
      {/* Note: "EDITION Unique Original" is baked into the template image, so we do not overlay it. */}
    </div>
  );
}
