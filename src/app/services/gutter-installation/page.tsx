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
      <section className="grid gap-8 md:grid-cols-3">
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gutterguardinstallation.jpg" alt="New Gutter Installation" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="font-semibold text-lg mb-2">New Installation</h3>
          <p className="text-sm text-brand-dark/80">Complete gutter system installation with seamless aluminum gutters.</p>
        </div>
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/guttecleaning.jpg" alt="Gutter Replacement" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="font-semibold text-lg mb-2">Replacement Services</h3>
          <p className="text-sm text-brand-dark/80">Replace old, damaged gutters with modern, efficient systems.</p>
        </div>
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/roof-cleaning-service.jpg" alt="Custom Solutions" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="font-semibold text-lg mb-2">Custom Solutions</h3>
          <p className="text-sm text-brand-dark/80">Tailored gutter solutions for unique rooflines and architectural features.</p>
        </div>
      </section>
      <section className="container-custom">
        <h2 className="font-semibold text-xl mb-3">Pricing</h2>
        <p className="text-brand-dark/80">We’ll provide an accurate estimate after a quick assessment.</p>
      </section>
    </div>
  )
} 