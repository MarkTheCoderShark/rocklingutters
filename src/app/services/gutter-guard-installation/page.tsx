import Link from "next/link"

export const metadata = { title: "Gutter Guard Installation" }

export default function GutterGuardInstallationPage() {
  return (
    <div className="space-y-12">
      <section className="bg-brand-light-green/10">
        <div className="container-custom py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="section-title">Gutter Guard Installation</h1>
            <p className="section-sub">Premium gutter guards to prevent clogs and protect your home all year.</p>
            <div className="mt-4 flex gap-3">
              <Link className="btn-primary" href="/get-quote/">Get Free Estimate</Link>
              <a className="btn-secondary" href="mailto:rocklingutterguard@gmail.com">Email Us</a>
            </div>
          </div>
        </div>
      </section>
      <section className="container-custom grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Clog Prevention</h3><p className="text-sm text-brand-dark/80 mt-2">Keeps leaves and debris out of your gutters.</p></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Durable Materials</h3><p className="text-sm text-brand-dark/80 mt-2">Built to withstand heavy rain and debris.</p></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">Clean Look</h3><p className="text-sm text-brand-dark/80 mt-2">Seamless finish matched to your home’s style.</p></div>
      </section>
      <section className="container-custom">
        <h2 className="font-semibold text-xl mb-3">Our Process</h2>
        <ol className="list-decimal list-inside space-y-2 text-brand-dark/80">
          <li>Free assessment and estimate</li>
          <li>Professional cleaning and prep</li>
          <li>Expert guard installation</li>
          <li>Final inspection and walkthrough</li>
        </ol>
      </section>
      <section className="container-custom">
        <h2 className="font-semibold text-xl mb-3">Pricing</h2>
        <p className="text-brand-dark/80">Pricing depends on home size and guard selection. Request a free estimate for accurate pricing.</p>
      </section>
      <section className="container-custom">
        <Link href="/get-quote/" className="btn-primary">Request Free Estimate</Link>
      </section>
    </div>
  )
} 