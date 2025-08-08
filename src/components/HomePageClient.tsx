"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

type QuotePayload = {
  name: string
  email: string
  phone?: string
  address?: string
  zip?: string
  service?: string
  message?: string
}

async function postQuote(payload: QuotePayload) {
  const endpoints = ["/api/quote", "/.netlify/functions/quote"]
  for (const ep of endpoints) {
    try {
      const res = await fetch(ep, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (res.ok) return await res.json()
    } catch {
      // try next
    }
  }
  throw new Error('Failed to submit quote request.')
}

export function QuoteForm({ defaults }: { defaults?: Partial<QuotePayload> }) {
  const [status, setStatus] = useState<{ type: 'idle'|'success'|'error', message?: string }>({ type: 'idle' })

  async function onSubmit(formData: FormData) {
    setStatus({ type: 'idle' })
    const payload: QuotePayload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      address: String(formData.get('address') || ''),
      zip: String(formData.get('zip') || ''),
      service: String(formData.get('service') || ''),
      message: String(formData.get('message') || ''),
    }
    try {
      await postQuote(payload)
      setStatus({ type: 'success', message: 'Thanks! We\'ll get back to you shortly.' })
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Something went wrong.'
      setStatus({ type: 'error', message })
    }
  }

  return (
    <form action={onSubmit} className="space-y-4">
      {status.type === 'success' && <div className="rounded-md bg-green-100 text-green-800 px-4 py-2">{status.message}</div>}
      {status.type === 'error' && <div className="rounded-md bg-red-100 text-red-800 px-4 py-2">{status.message}</div>}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name*</Label>
          <Input id="name" name="name" required defaultValue={defaults?.name} />
        </div>
        <div>
          <Label htmlFor="email">Email*</Label>
          <Input id="email" name="email" type="email" required defaultValue={defaults?.email} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" defaultValue={defaults?.phone} />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input id="address" name="address" defaultValue={defaults?.address} />
        </div>
        <div>
          <Label htmlFor="zip">ZIP</Label>
          <Input id="zip" name="zip" inputMode="numeric" pattern="[0-9]{5}" placeholder="95765" defaultValue={defaults?.zip} />
        </div>
        <div>
          <Label htmlFor="service">Service Interested In</Label>
          <Input id="service" name="service" placeholder="Gutter Guards, Cleaning, etc." defaultValue={defaults?.service} />
        </div>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={4} defaultValue={defaults?.message} />
      </div>
      <Button type="submit">Request Free Estimate</Button>
    </form>
  )
}

export function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
      className="rounded-lg border p-4 space-y-3"
    >
      <div>
        <Label htmlFor="lm-email">Get our Gutter Maintenance Checklist</Label>
        <Input id="lm-email" name="email" type="email" required placeholder="Enter your email" />
      </div>
      <Button type="submit">Send me the checklist</Button>
      {submitted && <p className="text-sm text-brand-dark/70">Check your inbox soon!</p>}
    </form>
  )
}

export function HeroZipForm() {
  const router = useRouter()
  const [zip, setZip] = useState("")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = zip.trim()
    if (trimmed.length < 5) return
    router.push(`/get-quote/?zip=${encodeURIComponent(trimmed)}`)
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border bg-white/80 backdrop-blur p-4 shadow-sm space-y-3">
      <div>
        <Label htmlFor="hero-zip">Enter your ZIP code</Label>
        <Input
          id="hero-zip"
          inputMode="numeric"
          pattern="[0-9]{5}"
          placeholder="95765"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">Get Free Estimate</Button>
      <p className="text-xs text-brand-dark/70">We’ll take you to a short form to finish your request.</p>
    </form>
  )
} 