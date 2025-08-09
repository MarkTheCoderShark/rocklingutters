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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    zip: "",
    service: ""
  })

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmedZip = formData.zip.trim()
    if (trimmedZip.length < 5) return
    
    // Build query string with all form data
    const params = new URLSearchParams()
    if (formData.name.trim()) params.append('name', formData.name.trim())
    if (formData.phone.trim()) params.append('phone', formData.phone.trim())
    if (trimmedZip) params.append('zip', trimmedZip)
    if (formData.service.trim()) params.append('service', formData.service.trim())
    
    router.push(`/get-quote/?${params.toString()}`)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="text-center mb-4">
        <h4 className="font-semibold text-lg text-brand-dark mb-2">Get Your FREE Estimate</h4>
        <p className="text-sm text-brand-dark/70">Quick form • No obligation • Same-day service available</p>
      </div>
      
      <div className="space-y-3">
        <div>
          <Label htmlFor="hero-name" className="text-sm font-medium">Name*</Label>
          <Input
            id="hero-name"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
            className="bg-white/90"
          />
        </div>
        
        <div>
          <Label htmlFor="hero-phone" className="text-sm font-medium">Phone*</Label>
          <Input
            id="hero-phone"
            type="tel"
            placeholder="(916) 555-0123"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            required
            className="bg-white/90"
          />
        </div>
        
        <div>
          <Label htmlFor="hero-zip" className="text-sm font-medium">ZIP Code*</Label>
          <Input
            id="hero-zip"
            inputMode="numeric"
            pattern="[0-9]{5}"
            placeholder="95765"
            value={formData.zip}
            onChange={(e) => setFormData(prev => ({ ...prev, zip: e.target.value }))}
            required
            className="bg-white/90"
          />
        </div>
        
        <div>
          <Label htmlFor="hero-service" className="text-sm font-medium">Service Needed</Label>
          <select
            id="hero-service"
            value={formData.service}
            onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white/90 text-sm focus:outline-none focus:ring-2 focus:ring-brand-light-green focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="Gutter Guard Installation">Gutter Guard Installation</option>
            <option value="Gutter Cleaning">Gutter Cleaning</option>
            <option value="Gutter Installation">Gutter Installation</option>
            <option value="Gutter Repair">Gutter Repair</option>
            <option value="Emergency Service">Emergency Service</option>
            <option value="Multiple Services">Multiple Services</option>
          </select>
        </div>
      </div>
      
      <Button type="submit" className="w-full bg-brand-light-green hover:bg-brand-green text-white font-semibold py-3">
        Get FREE Estimate Now
      </Button>
      
      <div className="text-center space-y-2">
        <p className="text-xs text-brand-dark/60">
          ✓ Free estimates • ✓ No pressure • ✓ Licensed & insured
        </p>
        <p className="text-xs text-brand-dark/50">
          We&apos;ll call you within 2 hours
        </p>
      </div>
    </form>
  )
} 