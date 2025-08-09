import Image from "next/image"
import Link from "next/link"
import cities from "@/../scripts/cities.json"
import { QuoteForm, HeroZipForm } from "@/components/HomePageClient"
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
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero_optimized.webp" alt="Gutter guards installed on a Rocklin home" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 to-white/40" />
        </div>
        <div className="container-custom grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-6 relative z-10">
            <Badge className="bg-brand-gold text-brand-dark">Serving Rocklin & Greater Sacramento</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark">Rocklin’s #1 Gutter Guards & Gutter Cleaning Experts</h1>
            <p className="text-lg text-brand-dark/80 max-w-2xl">Protect your home and never clean gutters again. Premium gutter guard installation, gutter cleaning, and full-service gutter care.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/get-quote/" className="btn-primary">Get Free Estimate</Link>
              <a href="mailto:rocklingutterguard@gmail.com" className="btn-secondary">Email Us</a>
            </div>
          </div>
          <div className="relative z-10">
            <HeroZipForm />
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

      {/* Before & After */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">Before & After</h2>
          <p className="text-center section-sub mb-12">See how our gutter cleaning and guard installations transform homes.</p>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="p-4 bg-red-50">
                  <h4 className="font-semibold text-sm mb-2 text-red-800">BEFORE</h4>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/leafs.png" alt="Gutters clogged with leaves and debris" className="w-full h-32 object-cover rounded" />
                </div>
                <div className="p-4 bg-green-50">
                  <h4 className="font-semibold text-sm mb-2 text-green-800">AFTER</h4>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/Clean.png" alt="Clean gutters after professional cleaning" className="w-full h-32 object-cover rounded" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">Gutter Cleaning</h3>
                <p className="text-sm text-brand-dark/80">Complete debris removal and gutter restoration</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="p-4 bg-red-50">
                  <h4 className="font-semibold text-sm mb-2 text-red-800">BEFORE</h4>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/gutter-problems.jpg" alt="Damaged gutters with problems" className="w-full h-32 object-cover rounded" />
                </div>
                <div className="p-4 bg-green-50">
                  <h4 className="font-semibold text-sm mb-2 text-green-800">AFTER</h4>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/gutter-guard-installation.jpg" alt="New gutter guards professionally installed" className="w-full h-32 object-cover rounded" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">Guard Installation</h3>
                <p className="text-sm text-brand-dark/80">Professional gutter guard protection system</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="p-4 bg-red-50">
                  <h4 className="font-semibold text-sm mb-2 text-red-800">BEFORE</h4>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/dirtyroof.png" alt="Dirty roof with debris and stains" className="w-full h-32 object-cover rounded" />
                </div>
                <div className="p-4 bg-green-50">
                  <h4 className="font-semibold text-sm mb-2 text-green-800">AFTER</h4>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/cleanroof.png" alt="Clean roof after professional cleaning" className="w-full h-32 object-cover rounded" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">Roof Cleaning</h3>
                <p className="text-sm text-brand-dark/80">Complete roof cleaning and restoration service</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TRUST / PROCESS */}
      <section className="container-custom grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Local & Trusted</CardTitle>
            <CardDescription>Rocklin-based, serving Placer County & Greater Sacramento.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-brand-dark/80 space-y-1">
              <li>Licensed & insured</li>
              <li>Friendly, professional crews</li>
              <li>Clean job sites</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Process</CardTitle>
            <CardDescription>Fast quotes and expert work.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside text-sm text-brand-dark/80 space-y-1">
              <li>Quick assessment & estimate</li>
              <li>Schedule your service</li>
              <li>Professional completion & walkthrough</li>
            </ol>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Guarantee</CardTitle>
            <CardDescription>We’re not happy until you are.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-brand-dark/80">We stand behind our workmanship. If something isn’t right, we’ll make it right.</p>
          </CardContent>
        </Card>
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

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">Local Gutter Services Near You</h3>
            <p className="text-sm text-brand-dark/80">We provide gutter guard installation, gutter cleaning, and gutter installation throughout Placer County and the Greater Sacramento region. If you’re in Rocklin, Roseville, Loomis, Granite Bay, Folsom, Lincoln, or Auburn, our team can help protect your home from rain and debris.</p>
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
