/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const fetch = require('node-fetch');
const prettier = require('prettier');

const getDate = new Date().toISOString();
const domain = 'https://freedomevenden.com';
const fetchURL =
  'https://freedom-blog.herokuapp.com/api/articles/?page_size=20';

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });

async function generatePostsSitemap() {
  const res = await fetch(fetchURL)
    .then((r) => r.json())
    .catch((e) => console.log(e));

  const articles = res.results.map((article) => article.slug);

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
    ${articles.map(
      (slug) =>
        `
      <url>
      <loc>${`${domain}/articles/${slug}`}</loc>
      <lastmod>${getDate}</lastmod>
      </url>
      </urlset>
      `
    )}
`;

  const formattedSitemap = formatted(sitemap);

  fs.writeFileSync(
    './public/sitemap/sitemap-articles.xml',
    formattedSitemap,
    'utf8'
  );
}

generatePostsSitemap();
