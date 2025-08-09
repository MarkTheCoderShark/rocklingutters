import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Droplets, CheckCircle, Clock, Shield, AlertTriangle, Users } from "lucide-react"
import SeoJsonLd from "@/components/SeoJsonLd"

export const metadata = {
  title: "Professional Gutter Cleaning Rocklin CA | Same-Day Service | Rocklin Gutter Guard",
  description: "Expert gutter cleaning in Rocklin, CA. Remove leaves, debris & clogs. Prevent water damage. Licensed & insured. Same-day service available. Call (916) 415-3836.",
  keywords: [
    "gutter cleaning Rocklin CA",
    "professional gutter cleaning Rocklin",
    "gutter cleaning service Rocklin California",
    "clean gutters Rocklin",
    "remove leaves from gutters Rocklin",
    "gutter cleaning cost Rocklin",
    "downspout cleaning Rocklin",
    "seasonal gutter cleaning",
    "gutter maintenance Rocklin",
    "Placer County gutter cleaning"
  ],
  canonical: "https://rocklingutterguard.com/services/gutter-cleaning/"
}

export default function GutterCleaningPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rocklingutterguard.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://rocklingutterguard.com/services/" },
      { "@type": "ListItem", position: 3, name: "Gutter Cleaning", item: "https://rocklingutterguard.com/services/gutter-cleaning/" }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gutter Cleaning",
    description: "Professional gutter cleaning services in Rocklin, CA and Placer County",
    provider: {
      "@type": "LocalBusiness",
      name: "Rocklin Gutter Guard",
      telephone: "+1-916-415-3836",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2164 Sunset Blvd",
        addressLocality: "Rocklin",
        addressRegion: "CA",
        postalCode: "95765"
      }
    },
    areaServed: ["Rocklin", "Roseville", "Granite Bay", "Folsom", "Lincoln", "Auburn", "Loomis"],
    serviceType: "Gutter Cleaning"
  }

  return (
    <div className="space-y-16">
      <SeoJsonLd data={breadcrumb} />
      <SeoJsonLd data={serviceSchema} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-light-green/10 to-brand-green/5 py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-brand-light-green text-white">Same-Day Service Available</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                Professional Gutter Cleaning in <span className="text-brand-light-green">Rocklin, CA</span>
              </h1>
              <p className="text-xl text-brand-dark/80 mb-6">
                Protect your home from water damage with expert gutter cleaning. We remove all debris, 
                flush downspouts, and ensure proper drainage to safeguard your foundation and landscaping.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-light-green" />
                  <span className="font-semibold">Same-Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-light-green" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-brand-light-green hover:bg-brand-green">
                  <Link href="/get-quote/">Get FREE Estimate</Link>
                </Button>
                <Button asChild size="lg" className="bg-white text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white">
                  <a href="tel:+19164153836">Call (916) 415-3836</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/seasonal-cleaning.jpg" 
                alt="Professional gutter cleaning service in Rocklin CA" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-brand-light-green" />
                  <div>
                    <div className="font-bold text-brand-dark">100% Clean</div>
                    <div className="text-sm text-brand-dark/70">Debris Removal Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Clean Gutters */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              When Do Your Gutters Need Cleaning?
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Don&apos;t wait for water damage! Watch for these warning signs that indicate your gutters need professional cleaning.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">Water Overflow</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Water spilling over gutter edges during rain indicates clogs that need immediate attention.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">Visible Debris</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Leaves, twigs, and debris visible in gutters will eventually cause clogs and water damage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">Sagging Gutters</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Heavy debris accumulation causes gutters to sag and pull away from the house.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">Plant Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Plants or moss growing in gutters indicate standing water and serious blockages.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">Foundation Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Water pooling near your foundation may indicate gutter drainage problems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">Seasonal Timing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Clean gutters twice yearly: after fall leaf drop and before spring rains begin.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Our Comprehensive Gutter Cleaning Process
            </h2>
            <p className="text-xl text-brand-dark/70">
              Thorough, professional cleaning that protects your home and ensures optimal gutter performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Safety Setup</h3>
              <p className="text-brand-dark/70">
                Professional ladder safety and property protection to ensure safe, damage-free cleaning.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Debris Removal</h3>
              <p className="text-brand-dark/70">
                Complete removal of leaves, twigs, sediment, and all debris from gutters and downspouts.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Water Testing</h3>
              <p className="text-brand-dark/70">
                Thorough water testing to ensure proper flow and identify any remaining blockages.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Complete Cleanup</h3>
              <p className="text-brand-dark/70">
                All debris bagged and removed from your property, leaving your landscape pristine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Gutter Cleaning Service Options
            </h2>
            <p className="text-xl text-brand-dark/70">
              Choose the service level that best meets your home&apos;s needs and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Basic Cleaning</CardTitle>
                <CardDescription>
                  Essential gutter cleaning service for regular maintenance needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Complete debris removal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Downspout flushing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Basic water flow test</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Debris disposal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg ring-2 ring-blue-500">
              <CardHeader>
                <Badge className="w-fit bg-blue-500 text-white mb-2">Most Popular</Badge>
                <CardTitle className="text-2xl">Complete Service</CardTitle>
                <CardDescription>
                  Comprehensive cleaning with inspection and minor maintenance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Everything in Basic Service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Full gutter system inspection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Minor repairs included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Gutter guard recommendation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Emergency Service</CardTitle>
                <CardDescription>
                  Urgent cleaning for storm damage and overflow situations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Same-day availability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Priority scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Emergency repairs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Water damage prevention</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Professional Cleaning */}
      <section className="py-16 bg-brand-light-green/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Why Choose Professional Gutter Cleaning?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-light-green mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-brand-dark">Safety First</h3>
                    <p className="text-brand-dark/70">Avoid dangerous ladder work and potential injuries with professional equipment and expertise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-light-green mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-brand-dark">Thorough Inspection</h3>
                    <p className="text-brand-dark/70">Professional eye for potential issues, minor repairs, and maintenance recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-light-green mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-brand-dark">Proper Equipment</h3>
                    <p className="text-brand-dark/70">Commercial-grade tools and safety equipment for complete, efficient cleaning.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-light-green mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-brand-dark">Time Savings</h3>
                    <p className="text-brand-dark/70">Spend your weekend relaxing while we handle the dirty, dangerous work.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/gutter-cleaning-hero.jpg" 
                alt="Professional gutter cleaning equipment and safety gear" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Gutter Cleaning Pricing in Rocklin
            </h2>
            <p className="text-xl text-brand-dark/70">
              Affordable, transparent pricing based on your home&apos;s specific needs.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Pricing Factors:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Linear feet of gutters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Home height and accessibility</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Amount of debris</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Downspout conditions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Service Includes:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Complete debris removal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Downspout flushing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Water flow testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Complete cleanup</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Get Your FREE Estimate</h3>
                <p className="text-brand-dark/70 mb-6">
                  Quick, accurate pricing with no hidden fees or surprises.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
                    <Link href="/get-quote/">Get FREE Quote</Link>
                  </Button>
                  <Button asChild size="lg">
                    <a href="tel:+19164153836">Call (916) 415-3836</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Rocklin&apos;s Trusted Gutter Cleaning Experts
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Rocklin&apos;s Unique Cleaning Challenges</h3>
                <p className="text-brand-dark/70 mb-4">
                  Rocklin&apos;s abundant oak trees create heavy leaf drop in fall, while pine needles and seeds require 
                  frequent attention. Our team understands local vegetation and seasonal patterns.
                </p>
                <p className="text-brand-dark/70">
                  From the wet winters that test drainage systems to the dry summers that bake debris into gutters, 
                  we&apos;re equipped to handle Rocklin&apos;s year-round maintenance needs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Rocklin", "Roseville", "Granite Bay", "Folsom", "Lincoln", "Auburn", "Loomis", "Placer County"].map((city) => (
                    <div key={city} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-green to-brand-light-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Clean, Flowing Gutters?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for water damage! Schedule your professional gutter cleaning today and 
            protect your Rocklin home from costly repairs.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-quote/">Get FREE Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-light-green">
              <a href="tel:+19164153836">Call (916) 415-3836</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 