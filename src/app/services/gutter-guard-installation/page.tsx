import Link from "next/link"
import SeoJsonLd from "@/components/SeoJsonLd"

export const metadata = {
  title: "Gutter Guard Installation",
  description: "Professional gutter guard installation in Rocklin and Placer County. Keep leaves and debris out—no more clogs.",
}

export default function GutterGuardInstallationPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rocklingutterguard.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://rocklingutterguard.com/services/" },
      { "@type": "ListItem", position: 3, name: "Gutter Guard Installation", item: "https://rocklingutterguard.com/services/gutter-guard-installation/" }
    ]
  }

  return (
    <div className="space-y-12">
      <SeoJsonLd data={breadcrumb} />
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
      <section className="grid gap-8 md:grid-cols-3">
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gutter-guard-installation.jpg" alt="Professional Installation" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="font-semibold text-lg mb-2">Professional Installation</h3>
          <p className="text-sm text-brand-dark/80">Expert installation with premium materials and lifetime warranty.</p>
        </div>
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gutter-guard-materials.jpg" alt="Premium Materials" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="font-semibold text-lg mb-2">Premium Materials</h3>
          <p className="text-sm text-brand-dark/80">High-grade aluminum and steel mesh systems designed for California weather.</p>
        </div>
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/gutter-guard-benefits.jpg" alt="Long-term Benefits" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="font-semibold text-lg mb-2">Long-term Benefits</h3>
          <p className="text-sm text-brand-dark/80">Reduce maintenance costs and protect your home&apos;s foundation for decades.</p>
        </div>
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