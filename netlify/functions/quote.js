/* eslint-disable */
const fetch = require('node-fetch')

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers }
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ success: false, error: 'Method Not Allowed' }) }
  }

  try {
    const body = JSON.parse(event.body || '{}')
    const name = (body.name || '').trim()
    const email = (body.email || '').trim()

    if (!name || !email) {
      return { statusCode: 400, headers, body: JSON.stringify({ success: false, error: 'Name and email are required.' }) }
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.log('[netlify quote] missing RESEND_API_KEY', body)
      return { statusCode: 500, headers, body: JSON.stringify({ success: false, error: 'Email service not configured.' }) }
    }

    // Use Resend REST API
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@rocklingutterguard.com',
        to: ['rocklingutterguard@gmail.com'],
        subject: `New Quote Request from ${name}`,
        html: `<pre>${JSON.stringify(body, null, 2)}</pre>`
      })
    })

    if (!resp.ok) {
      const text = await resp.text()
      console.error('Resend error', text)
      return { statusCode: 500, headers, body: JSON.stringify({ success: false, error: 'Failed to send email.' }) }
    }

    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) }
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ success: false, error: e?.message || 'Unknown error' }) }
  }
} 