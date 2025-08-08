import { Resend } from 'resend'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const name = (data?.name || '').toString().trim()
    const email = (data?.email || '').toString().trim()
    const phone = (data?.phone || '').toString().trim()
    const address = (data?.address || '').toString().trim()
    const service = (data?.service || '').toString().trim()
    const message = (data?.message || '').toString().trim()

    if (!name || !email) {
      return new Response(JSON.stringify({ success: false, error: 'Name and email are required.' }), { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.log('[quote] Missing RESEND_API_KEY. Payload:', data)
      return new Response(JSON.stringify({ success: false, error: 'Email service not configured. Please try again later or email us directly.' }), { status: 500 })
    }

    const resend = new Resend(apiKey)
    const to = ['rocklingutterguard@gmail.com']

    const html = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
      ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
    `

    const { error } = await resend.emails.send({
      from: 'noreply@rocklingutterguard.com',
      to,
      subject: `New Quote Request from ${name}`,
      html,
    })

    if (error) {
      console.error('[quote] Resend send error:', error)
      return new Response(JSON.stringify({ success: false, error: 'Failed to send email.' }), { status: 500 })
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    return new Response(JSON.stringify({ success: false, error: message }), { status: 500 })
  }
} 