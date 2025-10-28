import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  title: 'datavruti | Hire Data & Analytics Talent',
  description: 'Leading recruitment agency connecting businesses with data, analytics, and AI professionals. Expert hiring solutions for data engineers, data scientists, and analytics consultants.',
  canonical: 'https://www.datavruti.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.datavruti.com',
    siteName: 'datavruti',
    title: 'datavruti | Hire Data & Analytics Talent',
    description: 'Leading recruitment agency connecting businesses with data, analytics, and AI professionals.',
    images: [
      {
        url: 'https://www.datavruti.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'datavruti - Hire Data & Analytics Talent',
      },
    ],
  },
  twitter: {
    handle: '@datavruti',
    site: '@datavruti',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'data hiring agency, hire data engineers, hire data scientists, AI recruitment, analytics recruitment, data talent, data hiring agency India, tech recruitment',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'datavruti',
  url: 'https://www.datavruti.com',
  logo: 'https://www.datavruti.com/images/logo.png',
  description: 'Leading recruitment agency connecting businesses with data, analytics, and AI professionals.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: [
    // Add social media links here
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'datavruti',
  image: 'https://www.datavruti.com/images/logo.png',
  '@id': 'https://www.datavruti.com',
  url: 'https://www.datavruti.com',
  telephone: '',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
};
