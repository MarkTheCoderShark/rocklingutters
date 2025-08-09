import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wrench, CheckCircle, Clock, Shield, AlertTriangle, Users, Star } from "lucide-react"
import SeoJsonLd from "@/components/SeoJsonLd"

export const metadata = {
  title: "Gutter Installation & Repair Rocklin CA | Seamless Gutters | Rocklin Gutter Guard",
  description: "Expert gutter installation & repair in Rocklin, CA. Seamless aluminum gutters, custom solutions, emergency repairs. Licensed & insured. Free estimates. Call (916) 415-3836.",
  keywords: [
    "gutter installation Rocklin CA",
    "gutter repair Rocklin California",
    "seamless gutters Rocklin",
    "new gutter installation Rocklin",
    "gutter replacement Rocklin",
    "aluminum gutters Rocklin",
    "gutter system installation",
    "emergency gutter repair Rocklin",
    "custom gutters Rocklin",
    "Placer County gutter installation"
  ],
  canonical: "https://rocklingutterguard.com/services/gutter-installation/"
}

export default function GutterInstallationPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rocklingutterguard.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://rocklingutterguard.com/services/" },
      { "@type": "ListItem", position: 3, name: "Gutter Installation & Repair", item: "https://rocklingutterguard.com/services/gutter-installation/" }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gutter Installation & Repair",
    description: "Professional gutter installation and repair services in Rocklin, CA and Placer County",
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
    serviceType: "Gutter Installation & Repair"
  }

  return (
    <div className="space-y-16">
      <SeoJsonLd data={breadcrumb} />
      <SeoJsonLd data={serviceSchema} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500/10 to-brand-light-green/5 py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-500 text-white">Expert Installation</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                Gutter Installation & Repair in <span className="text-orange-500">Rocklin, CA</span>
              </h1>
              <p className="text-xl text-brand-dark/80 mb-6">
                Protect your home with expertly installed seamless gutters and prompt repair services. 
                From new construction to complete replacements, we deliver lasting solutions for Rocklin homes.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-light-green" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
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
                src="/images/gutterguardinstallation.jpg" 
                alt="Professional gutter installation in Rocklin CA" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-bold text-brand-dark">Expert Installation</div>
                    <div className="text-sm text-brand-dark/70">Seamless Aluminum Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Complete Gutter Installation & Repair Services
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              From new installations to emergency repairs, we provide comprehensive gutter solutions for Rocklin homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl">New Installations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Complete gutter system installation for new construction and full replacements.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>Seamless aluminum gutters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>Custom color matching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>Professional hangers & fasteners</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <CardTitle className="text-xl">Emergency Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Fast repair services for storm damage, leaks, and urgent gutter issues.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Same-day service available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Leak detection & sealing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500" />
                    <span>Storm damage restoration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">System Replacements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Complete gutter system replacement for aging or damaged gutters.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Old system removal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Fascia board inspection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Proper slope adjustment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <CardTitle className="text-xl">Downspout Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Complete downspout installation, repair, and drainage solutions.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Downspout installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Underground drainage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Extensions & splash blocks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl">Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Specialized gutter solutions for unique architectural challenges.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    <span>Complex roofline solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    <span>Historic home compatibility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    <span>Architectural integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Maintenance & Tune-ups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Preventive maintenance to extend your gutter system&apos;s lifespan.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span>Joint sealing & repairs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span>Hanger adjustment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span>Slope optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Our Professional Installation Process
            </h2>
            <p className="text-xl text-brand-dark/70">
              Meticulous planning and expert installation ensure your gutters perform perfectly for decades.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-3 text-brand-dark">Site Assessment</h3>
              <p className="text-brand-dark/70 text-sm">
                Detailed measurement and evaluation of your roofline, fascia, and drainage needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-3 text-brand-dark">Custom Fabrication</h3>
              <p className="text-brand-dark/70 text-sm">
                On-site fabrication of seamless gutters to exact measurements for perfect fit.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-3 text-brand-dark">Professional Installation</h3>
              <p className="text-brand-dark/70 text-sm">
                Expert installation with proper slope, secure hangers, and weatherproof sealing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-3 text-brand-dark">Water Testing</h3>
              <p className="text-brand-dark/70 text-sm">
                Comprehensive water flow testing to ensure optimal drainage performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                5
              </div>
              <h3 className="text-lg font-bold mb-3 text-brand-dark">Final Inspection</h3>
              <p className="text-brand-dark/70 text-sm">
                Quality assurance walkthrough and customer satisfaction verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gutter Materials */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Premium Gutter Materials & Options
            </h2>
            <p className="text-xl text-brand-dark/70">
              Choose from our selection of high-quality materials designed for California&apos;s climate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Badge className="w-fit bg-orange-500 text-white mb-2">Most Popular</Badge>
                <CardTitle className="text-2xl">Seamless Aluminum Gutters</CardTitle>
                <CardDescription>
                  The gold standard for residential gutter systems with unmatched durability.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">Rust-resistant aluminum</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">20+ color options</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">No seams or joints</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">50+ year lifespan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">Low maintenance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">Excellent value</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Premium Copper Gutters</CardTitle>
                <CardDescription>
                  Luxury option with distinctive patina and exceptional longevity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">Natural copper material</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">Develops beautiful patina</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">Antimicrobial properties</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">100+ year lifespan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">Historic home compatible</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">Increases home value</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Signs You Need New Gutters */}
      <section className="py-16 bg-brand-light-green/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Signs You Need New Gutters
            </h2>
            <p className="text-xl text-brand-dark/70">
              Don&apos;t wait for major damage! Watch for these warning signs that indicate it&apos;s time for replacement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cracks, splits, or rust spots",
              "Gutters pulling away from house",
              "Water pooling near foundation",
              "Peeling paint or water stains",
              "Overflowing during normal rain",
              "Sagging or uneven gutters",
              "Multiple leaks or joint failures",
              "Gutters over 20 years old",
              "Frequent repair needs"
            ].map((sign, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <AlertTriangle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-brand-dark">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Gutter Installation Pricing in Rocklin
            </h2>
            <p className="text-xl text-brand-dark/70">
              Transparent pricing with no hidden fees. Quality installation that lasts for decades.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Installation Factors:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span>Linear feet of gutters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span>Material selection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span>Home height & complexity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span>Downspout requirements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Installation Includes:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span>Premium gutter materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span>Professional installation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span>All hangers & fasteners</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
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
                  Professional assessment and accurate pricing for your specific needs.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
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
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Rocklin&apos;s Premier Gutter Installation Experts
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Built for Rocklin&apos;s Climate</h3>
                <p className="text-brand-dark/70 mb-4">
                  Rocklin&apos;s Mediterranean climate demands gutters that can handle both intense winter rains 
                  and long dry summers. Our systems are specifically designed for California conditions.
                </p>
                <p className="text-brand-dark/70">
                  From historic downtown homes to modern developments in Whitney Ranch, we understand 
                  Rocklin&apos;s diverse architectural styles and drainage requirements.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Rocklin", "Roseville", "Granite Bay", "Folsom", "Lincoln", "Auburn", "Loomis", "Placer County"].map((city) => (
                    <div key={city} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
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
      <section className="py-16 bg-gradient-to-r from-orange-500 to-brand-light-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for New Gutters?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Protect your Rocklin home with professional gutter installation. Expert craftsmanship, 
            premium materials, and lasting peace of mind.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-quote/">Get FREE Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-500">
              <a href="tel:+19164153836">Call (916) 415-3836</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 