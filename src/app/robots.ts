import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/sanity/'],
    },
    sitemap: 'https://almousli.se/sitemap.xml',
  };
}
