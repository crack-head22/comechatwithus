'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const modules = [
  "Data Unification",
  "AI Segmentation",
  "Omnichannel Personalization",
  "Privacy Management",
  "Customer Analytics",
]

export function CdpModules() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.module-item', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Zeotap CDP Modules</h2>
        <Card className="bg-white shadow-lg p-8">
          <CardContent>
            <p className="text-blue-700 mb-6">
              Elevate your customer experiences by leveraging Zeotap CDP's comprehensive solution to integrate data from real-time platforms and data warehouses, unify with our patented ID stitching capabilities, effortlessly segment and orchestrate omni-channel customer journeys while prioritizing privacy and customer preferences.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {modules.map((module, index) => (
                <li key={index} className="module-item flex items-center text-blue-600">
                  <span className="mr-2 text-blue-400">•</span> {module}
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

