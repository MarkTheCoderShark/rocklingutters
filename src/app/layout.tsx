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
    default: `${BRAND_NAME} | Professional Gutter Services CA`,
    template: "%s | Rocklin Gutter Guard",
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  alternates: { canonical: FULL_URL },
  metadataBase: new URL(FULL_URL),
  openGraph: {
    type: "website",
    url: FULL_URL,
    title: `${BRAND_NAME} | Professional Gutter Services CA`,
    description: DESCRIPTION,
    images: [
      { url: "/images/logo-og.svg", width: 1200, height: 630, alt: BRAND_NAME },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} | Professional Gutter Services CA`,
    description: DESCRIPTION,
    images: ["/images/logo-og.svg"],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND_NAME,
    url: FULL_URL,
    image: `${FULL_URL}/images/logo.png`,
    telephone: "+1-916-415-3836",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2164 Sunset Blvd",
      addressLocality: "Rocklin",
      addressRegion: "CA",
      postalCode: "95765",
      addressCountry: "US",
    },
    areaServed: [
      "Placer County / Greater Sacramento",
      "Rocklin",
      "Roseville",
      "Loomis",
      "Granite Bay",
      "Folsom",
      "Lincoln",
      "Auburn",
    ],
    serviceType: [
      "Gutter Cleaning",
      "Gutter Repair",
      "Gutter Guard Installation",
      "Gutter Installation",
      "Pressure Washing",
      "Roof Cleaning",
      "Solar Panel Cleaning",
      "Window Cleaning",
    ],
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
          logo: `${FULL_URL}/images/logo-og.svg`
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
