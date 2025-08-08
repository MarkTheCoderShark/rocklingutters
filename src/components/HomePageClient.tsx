"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

type QuotePayload = {
  name: string
  email: string
  phone?: string
  address?: string
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

export function QuoteForm() {
  const [status, setStatus] = useState<{ type: 'idle'|'success'|'error', message?: string }>({ type: 'idle' })

  async function onSubmit(formData: FormData) {
    setStatus({ type: 'idle' })
    const payload: QuotePayload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      address: String(formData.get('address') || ''),
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
          <Input id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email*</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input id="address" name="address" />
        </div>
        <div>
          <Label htmlFor="service">Service Interested In</Label>
          <Input id="service" name="service" placeholder="Gutter Guards, Cleaning, etc." />
        </div>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={4} />
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