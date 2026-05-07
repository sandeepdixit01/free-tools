const VALID_STATIC_ROUTES = new Set([
  '/',
  '/about',
  '/contact',
  '/privacy-policy',
  '/tools',
  '/tools/image',
  '/tools/pdf',
  '/tools/text',
  '/tools/developer',
  '/tools/resize-image',
  '/tools/image-to-pdf',
  '/tools/image-compressor',
  '/tools/image-format-converter',
  '/tools/image-crop',
  '/tools/merge-pdf',
  '/tools/pdf-to-image',
  '/tools/split-pdf',
  '/tools/rotate-pdf',
  '/tools/delete-pdf-pages',
  '/tools/word-counter',
  '/tools/text-case-converter',
  '/tools/remove-extra-spaces',
  '/tools/remove-duplicate-lines',
  '/tools/word-sorter',
  '/tools/character-counter',
  '/tools/json-formatter',
  '/tools/base64-encoder-decoder',
  '/tools/url-encoder-decoder',
  '/tools/json-to-csv'
])

const PUBLIC_FILE_REGEX = /\/[^/]+\.[^/]+$/

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/'
  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

export default function middleware(request) {
  const url = new URL(request.url)
  const pathname = normalizePath(url.pathname)

  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/src/') ||
    pathname.startsWith('/node_modules/') ||
    pathname.startsWith('/Documentation/') ||
    pathname.startsWith('/archive/') ||
    pathname.startsWith('/patches/') ||
    pathname.startsWith('/scripts/') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/site.webmanifest' ||
    pathname === '/manifest.webmanifest' ||
    PUBLIC_FILE_REGEX.test(pathname)
  ) {
    return
  }

  if (VALID_STATIC_ROUTES.has(pathname)) {
    return
  }

  return new Response('Not Found', {
    status: 404,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow'
    }
  })
}

export const config = {
  matcher: '/:path*'
}
