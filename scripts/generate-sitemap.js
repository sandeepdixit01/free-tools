#!/usr/bin/env node

/**
 * Auto-Generate Sitemap from tools.js
 *
 * This script reads the tools registry and generates a complete sitemap.xml
 * Run before build or manually to update sitemap
 *
 * Usage:
 *   node scripts/generate-sitemap.js
 *   npm run generate-sitemap
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory (ESM equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const SITE_URL = 'https://free-tools-nine-delta.vercel.app';
const CURRENT_DATE = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

/**
 * Extract tools data from tools.js without importing configs
 */
function extractToolsData() {
  const toolsPath = join(__dirname, '../src/data/tools.js');
  const content = readFileSync(toolsPath, 'utf8');

  // Extract tools array using regex
  const toolsMatch = content.match(/export const tools = \[([\s\S]*?)\n\]/);
  if (!toolsMatch) {
    throw new Error('Could not find tools array in tools.js');
  }

  const toolsArrayContent = toolsMatch[1];

  // Extract individual tool objects
  const tools = [];
  const toolRegex = /\{[\s\S]*?id:\s*['"]([^'"]+)['"][\s\S]*?route:\s*['"]([^'"]+)['"][\s\S]*?active:\s*(true|false)[\s\S]*?\}/g;

  let match;
  while ((match = toolRegex.exec(toolsArrayContent)) !== null) {
    tools.push({
      id: match[1],
      route: match[2],
      active: match[3] === 'true'
    });
  }

  return tools;
}

/**
 * Get all categories
 */
function getAllCategories() {
  return ['image', 'pdf', 'text', 'developer'];
}

/**
 * Generate sitemap XML content
 */
function generateSitemap() {
  const tools = extractToolsData();
  const urls = [];

  // 1. Homepage (highest priority)
  urls.push({
    loc: `${SITE_URL}/`,
    lastmod: CURRENT_DATE,
    changefreq: 'weekly',
    priority: '1.0'
  });

  // 2. All Tools page
  urls.push({
    loc: `${SITE_URL}/tools`,
    lastmod: CURRENT_DATE,
    changefreq: 'weekly',
    priority: '0.9'
  });

  // 3. Category pages
  const categories = getAllCategories();
  categories.forEach(category => {
    urls.push({
      loc: `${SITE_URL}/tools/${category}`,
      lastmod: CURRENT_DATE,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });

  // 4. Tool pages (only active tools)
  const activeTools = tools.filter(tool => tool.active === true);
  activeTools.forEach(tool => {
    urls.push({
      loc: `${SITE_URL}${tool.route}`,
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: '0.9'
    });
  });

  // 5. Static pages
  const staticPages = [
    { path: '/about', priority: '0.5', changefreq: 'monthly' },
    { path: '/contact', priority: '0.5', changefreq: 'monthly' },
    { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' }
  ];

  staticPages.forEach(page => {
    urls.push({
      loc: `${SITE_URL}${page.path}`,
      lastmod: CURRENT_DATE,
      changefreq: page.changefreq,
      priority: page.priority
    });
  });

  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return { xml, stats: { tools: activeTools.length, categories: categories.length } };
}

/**
 * Write sitemap to public directory
 */
function writeSitemap() {
  try {
    const { xml, stats } = generateSitemap();
    const outputPath = join(__dirname, '../public/sitemap.xml');

    writeFileSync(outputPath, xml, 'utf8');

    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${outputPath}`);
    console.log(`📊 Total URLs: ${stats.tools + stats.categories + 5}`);
    console.log(`🔧 Active Tools: ${stats.tools}`);
    console.log(`📁 Categories: ${stats.categories}`);
    console.log(`📄 Static Pages: 5`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the script
writeSitemap();

