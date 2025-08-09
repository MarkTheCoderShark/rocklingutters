import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SeoJsonLd from "@/components/SeoJsonLd"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const BRAND_NAME = "Rocklin Gutter Guard"
const FULL_URL = "https://rocklingutterguard.com"
const DESCRIPTION = "Rocklin’s #1 gutter guards and gutter cleaning experts. Professional gutter guard installation, gutter cleaning, repair, and installation serving Rocklin and Greater Sacramento."
const KEYWORDS = [
  "gutter guards",
  "gutter cleaning",
  "gutter installation",
  "Rocklin",
  "Placer County",
  "gutter repair",
  "roof cleaning",
  "pressure washing",
  "solar panel cleaning",
  "window cleaning",
]

export const metadata: Metadata = {
  title: {
    default: "Rocklin Gutter Guard | Professional Gutter Services CA",
    template: "%s | Rocklin Gutter Guard"
  },
  description: "Professional gutter services in Rocklin, CA. Gutter guard installation, gutter cleaning, and gutter repair. Licensed & insured. Free estimates. Call (916) 415-3836. Serving Rocklin, Roseville, Granite Bay, Folsom, Lincoln, Auburn, and Placer County.",
  keywords: [
    "gutter guard installation Rocklin CA",
    "gutter cleaning Rocklin California",
    "gutter repair Rocklin",
    "gutter installation Rocklin",
    "gutter services Placer County",
    "gutter guards Roseville CA",
    "gutter cleaning Granite Bay",
    "gutter installation Folsom",
    "gutter repair Lincoln CA",
    "gutter services Auburn CA",
    "seamless gutters Rocklin",
    "aluminum gutters Rocklin",
    "gutter protection Rocklin",
    "leaf guard installation",
    "gutter maintenance Rocklin",
    "emergency gutter repair",
    "gutter downspout services",
    "professional gutter cleaning",
    "gutter system installation",
    "gutter replacement Rocklin",
    "storm damage gutter repair",
    "gutter hanger installation",
    "gutter sealant services",
    "commercial gutter services",
    "residential gutter installation"
  ],
  authors: [{ name: "Rocklin Gutter Guard" }],
  creator: "Rocklin Gutter Guard",
  publisher: "Rocklin Gutter Guard",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(FULL_URL),
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "Rocklin Gutter Guard | Professional Gutter Services CA",
    description: "Professional gutter services in Rocklin, CA. Gutter guard installation, gutter cleaning, and gutter repair. Licensed & insured. Free estimates. Call (916) 415-3836. Serving Rocklin, Roseville, Granite Bay, Folsom, Lincoln, Auburn, and Placer County.",
    url: FULL_URL,
    siteName: BRAND_NAME,
    images: [
      { url: "/images/rocklin-knight-logo.png", width: 1200, height: 630, alt: BRAND_NAME },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rocklin Gutter Guard | Professional Gutter Services CA",
    description: "Professional gutter services in Rocklin, CA. Gutter guard installation, gutter cleaning, and gutter repair. Licensed & insured. Free estimates. Call (916) 415-3836. Serving Rocklin, Roseville, Granite Bay, Folsom, Lincoln, Auburn, and Placer County.",
    images: ["/images/rocklin-knight-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND_NAME,
    url: FULL_URL,
    image: `${FULL_URL}/images/rocklin-knight-logo.png`,
    telephone: "+1-916-415-3836",
    email: "rocklingutterguard@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2164 Sunset Blvd",
      addressLocality: "Rocklin",
      addressRegion: "CA",
      postalCode: "95765",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.7907",
      longitude: "-121.2358"
    },
    areaServed: [
      {
        "@type": "City",
        name: "Rocklin"
      },
      {
        "@type": "City", 
        name: "Roseville"
      },
      {
        "@type": "City",
        name: "Granite Bay"
      },
      {
        "@type": "City",
        name: "Folsom"
      },
      {
        "@type": "City",
        name: "Lincoln"
      },
      {
        "@type": "City",
        name: "Auburn"
      },
      {
        "@type": "City",
        name: "Loomis"
      },
      {
        "@type": "AdministrativeArea",
        name: "Placer County"
      }
    ],
    serviceType: [
      "Gutter Cleaning",
      "Gutter Repair", 
      "Gutter Guard Installation",
      "Gutter Installation",
      "Gutter Maintenance",
      "Emergency Gutter Repair",
      "Downspout Services",
      "Gutter System Replacement"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gutter Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gutter Guard Installation",
            description: "Professional gutter guard installation to prevent debris buildup and eliminate the need for regular gutter cleaning."
          }
        },
        {
          "@type": "Offer", 
          itemOffered: {
            "@type": "Service",
            name: "Gutter Cleaning",
            description: "Professional gutter cleaning services to remove debris and ensure proper water flow."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service", 
            name: "Gutter Installation & Repair",
            description: "New gutter installation and repair services using premium materials and professional workmanship."
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah M."
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        reviewBody: "Rocklin Gutter Guard installed our gutter guards last year and we haven't had to clean our gutters since! The installation was professional and the quality is outstanding."
      },
      {
        "@type": "Review", 
        author: {
          "@type": "Person",
          name: "Mike T."
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5", 
          bestRating: "5"
        },
        reviewBody: "Excellent gutter cleaning service! They came out same-day when we had an emergency clog. Professional, thorough, and reasonably priced."
      }
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "07:00",
      closes: "18:00"
    },
    priceRange: "$$",
    paymentAccepted: ["Cash", "Check", "Credit Card"],
    foundingDate: "2010",
    description: "Professional gutter services in Rocklin, CA including gutter guard installation, gutter cleaning, and gutter repair. Licensed and insured with 15+ years of experience serving Placer County.",
    slogan: "Protect your home, never clean gutters again",
    knowsAbout: [
      "Gutter Installation",
      "Gutter Cleaning", 
      "Gutter Guard Systems",
      "Gutter Repair",
      "Storm Damage Repair",
      "Seamless Gutters",
      "Aluminum Gutters",
      "Gutter Maintenance"
    ]
  }

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={FULL_URL} />
        <SeoJsonLd data={jsonLd as Record<string, unknown>} />
        <SeoJsonLd data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: BRAND_NAME,
          url: FULL_URL,
          potentialAction: {
            "@type": "SearchAction",
            target: `${FULL_URL}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        }} />
        <SeoJsonLd data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: BRAND_NAME,
          url: FULL_URL,
          logo: `${FULL_URL}/images/rocklin-knight-logo.png`
        }} />
        {/** Optional GA - add your ID and uncomment */}
        {/**
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`} />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js', new Date());gtag('config','G-XXXXXXX');` }} />
        */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
