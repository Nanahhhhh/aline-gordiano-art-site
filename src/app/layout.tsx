import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Analytics from './analytics';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alinegordiano.art'),

  title: {
    default: 'Aline Gordiano | Contemporary Painter in London | Original Acrylic Paintings',
    template: '%s | Aline Gordiano Art',
  },

  description:
    'Original contemporary acrylic paintings by London-based artist Aline Gordiano. Expressive landscapes, portraits and textured artworks available for collectors worldwide.',

  keywords: [
    'contemporary artist London',
    'original acrylic paintings',
    'London based painter',
    'Brazilian artist London',
    'contemporary art London',
    'original artwork for sale',
    'expressive landscape painting',
    'Aline Gordiano',
  ],

  authors: [{ name: 'Aline Gordiano' }],
  creator: 'Aline Gordiano',

  openGraph: {
    title: 'Aline Gordiano | Contemporary Painter in London | Original Acrylic Paintings',
    description:
      'Original contemporary acrylic paintings by London-based artist Aline Gordiano.',
    url: 'https://alinegordiano.art',
    siteName: 'Aline Gordiano Art',
    locale: 'en_GB',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Aline Gordiano | Contemporary Painter in London | Original Acrylic Paintings',
    description:
      'Original contemporary acrylic paintings by London-based artist Aline Gordiano.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F5F2EE]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
