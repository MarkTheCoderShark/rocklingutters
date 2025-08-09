"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/about-us/", label: "About Us" },
  { href: "/faq/", label: "FAQ" },
]

const SERVICE_LINKS = [
  { href: "/services/gutter-installation/", label: "Gutter Installation" },
  { href: "/services/gutter-guard-installation/", label: "Gutter Guard Installation" },
  { href: "/services/gutter-cleaning/", label: "Gutter Cleaning" },
]

export default function Navigation() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container-custom flex h-24 items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/rocklin-knight-logo.png" alt="Rocklin Gutter Guard" width={96} height={96} className="rounded" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link ${pathname === l.href ? 'text-brand-green' : ''}`}>{l.label}</Link>
          ))}
          <div className="relative group">
            <button className="nav-link">Services ▾</button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-0 top-full mt-2 min-w-[260px] rounded-md border bg-white shadow-lg">
              <ul className="p-2 grid gap-1">
                {SERVICE_LINKS.map(s => (
                  <li key={s.href}><Link className="block rounded px-3 py-2 hover:bg-brand-green/10" href={s.href}>{s.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+19164153836" className="text-sm font-semibold text-brand-dark hover:text-brand-light-green transition">
            (916) 415-3836
          </a>
          <Button asChild>
            <Link href="/get-quote/">Get FREE Quote</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open Menu" className="inline-flex h-10 w-10 items-center justify-center rounded-md border text-brand-dark">☰</button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white text-brand-dark border-l border-gray-200">
              <div className="p-4 space-y-4">
                <Link href="/" className="block font-semibold text-brand-dark hover:text-brand-light-green transition">Home</Link>
                <details>
                  <summary className="cursor-pointer py-2 text-brand-dark hover:text-brand-light-green transition">Services</summary>
                  <ul className="pl-3 grid gap-1">
                    {SERVICE_LINKS.map(s => (
                      <li key={s.href}><Link className="block py-1 text-brand-dark hover:text-brand-light-green transition" href={s.href}>{s.label}</Link></li>
                    ))}
                  </ul>
                </details>
                {NAV_LINKS.filter(n => n.href !== '/').map(n => (
                  <Link key={n.href} href={n.href} className="block py-2 text-brand-dark hover:text-brand-light-green transition">{n.label}</Link>
                ))}
                <Button asChild className="w-full bg-brand-light-green hover:bg-brand-green text-white"><Link href="/get-quote/">Get FREE Quote</Link></Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
} 