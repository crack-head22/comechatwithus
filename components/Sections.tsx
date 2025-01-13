'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { SlideIn } from './SlideIn'

gsap.registerPlugin(ScrollTrigger)

export function Sections() {
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sections = sectionsRef.current?.querySelectorAll('.section')
    if (!sections) return

    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      })
    })
  }, [])

  return (
    <div ref={sectionsRef} className="space-y-32">
      <section id="solutions" className="section min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SlideIn>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12">Solutions</h2>
          </SlideIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Acquisition and Growth',
                description: 'Drive revenue from new and existing customers while reducing your cost per action'
              },
              {
                title: 'Loyalty and Retention',
                description: 'Build customer loyalty to increase sales and better achieve commercial outcomes'
              },
              {
                title: 'Customer Experience',
                description: 'Investing in personalisation and experience decreases costs, increases revenue and improves brand reputation'
              }
            ].map((solution, index) => (
              <div 
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-900">{solution.title}</h3>
                <p className="text-blue-800/70 mb-4">{solution.description}</p>
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
                  Read more →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional sections as provided in the original code */}
    </div>
  )
}

