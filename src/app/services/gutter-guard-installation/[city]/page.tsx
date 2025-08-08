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
    title: `Gutter Guards ${display} CA | #1 Rated Installation Service`,
    alternates: { canonical: `https://rocklingutterguard.com/services/gutter-guard-installation/${slug}/` },
  }
}

export default async function CityGutterGuards({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params
  if (!validCities.includes(slug)) {
    return <div className="container-custom py-12"><p>City not found.</p></div>
  }
  const city = cityNames[slug]
  return (
    <div className="space-y-12">
      <section className="bg-brand-light-green/10">
        <div className="container-custom py-12">
          <h1 className="section-title">Gutter Guard Installation in {city}, CA</h1>
          <p className="section-sub">Protect your home in {city} with premium gutter guards designed for long-lasting performance.</p>
          <div className="mt-4 flex gap-3">
            <Link className="btn-primary" href="/get-quote/">Get Free Estimate</Link>
            <a className="btn-secondary" href="mailto:rocklingutterguard@gmail.com">Email Us</a>
          </div>
        </div>
      </section>
      <section className="container-custom grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Clog-Free Performance</h3><p className="text-sm text-brand-dark/80 mt-2">Avoid overflow and water damage.</p></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Clean Aesthetic</h3><p className="text-sm text-brand-dark/80 mt-2">Matches your home’s look.</p></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Backed Installation</h3><p className="text-sm text-brand-dark/80 mt-2">Installed by pros for lasting results.</p></div>
      </section>
      <section className="container-custom">
        <h2 className="font-semibold text-xl mb-3">Pricing</h2>
        <p className="text-brand-dark/80">Get a customized quote for your {city} home. Pricing varies by linear footage and guard selection.</p>
      </section>
    </div>
  )
} 