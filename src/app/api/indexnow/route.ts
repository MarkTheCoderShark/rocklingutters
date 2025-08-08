export const runtime = 'nodejs'

const INDEXNOW_KEY = 'rocklingutterguard-indexnow-key-2025'
const DEFAULT_HOST = 'rocklingutterguard.com'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const urls: string[] = Array.isArray(body?.urls) ? body.urls : []
    const host: string = (body?.host || DEFAULT_HOST).toString()

    if (!Array.isArray(urls) || urls.length === 0) {
      return new Response(JSON.stringify({ success: false, error: 'No urls provided' }), { status: 400 })
    }

    const payload = {
      host,
      key: INDEXNOW_KEY,
      keyLocation: `https://${host}/indexnow.txt`,
      urlList: urls,
    }

    const endpoints = [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
      'https://yandex.com/indexnow',
    ]

    const results = await Promise.allSettled(
      endpoints.map((ep) => fetch(ep, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }))
    )

    const summary = results.map((r, i) => ({ endpoint: endpoints[i], status: r.status, code: r.status === 'fulfilled' ? r.value.status : null }))

    return new Response(JSON.stringify({ success: true, summary }), { status: 200 })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error'
    return new Response(JSON.stringify({ success: false, error: message }), { status: 500 })
  }
} 