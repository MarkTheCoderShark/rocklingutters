import { QuoteForm } from "@/components/HomePageClient"

export const metadata = { title: "Get a Free Quote" }

export default function GetQuotePage() {
  return (
    <div className="container-custom py-12">
      <h1 className="section-title">Get a Free Quote</h1>
      <p className="section-sub mb-6">Fill out the form below and we’ll reach out shortly.</p>
      <div className="max-w-2xl"><QuoteForm /></div>
    </div>
  )
} 