import Link from "next/link"

export const metadata = { title: "Services" }

export default function ServicesPage() {
  return (
    <div className="container-custom py-12 space-y-8">
      <header className="space-y-3">
        <h1 className="section-title">Gutter Services in Rocklin & Placer County</h1>
        <p className="section-sub">From premium gutter guards to thorough cleaning and seamless installations, we protect your home from water damage.</p>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold text-lg">Gutter Guard Installation</h3>
          <p className="text-sm text-brand-dark/80 mt-2">Keep leaves and debris out for year-round protection.</p>
          <Link className="btn-primary mt-4 inline-block" href="/services/gutter-guard-installation/">Learn More</Link>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold text-lg">Gutter Cleaning</h3>
          <p className="text-sm text-brand-dark/80 mt-2">Clear, flush, and inspect for proper flow.</p>
          <Link className="btn-primary mt-4 inline-block" href="/services/gutter-cleaning/">Learn More</Link>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold text-lg">Gutter Installation & Repair</h3>
          <p className="text-sm text-brand-dark/80 mt-2">Seamless gutters and expert repairs.</p>
          <Link className="btn-primary mt-4 inline-block" href="/services/gutter-installation/">Learn More</Link>
        </div>
      </div>
      <div>
        <Link href="/get-quote/" className="btn-primary">Request Free Estimate</Link>
      </div>
    </div>
  )
} 