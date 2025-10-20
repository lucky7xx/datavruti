import { MetadataRoute } from 'next';
import services from '@/content/services.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.datavruti.com';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/candidates',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
