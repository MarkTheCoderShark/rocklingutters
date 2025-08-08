import Image from "next/image"
import Link from "next/link"
import cities from "@/../scripts/cities.json"
import { QuoteForm, LeadMagnet } from "@/components/HomePageClient"

export default function HomePage() {
  const displayCities = cities as string[]
  const citySlugs = displayCities.map(c => ({ name: c, slug: c.toLowerCase().replace(/\s+/g,'-') }))

  const reviews = [
    { name: "Samantha R.", text: "Amazing job installing our gutter guards. No more climbing ladders!" },
    { name: "Michael B.", text: "Professional, fast, and the gutters look brand new after cleaning." },
    { name: "Alex P.", text: "Highly recommend for gutter installations—clean work and fair pricing." },
  ]

  return (
    <div className="space-y-16">
      <section className="bg-gradient-to-br from-brand-light-green/10 to-brand-gold/10">
        <div className="container-custom grid gap-8 py-16 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark">Rocklin’s #1 Gutter Guards & Gutter Cleaning Experts</h1>
            <p className="text-lg text-brand-dark/80">Protect your home and never clean gutters again. Premium gutter guard installation, gutter cleaning, and full-service gutter care.</p>
            <div className="flex gap-3">
              <Link href="/get-quote/" className="btn-primary">Get Free Estimate</Link>
              <a href="mailto:rocklingutterguard@gmail.com" className="btn-secondary">Email Us</a>
            </div>
          </div>
          <div className="relative aspect-[4/3]">
            <Image src="/images/hero.svg" alt="Gutter guards" fill className="object-contain" />
          </div>
        </div>
      </section>

      <section className="container-custom">
        <h2 className="section-title">Before & After</h2>
        <p className="section-sub mb-6">See how our gutter cleaning and guard installations transform homes.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-lg border p-3">
              <div className="relative aspect-video">
                <Image src={`/images/before-after-${i}.svg`} alt={`Before After ${i}`} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-custom">
        <h2 className="section-title">Our Services</h2>
        <p className="section-sub mb-6">Complete gutter solutions for Rocklin and the Greater Sacramento area.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold text-lg">Gutter Guard Installation <span className="ml-2 rounded bg-brand-gold/20 px-2 py-0.5 text-xs">Most Popular</span></h3>
            <p className="text-sm text-brand-dark/80 mt-2">Premium guards that keep leaves and debris out—no more clogs.</p>
            <Link href="/services/gutter-guard-installation/" className="btn-primary mt-4 inline-block">Learn More</Link>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold text-lg">Gutter Cleaning</h3>
            <p className="text-sm text-brand-dark/80 mt-2">Thorough debris removal and downspout flush for proper drainage.</p>
            <Link href="/services/gutter-cleaning/" className="btn-primary mt-4 inline-block">Learn More</Link>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold text-lg">Gutter Installation & Repair</h3>
            <p className="text-sm text-brand-dark/80 mt-2">Seamless gutters, repairs, and tune-ups to protect your foundation.</p>
            <Link href="/services/gutter-installation/" className="btn-primary mt-4 inline-block">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-green/5">
        <div className="container-custom py-12 space-y-6">
          <h2 className="section-title">Happy Homeowners</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, idx) => (
              <blockquote key={idx} className="rounded-lg border bg-white p-6">
                <p className="text-brand-dark/90">“{r.text}”</p>
                <footer className="mt-3 text-sm text-brand-dark/70">— {r.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="section-title">Request Your Free Quote</h2>
          <p className="section-sub mb-4">Tell us about your home and needs. We’ll send a fast, friendly estimate.</p>
          <QuoteForm />
        </div>
        <div className="space-y-6">
          <h3 className="font-semibold text-lg">Helpful Resources</h3>
          <LeadMagnet />
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">Service Areas</h4>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {citySlugs.map((c) => (
                <li key={c.slug}><Link className="footer-link" href={`/service-areas/${c.slug}/`}>{c.name}</Link></li>
              ))}
            </ul>
            <Link href="/service-areas/" className="btn-secondary mt-4 inline-block">View All Service Areas</Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="container-custom py-12 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Protect Your Home with Rocklin Gutter Guard</h2>
            <p className="mt-2 text-white/80">No phone required—contact us by email or request a free quote online.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <Link href="/get-quote/" className="btn-primary bg-white !text-brand-dark hover:bg-white/90">Get Free Estimate</Link>
            <a href="mailto:rocklingutterguard@gmail.com" className="btn-secondary border-white text-white hover:bg-white/10">Email Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}
