"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
  { href: "/services/roof-cleaning/", label: "Roof Cleaning" },
  { href: "/services/solar-panel-cleaning/", label: "Solar Panel Cleaning" },
  { href: "/services/pressure-washing/", label: "Pressure Washing" },
  { href: "/services/window-cleaning/", label: "Window Cleaning" },
]

export default function Navigation() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="container-custom flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.svg" alt="Rocklin Gutter Guard" width={40} height={40} />
          <span className="font-bold text-brand-dark">Rocklin Gutter Guard</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link ${pathname === l.href ? 'text-brand-green' : ''}`}>{l.label}</Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="nav-link">Services ▾</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {SERVICE_LINKS.map((s) => (
                <DropdownMenuItem key={s.href} asChild>
                  <Link href={s.href} className="block w-full">{s.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Button asChild>
            <Link href="/get-quote/">Get FREE Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  )
} 