import Link from "next/link"
import cities from "@/../scripts/cities.json"

export const metadata = { title: "Service Areas" }

export default function ServiceAreasIndex() {
  const list = (cities as string[]).map(c => ({ name: c, slug: c.toLowerCase().replace(/\s+/g,'-') }))
  return (
    <div className="container-custom py-12">
      <h1 className="section-title mb-6">Service Areas</h1>
      <ul className="grid md:grid-cols-3 gap-3">
        {list.map(c => (
          <li key={c.slug}>
            <Link className="btn-secondary w-full inline-flex" href={`/service-areas/${c.slug}/`}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
} 