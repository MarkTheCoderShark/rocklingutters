import type { Metadata } from "next"
import Link from "next/link"
import cities from "@/../scripts/cities.json"

const validCities = (cities as string[]).map(c => c.toLowerCase().replace(/\s+/g,'-'))
const cityNames = Object.fromEntries((cities as string[]).map(c => [c.toLowerCase().replace(/\s+/g,'-'), c])) as Record<string, string>

export function generateStaticParams() {
  return validCities.map((city) => ({ city }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params
  const display = cityNames[slug] || 'Service Area'
  return {
    title: `Gutter Guards ${display} CA | Installation, Cleaning, Repair`,
    alternates: { canonical: `https://rocklingutterguard.com/service-areas/${slug}/` },
  }
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params
  if (!validCities.includes(slug)) {
    return <div className="container-custom py-12"><p>City not found.</p></div>
  }
  const city = cityNames[slug]
  return (
    <div className="space-y-12">
      <section className="bg-brand-green/5">
        <div className="container-custom py-12">
          <h1 className="section-title">Gutter Services in {city}, CA</h1>
          <p className="section-sub">Expert gutter guard installation, cleaning, and installation serving {city} and nearby communities.</p>
          <div className="mt-4 flex gap-3">
            <Link className="btn-primary" href="/get-quote/">Get Free Estimate</Link>
            <a className="btn-secondary" href="mailto:rocklingutterguard@gmail.com">Email Us</a>
          </div>
        </div>
      </section>
      <section className="container-custom grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Gutter Guards</h3><p className="text-sm text-brand-dark/80 mt-2">Keep debris out for worry-free protection.</p><Link className="btn-secondary mt-4 inline-block" href={`/services/gutter-guard-installation/${slug}/`}>Learn More</Link></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Gutter Cleaning</h3><p className="text-sm text-brand-dark/80 mt-2">Clear, flush, and inspect.</p><Link className="btn-secondary mt-4 inline-block" href={`/services/gutter-cleaning/${slug}/`}>Learn More</Link></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Gutter Installation</h3><p className="text-sm text-brand-dark/80 mt-2">Seamless gutters installed right.</p><Link className="btn-secondary mt-4 inline-block" href="/services/gutter-installation/">Learn More</Link></div>
      </section>
      <section className="container-custom">
        <h2 className="font-semibold text-xl mb-3">Why Choose Us in {city}</h2>
        <ul className="list-disc list-inside text-brand-dark/80 space-y-1">
          <li>Local Rocklin-based team serving Placer County</li>
          <li>Premium materials and professional workmanship</li>
          <li>No-pressure quotes and friendly service</li>
        </ul>
      </section>
    </div>
  )
} 