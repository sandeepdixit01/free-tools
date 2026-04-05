import { Helmet } from 'react-helmet-async'

const SEOHead = ({
  title = "Resize Image to 50KB, 100KB Online Free | इमेज का साइज कम करें",
  description = "Resize and compress images to 20KB, 50KB, 100KB instantly. बिना क्वालिटी कम किए इमेज का साइज कम करें। Free, fast, secure. No signup required.",
  canonical = "https://freetools.com/tools/resize-image",
  keywords = "resize image, compress image, reduce image size, image compressor, resize to 50KB, resize to 20KB, compress JPG, image optimizer, इमेज का साइज कम करें, फोटो का साइज कम कैसे करें, image ko 50kb kaise kare, photo size kam kare, image compress kaise kare, whatsapp ke liye image resize",
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage = "/og-image-resizer.png"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Image Resizer & Compressor",
    "description": "Resize and compress images to exact file sizes instantly without quality loss. Supports JPG, PNG, WEBP formats.",
    "url": canonical,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Resize images to exact KB size",
      "Compress images without quality loss",
      "Batch image processing",
      "100% client-side processing",
      "No registration required"
    ],
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://freetools.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Image Tools",
        "item": "https://freetools.com/category/image"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Image Resizer",
        "item": canonical
      }
    ]
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to reduce image size without losing quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use our image compressor with quality slider set to 85-95%. Our tool uses advanced compression algorithms that preserve visual quality while reducing file size."
        }
      },
      {
        "@type": "Question",
        "name": "How to resize image to exact KB like 20KB or 50KB?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Select 'By File Size' mode and enter your target size in KB. Our algorithm automatically adjusts image dimensions and compression quality to meet your exact file size requirement."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to upload images?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, completely safe! Your images are processed entirely in your browser using JavaScript. They never leave your device or get uploaded to any server."
        }
      },
      {
        "@type": "Question",
        "name": "Image size kam kaise kare? (इमेज साइज़ कम कैसे करें?)",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Image upload karo, 'By File Size' select karo aur apna target size (jaise 50KB, 100KB) enter karo. Tool automatically image ko compress kar dega bina quality loss ke."
        }
      },
      {
        "@type": "Question",
        "name": "Photo ko 50KB me kaise convert kare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apni photo upload karne ke baad 'By File Size' mode select karo aur 50 type karo. Tool automatically dimensions aur quality adjust karke exactly 50KB ki image bana dega."
        }
      }
    ]
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English, Hindi" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="FreeTools" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || canonical} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="FreeTools" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl || canonical} />
      <meta property="twitter:title" content={ogTitle || title} />
      <meta property="twitter:description" content={ogDescription || description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqData)}
      </script>
    </Helmet>
  )
}

export default SEOHead

