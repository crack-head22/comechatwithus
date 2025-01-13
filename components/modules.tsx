'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'

const modules = [
  "Data Unification",
  "AI Segmentation",
  "Omnichannel Personalization",
  "Privacy Management",
  "Customer Analytics",
]

export function Modules() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.from('.module-item', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    })
  }, [])

  return (
    <section ref={sectionRef} className="section py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Zeotap CDP Modules</h2>
        <Card className="bg-white/10 backdrop-blur-md p-8">
          <CardContent>
            <p className="text-blue-50 mb-6">
              Elevate your customer experiences by leveraging Zeotap CDP's comprehensive solution to integrate data from real-time platforms and data warehouses, unify with our patented ID stitching capabilities, effortlessly segment and orchestrate omni-channel customer journeys while prioritizing privacy and customer preferences.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {modules.map((module, index) => (
                <li key={index} className="module-item flex items-center text-blue-100">
                  <span className="mr-2 text-blue-300">•</span> {module}
                </li>
              ))}
            </ul>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Overview</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

