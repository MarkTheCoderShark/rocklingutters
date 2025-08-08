/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')

const HOST = 'rocklingutterguard.com'
const BASE_URL = `https://${HOST}`
const OUTPUT = path.join(process.cwd(), 'public', 'sitemap.xml')

const cities = require('./cities.json')

const now = new Date().toISOString()

const staticRoutes = [
  '/', '/services/', '/get-quote/', '/faq/', '/about-us/', '/privacy-policy/', '/terms-of-service/', '/blog/'
]

const serviceDetail = [
  '/services/gutter-guard-installation/',
  '/services/gutter-cleaning/',
  '/services/gutter-installation/'
]

const citySlugs = cities.map(c => c.toLowerCase().replace(/\s+/g,'-'))

const dynamicRoutes = [
  ...citySlugs.map(slug => `/service-areas/${slug}/`),
  ...citySlugs.map(slug => `/services/gutter-guard-installation/${slug}/`),
  ...citySlugs.map(slug => `/services/gutter-cleaning/${slug}/`),
]

const blogPosts = [
  '/blog/why-gutter-guards/',
  '/blog/gutter-cleaning-costs/',
  '/blog/how-gutter-guards-work/'
]

const urls = [
  ...staticRoutes,
  ...serviceDetail,
  ...dynamicRoutes,
  ...blogPosts,
]

function renderUrl(loc, priority = '0.7', changefreq = 'weekly') {
  return `  <url>\n    <loc>${BASE_URL}${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => renderUrl(u)).join('\n')}\n</urlset>`

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true })
fs.writeFileSync(OUTPUT, xml)
console.log(`Sitemap written to ${OUTPUT}`) 