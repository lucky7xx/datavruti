import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { defaultSEO } from '@/utils/seo-config';

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: 'data hiring agency, hire data engineers, hire data scientists, AI recruitment, analytics recruitment, data talent, data hiring agency India',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: defaultSEO.canonical,
    siteName: 'DataVruti',
    title: defaultSEO.title as string,
    description: defaultSEO.description as string,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultSEO.title as string,
    description: defaultSEO.description as string,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="font-sans">
        <Navbar />
        <main className="pb-28 md:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
