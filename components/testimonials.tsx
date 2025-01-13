'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import gsap from 'gsap'

const testimonials = [
  {
    quote: "Zeotap is a strategic partner of Google Cloud in EMEA, driving additional value and improved experience for our customers with GCP. We realise that leveraging first-party data to drive digital transformation and omni-channel personalisation is top of mind for retailers - while also ensuring the best-possible privacy and security. We believe Zeotap - with its roots in Germany - is an expert and reliable partner to help navigate the first-party data opportunity.",
    author: "Adaire Martin-Fox",
    position: "President of Google Cloud International and Head of Google Ireland",
    company: "Google Cloud",
    logo: "/google-cloud-logo.png"
  },
  {
    quote: "Based on my experience, I can honestly say Zeotap's platform is without equal. Brands can happily jettison a complex and inefficient patchwork of point solutions in favour of their unified stack for all data-related activities.",
    author: "Kay Schwabedal",
    position: "Chief Digital Officer",
    company: "Virgin Media O2",
    logo: "/virgin-media-o2-logo.png"
  },
]

export function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    })
  }, [])

  return (
    <section ref={sectionRef} className="section py-20 bg-gradient-to-br from-blue-800 to-blue-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card bg-white/10 backdrop-blur-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <blockquote className="text-blue-50 mb-4">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <Image
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-blue-100">{testimonial.author}</p>
                    <p className="text-blue-200">{testimonial.position}</p>
                    <p className="text-blue-300">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

