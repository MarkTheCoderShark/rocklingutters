export const metadata = { title: "FAQ" }

export default function FaqPage() {
  return (
    <div className="container-custom py-12 space-y-4">
      <h1 className="section-title">Frequently Asked Questions</h1>
      <div>
        <h3 className="font-semibold">Do gutter guards eliminate cleaning?</h3>
        <p className="text-brand-dark/80">They significantly reduce it, but occasional maintenance may still be helpful.</p>
      </div>
      <div>
        <h3 className="font-semibold">Do you serve my city?</h3>
        <p className="text-brand-dark/80">We serve Rocklin, Roseville, Loomis, Granite Bay, Folsom, Lincoln, and Auburn.</p>
      </div>
    </div>
  )
} 