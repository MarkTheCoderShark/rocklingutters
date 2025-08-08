import Link from "next/link"

export const metadata = { title: "Blog" }

const posts = [
  { slug: 'why-gutter-guards', title: 'Why Gutter Guards Are Worth It in Rocklin' },
  { slug: 'gutter-cleaning-costs', title: 'How Much Does Gutter Cleaning Cost?' },
  { slug: 'how-gutter-guards-work', title: 'How Do Gutter Guards Work?' },
]

export default function BlogPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="section-title mb-6">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}/`} className="rounded-lg border p-6 hover:shadow">
            <h3 className="font-semibold">{p.title}</h3>
            <span className="text-sm text-brand-dark/70">Read more →</span>
          </Link>
        ))}
      </div>
    </div>
  )
} 