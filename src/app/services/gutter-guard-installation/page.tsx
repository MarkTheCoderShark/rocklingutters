import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Clock, Award, DollarSign, Users } from "lucide-react"
import SeoJsonLd from "@/components/SeoJsonLd"

export const metadata = {
  title: "Gutter Guard Installation Rocklin CA | #1 Rated Leaf Protection | Rocklin Gutter Guard",
  description: "Professional gutter guard installation in Rocklin, CA. Premium leaf protection systems with lifetime warranty. Never clean gutters again! Free estimates. Call (916) 415-3836.",
  keywords: [
    "gutter guard installation Rocklin CA",
    "leaf guard installation Rocklin",
    "gutter protection Rocklin California", 
    "micro mesh gutter guards Rocklin",
    "aluminum gutter guards Rocklin",
    "gutter guard cost Rocklin",
    "best gutter guards Rocklin",
    "professional gutter guard installer",
    "lifetime warranty gutter guards",
    "Placer County gutter protection"
  ],
  canonical: "https://rocklingutterguard.com/services/gutter-guard-installation/"
}

export default function GutterGuardInstallationPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rocklingutterguard.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://rocklingutterguard.com/services/" },
      { "@type": "ListItem", position: 3, name: "Gutter Guard Installation", item: "https://rocklingutterguard.com/services/gutter-guard-installation/" }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gutter Guard Installation",
    description: "Professional gutter guard installation services in Rocklin, CA and Placer County",
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
    serviceType: "Gutter Guard Installation"
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
              <Badge className="mb-4 bg-brand-light-green text-white">Most Popular Service</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                Gutter Guard Installation in <span className="text-brand-light-green">Rocklin, CA</span>
              </h1>
              <p className="text-xl text-brand-dark/80 mb-6">
                Never clean your gutters again! Our premium gutter guard systems protect your home 
                from water damage while eliminating dangerous ladder climbs and costly maintenance.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-gold" />
                  <span className="font-semibold">Lifetime Warranty</span>
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
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+19164153836">Call (916) 415-3836</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/gutter-guard-installation.jpg" 
                alt="Professional gutter guard installation in Rocklin CA" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-brand-light-green" />
                  <div>
                    <div className="font-bold text-brand-dark">99.9% Effective</div>
                    <div className="text-sm text-brand-dark/70">Leaf & Debris Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Why Choose Gutter Guards in Rocklin?
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Rocklin&apos;s tree-heavy neighborhoods and seasonal weather make gutter protection essential for every homeowner.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brand-light-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand-light-green" />
                </div>
                <CardTitle className="text-xl">Prevents Water Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Protects your foundation, landscaping, and siding from water overflow caused by clogged gutters.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brand-light-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-brand-light-green" />
                </div>
                <CardTitle className="text-xl">Saves Money</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Eliminates costly gutter cleaning services and prevents expensive water damage repairs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brand-light-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brand-light-green" />
                </div>
                <CardTitle className="text-xl">Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  No more dangerous ladder climbs for gutter cleaning - protect yourself and your family.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brand-light-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-brand-light-green" />
                </div>
                <CardTitle className="text-xl">Time Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Spend weekends enjoying life instead of cleaning gutters multiple times per year.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brand-light-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-brand-light-green" />
                </div>
                <CardTitle className="text-xl">Increases Home Value</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Quality gutter protection is a valuable home improvement that appeals to buyers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brand-light-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-brand-light-green" />
                </div>
                <CardTitle className="text-xl">Pest Prevention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Eliminates standing water and debris that attract mosquitoes, birds, and rodents.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gutter Guard Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Premium Gutter Guard Systems We Install
            </h2>
            <p className="text-xl text-brand-dark/70">
              Choose from our selection of top-rated gutter protection systems, all backed by our lifetime warranty.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Badge className="w-fit bg-brand-light-green text-white mb-2">Most Popular</Badge>
                <CardTitle className="text-2xl">Micro-Mesh Guards</CardTitle>
                <CardDescription>
                  Fine mesh technology blocks even the smallest debris while allowing maximum water flow.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-light-green" />
                    <span className="text-sm">Blocks leaves, pine needles, and seeds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-light-green" />
                    <span className="text-sm">Virtually invisible from ground level</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-light-green" />
                    <span className="text-sm">Handles heavy California rains</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-light-green" />
                    <span className="text-sm">Lifetime warranty included</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Aluminum Perforated</CardTitle>
                <CardDescription>
                  Durable aluminum construction with strategic perforations for optimal performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-light-green" />
                    <span className="text-sm">Heavy-duty aluminum construction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-light-green" />
                    <span className="text-sm">Excellent for large debris</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-light-green" />
                    <span className="text-sm">Weather-resistant coating</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-light-green" />
                    <span className="text-sm">Cost-effective solution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Reverse Curve</CardTitle>
                <CardDescription>
                  Surface tension technology guides water into gutters while shedding debris.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-light-green" />
                    <span className="text-sm">Surface tension water flow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-light-green" />
                    <span className="text-sm">Self-cleaning design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-light-green" />
                    <span className="text-sm">Handles extreme weather</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-light-green" />
                    <span className="text-sm">Professional installation required</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Our Professional Installation Process
            </h2>
            <p className="text-xl text-brand-dark/70">
              Meticulous installation ensures your gutter guards perform flawlessly for decades.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Free Assessment</h3>
              <p className="text-brand-dark/70">
                Thorough inspection of your gutter system and roof to determine the best protection solution.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Complete Cleaning</h3>
              <p className="text-brand-dark/70">
                Professional gutter cleaning and minor repairs to ensure optimal guard performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Precision Installation</h3>
              <p className="text-brand-dark/70">
                Expert installation using proper fastening techniques and weather sealing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Quality Inspection</h3>
              <p className="text-brand-dark/70">
                Final walkthrough and testing to ensure perfect function and your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-brand-light-green/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Gutter Guard Installation Pricing in Rocklin
            </h2>
            <p className="text-xl text-brand-dark/70">
              Transparent, competitive pricing with no hidden fees. Investment that pays for itself.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Factors Affecting Cost:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-light-green" />
                      <span>Linear feet of gutters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-light-green" />
                      <span>Home height and accessibility</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-light-green" />
                      <span>Guard system selection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-light-green" />
                      <span>Existing gutter condition</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">What&apos;s Included:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-light-green" />
                      <span>Premium gutter guard materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-light-green" />
                      <span>Professional installation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-light-green" />
                      <span>Complete gutter cleaning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-light-green" />
                      <span>Lifetime warranty</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Get Your FREE Estimate</h3>
                <p className="text-brand-dark/70 mb-6">
                  Pricing varies by home. Get an accurate quote with our free, no-obligation assessment.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button asChild size="lg" className="bg-brand-light-green hover:bg-brand-green">
                    <Link href="/get-quote/">Get FREE Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+19164153836">Call (916) 415-3836</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Serving Rocklin & Placer County
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Why Rocklin Homes Need Gutter Guards</h3>
                <p className="text-brand-dark/70 mb-4">
                  Rocklin&apos;s mature oak trees and seasonal weather patterns create unique challenges for homeowners. 
                  Fall brings heavy leaf drop, while winter storms test gutter systems with intense rainfall.
                </p>
                <p className="text-brand-dark/70">
                  Our gutter guard systems are specifically chosen to handle Rocklin&apos;s climate, from the dry 
                  summers that make leaves and debris brittle to the wet winters that demand maximum water flow capacity.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Local Service Areas</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Rocklin", "Roseville", "Granite Bay", "Folsom", "Lincoln", "Auburn", "Loomis", "Placer County"].map((city) => (
                    <div key={city} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-light-green" />
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
          <h2 className="text-4xl font-bold mb-6">Ready to Never Clean Gutters Again?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied Rocklin homeowners who chose professional gutter guard installation. 
            Get your free estimate today!
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-quote/">Get FREE Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-green">
              <a href="tel:+19164153836">Call (916) 415-3836</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 