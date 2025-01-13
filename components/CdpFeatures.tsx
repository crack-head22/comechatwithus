'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function CdpFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
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
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <Card className="feature-card bg-white shadow-lg p-8">
          <CardContent>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Zeotap CDP Features</h2>
            <p className="text-blue-700 mb-6">
              Zeotap CDP offers powerful features to build a comprehensive customer view, get deep insights, leverage AI to segment precisely and personalize across customer journeys with consent.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Overview</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

