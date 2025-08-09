import Image from 'next/image'
import Link from "next/link"
import cities from "@/../scripts/cities.json"
import { QuoteForm, HeroZipForm } from "@/components/HomePageClient"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Droplets, Wrench, Star, Clock, Award, Users, DollarSign, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] flex items-center" 
               style={{
                 backgroundImage: 'url(/images/hero_optimized.webp)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat'
               }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container-custom grid gap-8 md:grid-cols-2 items-center z-10">
          <div className="text-white">
            <Badge className="mb-4 bg-brand-gold text-brand-dark font-semibold">Serving Rocklin & Greater Sacramento</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Rocklin&apos;s #1 Gutter Guards & Gutter Cleaning Experts
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Protect your home and never clean gutters again. Premium gutter guard installation, gutter cleaning, and full-service gutter care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-quote/" className="btn-primary text-center">
                Get Free Estimate
              </Link>
              <a href="tel:+19164153836" className="btn-secondary bg-white/10 text-white border-white hover:bg-white/20 text-center">
                Call (916) 415-3836
              </a>
            </div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
            <h3 className="font-semibold text-xl mb-4 text-brand-dark">Get Your Free Estimate</h3>
            <HeroZipForm />
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">500+</div>
              <div className="text-brand-grey">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">15+</div>
              <div className="text-brand-grey">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">100%</div>
              <div className="text-brand-grey">Satisfaction Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-gold mb-2">24/7</div>
              <div className="text-brand-grey">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Services</h2>
            <p className="section-sub max-w-2xl mx-auto">Complete gutter solutions for Rocklin and the Greater Sacramento area.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="absolute top-4 right-4">
                <Badge className="bg-brand-light-green text-white">Most Popular</Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-brand-light-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-brand-light-green" />
                </div>
                <CardTitle className="text-2xl">Gutter Guard Installation</CardTitle>
                <CardDescription>Never clean gutters again with our premium protection systems.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-brand-light-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Lifetime warranty
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-brand-light-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Professional installation
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-brand-light-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Premium materials
                  </li>
                </ul>
                <Link href="/services/gutter-guard-installation/" className="btn-primary w-full text-center">
                  Learn More
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-2xl">Gutter Cleaning</CardTitle>
                <CardDescription>Professional cleaning services to keep your gutters flowing properly.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Complete debris removal
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Downspout flushing
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Safety guaranteed
                  </li>
                </ul>
                <Link href="/services/gutter-cleaning/" className="btn-secondary w-full text-center">
                  Learn More
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-2xl">Gutter Installation & Repair</CardTitle>
                <CardDescription>New installations and expert repairs for lasting protection.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Seamless gutters
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom color matching
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Expert repairs
                  </li>
                </ul>
                <Link href="/services/gutter-installation/" className="btn-secondary w-full text-center">
                  Learn More
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/services/" className="inline-flex items-center text-brand-light-green font-semibold hover:text-brand-green transition">
              View all services
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-brand-light-green text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Simple, transparent process from quote to completion</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Quote</h3>
              <p className="text-white/80">Get your free estimate in minutes with our quick form</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Schedule</h3>
              <p className="text-white/80">We&apos;ll contact you to schedule your service at your convenience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Professional Work</h3>
              <p className="text-white/80">Our expert team delivers quality service with premium materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Satisfaction</h3>
              <p className="text-white/80">Enjoy long-lasting results with our quality guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Choose Rocklin Gutter Guard?</h2>
            <p className="section-sub max-w-2xl mx-auto">We&apos;re Rocklin&apos;s most trusted gutter experts with unmatched quality and service.</p>
          </div>
          
          {/* Main Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-light-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-brand-light-green" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">5-Star Service</h3>
              <p className="text-brand-dark/80">Consistently rated #1 by homeowners across Rocklin and Placer County for quality and reliability.</p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Same-Day Service</h3>
              <p className="text-brand-dark/80">Quick response times and flexible scheduling to work around your busy lifestyle.</p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Lifetime Warranty</h3>
              <p className="text-brand-dark/80">We stand behind our work with comprehensive warranties on all gutter guard installations.</p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Licensed & Insured</h3>
              <p className="text-brand-dark/80">Fully licensed, bonded, and insured professionals you can trust with your home.</p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Fair Pricing</h3>
              <p className="text-brand-dark/80">Transparent, upfront pricing with no hidden fees. Get the best value for your investment.</p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">100% Satisfaction</h3>
              <p className="text-brand-dark/80">We&apos;re not happy until you&apos;re completely satisfied with our work and service.</p>
            </Card>
          </div>

          {/* Value Proposition Banner */}
          <div className="bg-brand-light-green text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Never Clean Your Gutters Again!</h3>
            <p className="text-xl mb-6 text-white/90">Our premium gutter guard systems eliminate the need for dangerous gutter cleaning while protecting your home&apos;s foundation, landscaping, and value.</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Prevents Water Damage</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Stops Ice Dams</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Eliminates Pest Nesting</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Increases Home Value</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">What Our Customers Say</h2>
            <p className="section-sub max-w-2xl mx-auto">Real reviews from satisfied customers across Rocklin and Sacramento</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&ldquo;Excellent service! They installed gutter guards on our home and we haven&apos;t had to clean gutters since. Professional team and great quality work.&rdquo;</p>
                <div className="font-semibold">Sarah M.</div>
                <div className="text-sm text-gray-500">Rocklin, CA</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&ldquo;Fast, reliable gutter cleaning service. They were on time, thorough, and cleaned up everything. Will definitely use them again!&rdquo;</p>
                <div className="font-semibold">Mike R.</div>
                <div className="text-sm text-gray-500">Roseville, CA</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&ldquo;Outstanding gutter installation work. The team was professional, the price was fair, and the results exceeded expectations.&rdquo;</p>
                <div className="font-semibold">Jennifer L.</div>
                <div className="text-sm text-gray-500">Granite Bay, CA</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* QUOTE FORM SECTION */}
      <section className="py-20 bg-gray-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Get Your Free Quote Today</h2>
            <p className="section-sub">Ready to protect your home? Get a personalized quote in minutes.</p>
          </div>
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <QuoteForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Service Areas</h2>
            <p className="section-sub">Proudly serving Rocklin and surrounding communities</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {cities.map((city) => (
              <Link key={city} href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}/`} 
                    className="block p-4 rounded-lg border border-gray-200 hover:border-brand-light-green hover:shadow-md transition-all group">
                <div className="text-center">
                  <div className="font-semibold text-brand-dark group-hover:text-brand-light-green transition">{city}</div>
                  <div className="text-sm text-gray-500">CA</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/service-areas/" className="inline-flex items-center text-brand-light-green font-semibold hover:text-brand-green transition">
              View all service areas
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* LOCAL SEO SECTION */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Local Gutter Services Near You</h2>
            <p className="text-lg text-brand-grey mb-8">
              Rocklin Gutter Guard has been protecting homes throughout Placer County for over 15 years. 
              Our local expertise means we understand the unique challenges that Sacramento area homes face, 
              from heavy winter rains to dry summer heat that can damage unprotected gutters.
            </p>
            <p className="text-brand-grey mb-8">
              Whether you&apos;re in Rocklin, Roseville, Granite Bay, or any surrounding community, 
              our professional team is ready to provide the gutter protection and cleaning services 
              your home needs to stay safe and dry year-round.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-gold">Residential Services</h3>
                <ul className="space-y-2 text-brand-grey">
                  <li>• Gutter guard installation</li>
                  <li>• Professional gutter cleaning</li>
                  <li>• Gutter repair and maintenance</li>
                  <li>• New gutter installation</li>
                  <li>• Downspout services</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-gold">Additional Services</h3>
                <ul className="space-y-2 text-brand-grey">
                  <li>• Roof cleaning and maintenance</li>
                  <li>• Solar panel cleaning</li>
                  <li>• Pressure washing services</li>
                  <li>• Window cleaning</li>
                  <li>• Emergency storm damage cleanup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            <p className="section-sub">Get answers to common questions about our gutter services</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-left">How much do gutter guards cost?</AccordionTrigger>
              <AccordionContent>
                Gutter guard costs vary based on your home&apos;s size, gutter length, and the type of guard system. 
                Our professional installation typically ranges from $8-15 per linear foot. We offer free estimates 
                to provide you with accurate pricing for your specific needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-left">Do gutter guards really work?</AccordionTrigger>
              <AccordionContent>
                Yes! Quality gutter guards significantly reduce the amount of debris that enters your gutters, 
                cutting maintenance needs by 90% or more. While no system is 100% maintenance-free, 
                our premium guards keep out leaves, twigs, and most debris while allowing water to flow freely.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-left">How often should gutters be cleaned?</AccordionTrigger>
              <AccordionContent>
                In the Sacramento area, gutters should typically be cleaned twice per year - once in late fall 
                after leaves drop and once in early spring. Homes with many trees may need more frequent cleaning. 
                With gutter guards installed, annual maintenance is usually sufficient.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-left">Do you offer warranties?</AccordionTrigger>
              <AccordionContent>
                Yes! We stand behind our work with comprehensive warranties. Gutter guard installations come with 
                a lifetime material warranty and our workmanship is guaranteed. Gutter cleaning and repair services 
                include satisfaction guarantees to ensure you&apos;re completely happy with the results.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-8">
            <Link href="/faq/" className="inline-flex items-center text-brand-light-green font-semibold hover:text-brand-green transition">
              View all FAQs
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-light-green to-brand-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Home?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Rocklin Gutter Guard for their home protection needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote/" className="bg-white text-brand-light-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center">
              Get Free Estimate
            </Link>
            <a href="tel:+19164153836" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-center">
              Call (916) 415-3836
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
