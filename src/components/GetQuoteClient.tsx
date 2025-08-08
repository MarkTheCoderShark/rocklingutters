"use client"

import { useSearchParams } from "next/navigation"
import { QuoteForm } from "@/components/HomePageClient"
import { getCityFromZip } from "@/lib/zipCity"

export default function GetQuoteClient() {
  const params = useSearchParams()
  const zip = params?.get("zip") || ""
  const city = getCityFromZip(zip)
  const address = city ? `${city}, CA` : undefined
  return <QuoteForm defaults={{ zip, address }} />
} 