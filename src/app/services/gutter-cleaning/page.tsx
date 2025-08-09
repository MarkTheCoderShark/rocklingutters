import Link from "next/link"

export const metadata = { title: "Gutter Cleaning" }

export default function GutterCleaningPage() {
  return (
    <div className="space-y-12">
      <section className="bg-brand-green/5">
        <div className="container-custom py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="section-title">Gutter Cleaning</h1>
            <p className="section-sub">Thorough debris removal and downspout flushing for proper drainage.</p>
            <div className="mt-4 flex gap-3">
              <Link className="btn-primary" href="/get-quote/">Get Free Estimate</Link>
              <a className="btn-secondary" href="mailto:rocklingutterguard@gmail.com">Email Us</a>
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-8 md:grid-cols-3">
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/seasonal-cleaning.jpg" alt="Professional Gutter Cleaning" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="font-semibold text-lg mb-2">Seasonal Deep Cleaning</h3>
          <p className="text-sm text-brand-dark/80">Complete debris removal and gutter system inspection every season.</p>
        </div>
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gutter-cleaning-hero.jpg" alt="Emergency Gutter Services" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="font-semibold text-lg mb-2">Emergency Services</h3>
          <p className="text-sm text-brand-dark/80">24/7 emergency gutter cleaning for storm damage and urgent repairs.</p>
        </div>
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gutter-problems.jpg" alt="Gutter Maintenance" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="font-semibold text-lg mb-2">Preventive Maintenance</h3>
          <p className="text-sm text-brand-dark/80">Regular maintenance plans to keep your gutters flowing properly year-round.</p>
        </div>
      </section>
      <section className="container-custom">
        <h2 className="font-semibold text-xl mb-3">Pricing</h2>
        <p className="text-brand-dark/80">Pricing varies by home size and debris levels. Request a free estimate.</p>
      </section>
      <section className="container-custom">
        <Link href="/get-quote/" className="btn-primary">Request Free Estimate</Link>
      </section>
    </div>
  )
} 