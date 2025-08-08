import Image from "next/image"
import Link from "next/link"
import cities from "@/../scripts/cities.json"
import { QuoteForm, LeadMagnet } from "@/components/HomePageClient"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HomePage() {
  const displayCities = cities as string[]
  const citySlugs = displayCities.map(c => ({ name: c, slug: c.toLowerCase().replace(/\s+/g,'-') }))

  const reviews = [
    { name: "Samantha R.", text: "Amazing job installing our gutter guards. No more climbing ladders!" },
    { name: "Michael B.", text: "Professional, fast, and the gutters look brand new after cleaning." },
    { name: "Alex P.", text: "Highly recommend for gutter installations—clean work and fair pricing." },
  ]

  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_70%_0%,#76B94720,transparent)]" />
        <div className="container-custom grid gap-10 py-16 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <Badge className="bg-brand-gold text-brand-dark">Serving Rocklin & Greater Sacramento</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark">Rocklin’s #1 Gutter Guards & Gutter Cleaning Experts</h1>
            <p className="text-lg text-brand-dark/80">Protect your home and never clean gutters again. Premium gutter guard installation, gutter cleaning, and full-service gutter care.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-quote/" className="btn-primary">Get Free Estimate</Link>
              <a href="mailto:rocklingutterguard@gmail.com" className="btn-secondary">Email Us</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl border bg-gradient-to-br from-brand-light-green/10 to-brand-gold/10">
            <Image src="/images/hero.svg" alt="Gutter guards installed on a Rocklin home" fill className="object-contain p-6" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-custom">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="section-title">Our Services</h2>
            <p className="section-sub">Complete gutter solutions for Rocklin and the Greater Sacramento area.</p>
          </div>
          <Link href="/services/" className="hidden md:inline nav-link">View all services →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Gutter Guard Installation</CardTitle>
              <CardDescription>Keep leaves and debris out—no more clogs.</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge>Most Popular</Badge>
              <p className="text-sm text-brand-dark/80 mt-3">Premium guards that protect your home year-round.</p>
              <Link href="/services/gutter-guard-installation/" className="btn-primary mt-4 inline-block">Learn More</Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Gutter Cleaning</CardTitle>
              <CardDescription>Thorough debris removal and downspout flush.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-dark/80">Restore proper drainage and prevent overflow.</p>
              <Link href="/services/gutter-cleaning/" className="btn-primary mt-4 inline-block">Learn More</Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Gutter Installation & Repair</CardTitle>
              <CardDescription>Seamless gutters, repairs, and tune-ups.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-dark/80">Protect your foundation with a durable system.</p>
              <Link href="/services/gutter-installation/" className="btn-primary mt-4 inline-block">Learn More</Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="container-custom">
        <h2 className="section-title">Before & After</h2>
        <p className="section-sub mb-6">See how our gutter cleaning and guard installations transform homes.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[1,2,3].map((i) => (
            <Card key={i}>
              <CardContent>
                <div className="relative aspect-video">
                  <Image src={`/images/before-after-${i}.svg`} alt={`Gutter service before and after ${i}`} fill className="object-contain" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-brand-green/5">
        <div className="container-custom py-12 space-y-6">
          <h2 className="section-title">Happy Homeowners</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, idx) => (
              <Card key={idx}>
                <CardContent>
                  <p className="text-brand-dark/90">“{r.text}”</p>
                  <p className="mt-3 text-sm text-brand-dark/70">— {r.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE + AREAS */}
      <section className="container-custom grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="section-title">Request Your Free Quote</h2>
          <p className="section-sub mb-4">Tell us about your home and needs. We’ll send a fast, friendly estimate.</p>
          <QuoteForm />
        </div>
        <div className="space-y-6">
          <h3 className="font-semibold text-lg">Service Areas</h3>
          <div className="rounded-lg border p-4">
            <ul className="mt-1 grid grid-cols-2 gap-2 text-sm">
              {citySlugs.map((c) => (
                <li key={c.slug}><Link className="footer-link" href={`/service-areas/${c.slug}/`}>{c.name}</Link></li>
              ))}
            </ul>
            <Link href="/service-areas/" className="btn-secondary mt-4 inline-block">View All Service Areas</Link>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">FAQ</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>Do gutter guards eliminate cleaning?</AccordionTrigger>
                <AccordionContent>They significantly reduce it, but occasional maintenance may still be helpful depending on tree coverage.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Do you serve my city?</AccordionTrigger>
                <AccordionContent>We serve Rocklin, Roseville, Loomis, Granite Bay, Folsom, Lincoln, and Auburn.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-dark text-white">
        <div className="container-custom py-12 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Protect Your Home with Rocklin Gutter Guard</h2>
            <p className="mt-2 text-white/80">Contact us by email or request a free quote online.</p>
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
