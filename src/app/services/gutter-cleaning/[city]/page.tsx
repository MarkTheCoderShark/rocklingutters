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
  const display = cityNames[slug] || 'City'
  return {
    title: `Gutter Cleaning ${display} CA | Professional Service`,
    alternates: { canonical: `https://rocklingutterguard.com/services/gutter-cleaning/${slug}/` },
  }
}

export default async function CityGutterCleaning({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params
  if (!validCities.includes(slug)) {
    return <div className="container-custom py-12"><p>City not found.</p></div>
  }
  const city = cityNames[slug]
  return (
    <div className="space-y-12">
      <section className="bg-brand-green/5">
        <div className="container-custom py-12">
          <h1 className="section-title">Gutter Cleaning in {city}, CA</h1>
          <p className="section-sub">Debris removal, downspout flushing, and inspection to keep your {city} home protected.</p>
          <div className="mt-4 flex gap-3">
            <Link className="btn-primary" href="/get-quote/">Get Free Estimate</Link>
            <a className="btn-secondary" href="mailto:rocklingutterguard@gmail.com">Email Us</a>
          </div>
        </div>
      </section>
      <section className="container-custom grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Debris Removal</h3><p className="text-sm text-brand-dark/80 mt-2">Leaves, needles, and buildup cleared thoroughly.</p></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Downspout Flush</h3><p className="text-sm text-brand-dark/80 mt-2">Ensure proper drainage and flow.</p></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Condition Check</h3><p className="text-sm text-brand-dark/80 mt-2">Identify leaks and repair needs early.</p></div>
      </section>
      <section className="container-custom">
        <h2 className="font-semibold text-xl mb-3">Pricing</h2>
        <p className="text-brand-dark/80">Pricing depends on home size and debris levels. Request a free quote.</p>
      </section>
    </div>
  )
} 