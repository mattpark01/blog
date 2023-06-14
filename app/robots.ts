export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://mattpark.org/sitemap.xml',
    host: 'https://mattpark.org',
  };
}
