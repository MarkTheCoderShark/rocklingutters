import Image from 'next/image'
import Link from "next/link"
import cities from "@/../scripts/cities.json"
import { QuoteForm, HeroZipForm } from "@/components/HomePageClient"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Droplets, Wrench, Star, Clock, Award, Users, DollarSign, CheckCircle, MapPin, Phone, Mail } from 'lucide-react'

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
              Protect your home and never clean gutters again. Premium gutter guard installation, professional gutter cleaning, and complete gutter repair services in Rocklin, Roseville, and Placer County.
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
            <h2 className="section-title mb-4">Professional Gutter Services in Rocklin</h2>
            <p className="section-sub max-w-3xl mx-auto">Complete gutter solutions for Rocklin, Roseville, Granite Bay, and the Greater Sacramento area. From gutter guard installation to emergency gutter repair, we protect your home&apos;s foundation and value.</p>
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
                <CardDescription>Never clean gutters again with our premium protection systems. Professional gutter guard installation in Rocklin and Placer County.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-brand-light-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Lifetime warranty protection
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-brand-light-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Professional installation team
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-brand-light-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Premium aluminum materials
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
                <CardTitle className="text-2xl">Gutter Cleaning Services</CardTitle>
                <CardDescription>Professional gutter cleaning in Rocklin to prevent water damage and maintain proper drainage.</CardDescription>
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
                <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-brand-gold" />
                </div>
                <CardTitle className="text-2xl">Gutter Installation & Repair</CardTitle>
                <CardDescription>New seamless gutter installation and expert gutter repair services in Rocklin, CA.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-brand-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Seamless aluminum gutters
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-brand-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom color matching
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-brand-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
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

      {/* LOCAL SEO SECTION */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Gutter Services Near You in Placer County</h2>
            <p className="section-sub max-w-3xl mx-auto">Serving homeowners throughout Rocklin, Roseville, Granite Bay, Folsom, Lincoln, Auburn, and Loomis with professional gutter installation, gutter cleaning, and gutter guard services.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Why Rocklin Homeowners Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-brand-light-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-dark">Local Expertise</h4>
                    <p className="text-brand-dark/70">We understand Rocklin&apos;s unique climate and tree coverage that affects gutter performance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-brand-light-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-dark">Quick Response</h4>
                    <p className="text-brand-dark/70">Same-day service available for emergency gutter repairs and urgent cleaning needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-brand-light-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-dark">Community Trust</h4>
                    <p className="text-brand-dark/70">Over 500 satisfied customers in Rocklin and surrounding Placer County communities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-brand-dark mb-4">Service Areas</h4>
              <div className="grid grid-cols-2 gap-3">
                {cities.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-brand-dark">
                    <CheckCircle className="w-4 h-4 text-brand-light-green" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-brand-light-green/10 rounded-lg">
                <p className="text-sm text-brand-dark/80">
                  <strong>Need emergency gutter repair?</strong> We provide 24/7 emergency services for storm damage and urgent gutter issues throughout Placer County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-brand-light-green text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Our Gutter Services Work</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Simple, transparent process from free quote to professional completion</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Quote</h3>
              <p className="text-white/80">Get your free estimate in minutes with our quick online form or phone consultation</p>
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
              <p className="text-white/80">Our expert team delivers quality service with premium materials and attention to detail</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Satisfaction</h3>
              <p className="text-white/80">Enjoy long-lasting results with our quality guarantee and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Choose Rocklin Gutter Guard?</h2>
            <p className="section-sub max-w-2xl mx-auto">We&apos;re Rocklin&apos;s most trusted gutter experts with unmatched quality, service, and local expertise.</p>
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
            <p className="text-xl mb-6 text-white/90">Our premium gutter guard systems eliminate the need for dangerous gutter cleaning while protecting your home&apos;s foundation, landscaping, and value. Professional gutter installation and repair services in Rocklin, CA.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote/" className="btn-primary bg-white text-brand-dark hover:bg-gray-100">
                Get Free Estimate
              </Link>
              <a href="tel:+19164153836" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-brand-dark">
                Call (916) 415-3836
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">What Our Rocklin Customers Say</h2>
            <p className="section-sub max-w-2xl mx-auto">Real reviews from satisfied homeowners throughout Placer County</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-brand-dark/80 mb-4">
                &ldquo;Rocklin Gutter Guard installed our gutter guards last year and we haven&apos;t had to clean our gutters since! The installation was professional and the quality is outstanding. Highly recommend for any Rocklin homeowner.&rdquo;
              </p>
              <div className="font-semibold text-brand-dark">- Sarah M., Rocklin</div>
            </Card>

            <Card className="border-0 shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-brand-dark/80 mb-4">
                &ldquo;Excellent gutter cleaning service! They came out same-day when we had an emergency clog. Professional, thorough, and reasonably priced. Will definitely use them again for all our gutter needs.&rdquo;
              </p>
              <div className="font-semibold text-brand-dark">- Mike T., Roseville</div>
            </Card>

            <Card className="border-0 shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-brand-dark/80 mb-4">
                &ldquo;The team at Rocklin Gutter Guard replaced our old gutters with seamless aluminum ones. The work was done quickly and looks great. Their attention to detail and customer service is top-notch.&rdquo;
              </p>
              <div className="font-semibold text-brand-dark">- Jennifer L., Granite Bay</div>
            </Card>
          </div>
        </div>
      </section>

      {/* QUOTE FORM SECTION */}
      <section className="py-20 bg-gradient-to-br from-brand-dark to-brand-green">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Get Your Free Gutter Estimate Today</h2>
              <p className="text-xl text-white/90 mb-8">
                Protect your Rocklin home with professional gutter services. Get a free, no-obligation estimate for gutter guard installation, gutter cleaning, or gutter repair.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-gold" />
                  <span>Free estimates with no pressure</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-gold" />
                  <span>Licensed and insured professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-gold" />
                  <span>Same-day service available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-gold" />
                  <span>Lifetime warranty on gutter guards</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Request Your Free Estimate</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Gutter Services Throughout Placer County</h2>
            <p className="section-sub max-w-2xl mx-auto">Professional gutter installation, cleaning, and repair services in Rocklin and surrounding communities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link key={city} href={`/service-areas/${city.toLowerCase().replace(' ', '-')}/`} 
                    className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <h3 className="font-semibold text-brand-dark group-hover:text-brand-light-green transition mb-2">{city}</h3>
                <p className="text-sm text-brand-dark/70">Gutter Services</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            <p className="section-sub max-w-2xl mx-auto">Common questions about gutter services in Rocklin and Placer County</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How often should I clean my gutters in Rocklin?
                </AccordionTrigger>
                <AccordionContent>
                  In Rocklin&apos;s climate with oak trees and seasonal weather, we recommend cleaning gutters at least twice per year - once in spring and once in fall. Homes with heavy tree coverage may need more frequent cleaning.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Do gutter guards really work?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Our premium gutter guard systems are 99.9% effective at keeping leaves and debris out of your gutters. They eliminate the need for dangerous ladder climbs and protect your home from water damage.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How much does gutter installation cost in Rocklin?
                </AccordionTrigger>
                <AccordionContent>
                  Gutter installation costs vary based on home size, material choice, and complexity. We provide free, detailed estimates with no hidden fees. Contact us for a personalized quote for your Rocklin home.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Do you offer emergency gutter repair?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we provide 24/7 emergency gutter repair services for storm damage, leaks, and urgent issues throughout Rocklin and Placer County. Call us anytime for immediate assistance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  What areas do you serve?
                </AccordionTrigger>
                <AccordionContent>
                  We serve Rocklin, Roseville, Granite Bay, Folsom, Lincoln, Auburn, Loomis, and throughout Placer County. Our team is locally based and understands the unique needs of Northern California homeowners.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Rocklin Home?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get professional gutter services from Rocklin&apos;s most trusted experts. Free estimates, same-day service, and lifetime warranties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote/" className="btn-primary bg-brand-light-green text-white hover:bg-brand-green">
              Get Free Estimate
            </Link>
            <a href="tel:+19164153836" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-brand-dark">
              Call (916) 415-3836
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
