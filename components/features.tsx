'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, Monitor, Lightbulb, Search, Shield, ThumbsUp } from 'lucide-react'
import gsap from 'gsap'

const features = [
  {
    icon: Clock,
    title: 'IMMEDIATE VALUE',
    subtitle: '4+4 Framework',
    description: 'Specialised in prioritising simple use cases that drive commercial outcomes in 8 weeks',
  },
  {
    icon: Monitor,
    title: 'EASY DEPLOYMENT',
    subtitle: 'GCP Native',
    description: 'Frictionless deployment make existing tools and investment better with latency and cost advantages',
  },
  {
    icon: Lightbulb,
    title: 'INTUITIVE INTERFACE',
    subtitle: 'Built for Marketers',
    description: 'Designed for hands-on marketers with no need for technical coding skills',
  },
  {
    icon: Search,
    title: '360 IDENTITY',
    subtitle: 'Including Cookieless ID',
    description: 'Patented identity stitching strategies for discriminatory digital marketing use cases',
  },
  {
    icon: Shield,
    title: 'PRIVACY ABOVE ALL',
    subtitle: 'From Europe for Europe',
    description: 'Conceived in Germany and developed for stringent European regulation',
  },
  {
    icon: ThumbsUp,
    title: 'TRUSTED PARTNER',
    subtitle: 'We will be your trusted partner',
    description: 'Not just a software vendor, that will make your CDP project successful',
  },
]

export function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.from('.feature-card', {
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
    <section ref={sectionRef} className="section py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-sm font-semibold text-blue-600 mb-2">{feature.title}</h3>
                <h4 className="text-xl font-bold mb-3">{feature.subtitle}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

