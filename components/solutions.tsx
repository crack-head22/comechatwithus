'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'

const solutions = [
  {
    title: 'Acquisition and Growth',
    description: 'Drive revenue from new and existing customers while reducing your cost per action',
  },
  {
    title: 'Loyalty and Retention',
    description: 'Build customer loyalty to increase sales and better achieve commercial outcomes',
  },
  {
    title: 'Customer Experience and Personalisation',
    description: 'Investing in personalisation and experience decreases costs, increases revenue and improves brand reputation',
  },
  {
    title: 'Predictive Insights and Customer Analytics',
    description: 'Transform diverse customer data into insights to engage with customers across the lifecycle intelligently',
  },
  {
    title: 'Data Collection and Privacy',
    description: 'Omnichannel data collection, including up-to-date consumer consent choices, delivers GDPR compliance and optimised customer experiences',
  },
]

export function Solutions() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.from('.solution-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    })
  }, [])

  return (
    <section ref={sectionRef} className="section py-20 bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Solutions Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="solution-card bg-white/20 backdrop-blur-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-100">{solution.title}</h3>
                <p className="text-blue-50 mb-4">{solution.description}</p>
                <Button variant="outline" className="text-blue-100 hover:bg-blue-700 hover:text-white">
                  Read more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

