import Link from "next/link"
import Image from "next/image"

const CITIES = ["Rocklin","Roseville","Loomis","Granite Bay","Folsom","Lincoln","Auburn"]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t bg-white">
      <div className="container-custom grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="Rocklin Gutter Guard" width={40} height={40} />
            <span className="font-bold text-brand-dark">Rocklin Gutter Guard</span>
          </div>
          <p className="text-sm text-brand-dark/80">Professional gutter guard installation, gutter cleaning, and gutter services serving Rocklin and the Greater Sacramento area.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="footer-link" href="tel:+19164153836">(916) 415-3836</a></li>
            <li><a className="footer-link" href="mailto:rocklingutterguard@gmail.com">rocklingutterguard@gmail.com</a></li>
            <li><span className="text-brand-dark/80">2164 Sunset Blvd, Rocklin, CA 95765</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link className="footer-link" href="/">Home</Link></li>
            <li><Link className="footer-link" href="/services/gutter-guard-installation/">Gutter Guard Installation</Link></li>
            <li><Link className="footer-link" href="/services/gutter-cleaning/">Gutter Cleaning</Link></li>
            <li><Link className="footer-link" href="/service-areas/">Service Areas</Link></li>
            <li><Link className="footer-link" href="/about-us/">About Us</Link></li>
            <li><Link className="footer-link" href="/faq/">FAQ</Link></li>
            <li><Link className="footer-link" href="/blog/">Blog</Link></li>
            <li><Link className="footer-link" href="/get-quote/">Get Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Service Areas</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {CITIES.map((c) => (
              <li key={c}><Link className="footer-link" href={`/service-areas/${c.toLowerCase().replace(/\s+/g,'-')}/`}>{c}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between py-4 text-sm text-brand-dark/70 gap-2">
          <span>© {year} Rocklin Gutter Guard</span>
          <div className="flex items-center gap-4">
            <Link className="footer-link" href="/privacy-policy/">Privacy Policy</Link>
            <Link className="footer-link" href="/terms-of-service/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 