'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function CdpIntegrations() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.integration-card', {
        opacity: 0,
        y: 20,
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
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <Card className="integration-card bg-white shadow-lg p-8">
          <CardContent>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Zeotap CDP Integrations</h2>
            <p className="text-blue-700 mb-6">
              Zeotap CDP integrates your customer data with all your essential business tools with out-of-the-box connectors, providing trusted, actionable data to fuel your business. With over 150 pre-built (business-ready) integrations, you can effortlessly connect Zeotap CDP with a range of the most utilised marketing technologies in just a few clicks.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Overview</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

