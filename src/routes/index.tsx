import { createFileRoute } from '@tanstack/react-router'
import Navbar from '~/components/Navbar'
import Hero from '~/components/Hero'
import TrustBadges from '~/components/TrustBadges'
import About from '~/components/About'
import Services from '~/components/Services'
import WhyChooseUs from '~/components/WhyChooseUs'
import Process from '~/components/Process'
import Pricing from '~/components/Pricing'
import Testimonials from '~/components/Testimonials'
import FAQ from '~/components/FAQ'
import MiscSections from '~/components/MiscSections'
import { CTASection, ContactSection } from '~/components/CTAContact'
import Footer from '~/components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

/**
 * Home page — SparkleClean Pro professional cleaning service landing page.
 * Composed of modular sections for maintainability and future backend integration.
 */
function Home() {
  return (
    <>
      {/* Structured data for SEO (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://www.sparklecleanpro.com',
            name: 'SparkleClean Pro',
            description: 'Professional residential and commercial cleaning services with eco-friendly products.',
            url: 'https://www.sparklecleanpro.com',
            telephone: '+15551234567',
            email: 'hello@sparklecleanpro.com',
            foundingDate: '2013',
            founder: {
              '@type': 'Person',
              name: 'Maria Chen',
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: '742 Clean Street, Suite 200',
              addressLocality: 'Metropolis',
              addressRegion: 'ST',
              postalCode: '12345',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 40.7128,
              longitude: -74.006,
            },
            image: 'https://www.sparklecleanpro.com/og-image.jpg',
            priceRange: '$89 - $499',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '2847',
              bestRating: '5',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '07:00',
                closes: '19:00',
              },
            ],
            areaServed: [
              { '@type': 'City', name: 'Downtown' },
              { '@type': 'City', name: 'Maplewood' },
              { '@type': 'City', name: 'Lakeside' },
              { '@type': 'City', name: 'Oak Park' },
              { '@type': 'City', name: 'West Hills' },
              { '@type': 'City', name: 'Riverside' },
              { '@type': 'City', name: 'Eastgate' },
              { '@type': 'City', name: 'Northwood' },
              { '@type': 'City', name: 'Southpointe' },
            ],
            sameAs: [
              'https://facebook.com/sparklecleanpro',
              'https://instagram.com/sparklecleanpro',
              'https://twitter.com/sparklecleanpro',
              'https://linkedin.com/company/sparklecleanpro',
            ],
          }),
        }}
      />

      <Navbar />
      <Hero />
      <TrustBadges />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <MiscSections />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  )
}