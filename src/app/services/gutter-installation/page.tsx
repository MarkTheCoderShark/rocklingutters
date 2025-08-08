import Link from "next/link"

export const metadata = { title: "Gutter Installation & Repair" }

export default function GutterInstallationPage() {
  return (
    <div className="space-y-12">
      <section className="bg-brand-gold/10">
        <div className="container-custom py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="section-title">Gutter Installation & Repair</h1>
            <p className="section-sub">Seamless gutters and expert repairs to protect your home and foundation.</p>
            <div className="mt-4 flex gap-3">
              <Link className="btn-primary" href="/get-quote/">Get Free Estimate</Link>
              <a className="btn-secondary" href="mailto:rocklingutterguard@gmail.com">Email Us</a>
            </div>
          </div>
        </div>
      </section>
      <section className="container-custom grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Seamless Gutters</h3><p className="text-sm text-brand-dark/80 mt-2">Custom fit and durable materials.</p></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Repairs & Tune-ups</h3><p className="text-sm text-brand-dark/80 mt-2">Fix leaks, sagging, and alignment.</p></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Color Matching</h3><p className="text-sm text-brand-dark/80 mt-2">A clean look that suits your home.</p></div>
      </section>
      <section className="container-custom">
        <h2 className="font-semibold text-xl mb-3">Pricing</h2>
        <p className="text-brand-dark/80">We’ll provide an accurate estimate after a quick assessment.</p>
      </section>
    </div>
  )
} 