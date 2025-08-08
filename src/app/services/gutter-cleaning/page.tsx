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
      <section className="container-custom grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6">
          <img src="/images/gutter-cleaning-hero.jpg" alt="Gutter cleaning" className="w-full rounded-md" />
          <h3 className="font-semibold mt-3">Debris Removal</h3>
          <p className="text-sm text-brand-dark/80 mt-1">Leaves and buildup removed by hand and tools.</p>
        </div>
        <div className="rounded-lg border p-6">
          <img src="/images/seasonal-cleaning.jpg" alt="Seasonal cleaning" className="w-full rounded-md" />
          <h3 className="font-semibold mt-3">Downspout Flush</h3>
          <p className="text-sm text-brand-dark/80 mt-1">Ensure downspouts are clear and flowing.</p>
        </div>
        <div className="rounded-lg border p-6">
          <img src="/images/gutter-problems.jpg" alt="Gutter problems" className="w-full rounded-md" />
          <h3 className="font-semibold mt-3">Inspection</h3>
          <p className="text-sm text-brand-dark/80 mt-1">Check for leaks, sagging, and needed repairs.</p>
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