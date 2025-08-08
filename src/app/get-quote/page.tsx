import { QuoteForm } from "@/components/HomePageClient"
import { getCityFromZip } from "@/lib/zipCity"

export const metadata = { title: "Get a Free Quote" }

export default async function GetQuotePage({ searchParams }: { searchParams: Promise<{ zip?: string }> }) {
  const resolved = await searchParams
  const zip = resolved?.zip || ""
  const city = getCityFromZip(zip)
  return (
    <div className="container-custom py-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-start">
      <div>
        <h1 className="section-title">Get a Free Quote</h1>
        <p className="section-sub mb-6">Fill out the form below and we’ll reach out shortly.</p>
        <div className="max-w-2xl">
          <QuoteForm defaults={{ zip, address: city ? `${city}, CA` : undefined }} />
        </div>
      </div>
      <aside className="rounded-xl border p-6 space-y-4 bg-white/70">
        <h3 className="font-semibold text-lg">Why Rocklin Gutter Guard?</h3>
        <ul className="list-disc list-inside text-sm text-brand-dark/80 space-y-1">
          <li>Local team serving Rocklin and Placer County</li>
          <li>Premium materials and professional installation</li>
          <li>Fast quotes and clear, honest pricing</li>
        </ul>
        <div className="rounded-lg border p-4 bg-white">
          <h4 className="font-semibold">Service Areas</h4>
          <p className="text-sm text-brand-dark/80">Rocklin, Roseville, Loomis, Granite Bay, Folsom, Lincoln, Auburn</p>
        </div>
      </aside>
    </div>
  )
} 