const fs = require('fs');
const path = require('path');

// Configuration des pages du site
const pages = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/soins',
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/specialites',
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/notre-cabinet',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/journal',
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/praticien/arnaud-benhamou',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Génération du sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://www.maisonsealiah.fr';
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  pages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Écriture du fichier sitemap
  const sitemapPath = path.join(__dirname, '../dist/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  
  console.log('✅ Sitemap généré avec succès:', sitemapPath);
};

// Génération du robots.txt
const generateRobots = () => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://www.maisonsealiah.fr/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /private/

# Allow important pages
Allow: /
Allow: /soins
Allow: /specialites
Allow: /notre-cabinet
Allow: /journal
Allow: /praticien/arnaud-benhamou`;

  const robotsPath = path.join(__dirname, '../dist/robots.txt');
  fs.writeFileSync(robotsPath, robots);
  
  console.log('✅ Robots.txt généré avec succès:', robotsPath);
};

// Exécution
if (require.main === module) {
  generateSitemap();
  generateRobots();
}

module.exports = { generateSitemap, generateRobots };