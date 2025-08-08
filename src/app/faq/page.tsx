import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SeoJsonLd from "@/components/SeoJsonLd"

export const metadata = { title: "FAQ" }

export default function FaqPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do gutter guards eliminate cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They significantly reduce it, but occasional maintenance may still be helpful depending on tree coverage."
        }
      },
      {
        "@type": "Question",
        name: "Do you serve my city?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Rocklin, Roseville, Loomis, Granite Bay, Folsom, Lincoln, and Auburn."
        }
      },
      {
        "@type": "Question",
        name: "How quickly can I get an estimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most estimates are delivered within 24–48 hours."
        }
      }
    ]
  }

  return (
    <div className="container-custom py-12 space-y-6">
      <SeoJsonLd data={faqLd} />
      <h1 className="section-title">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger>Do gutter guards eliminate cleaning?</AccordionTrigger>
          <AccordionContent>They significantly reduce it, but occasional maintenance may still be helpful depending on tree coverage.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>Do you serve my city?</AccordionTrigger>
          <AccordionContent>We serve Rocklin, Roseville, Loomis, Granite Bay, Folsom, Lincoln, and Auburn.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>How quickly can I get an estimate?</AccordionTrigger>
          <AccordionContent>Most estimates are delivered within 24–48 hours.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
} 