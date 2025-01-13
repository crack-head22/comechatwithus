'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const recognitions = [
  { name: "CDP Institute", logo: "/cdp-institute-logo.png" },
  { name: "Legal 500", logo: "/legal-500-logo.png" },
  { name: "Gartner", logo: "/gartner-logo.png" },
  { name: "G2", logo: "/g2-logo.png" },
  { name: "Adweek", logo: "/adweek-logo.png" },
  { name: "AdExchanger", logo: "/adexchanger-logo.png" },
]

export function Recognition() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.from('.recognition-logo', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    })
  }, [])

  return (
    <section ref={sectionRef} className="section py-20 bg-gradient-to-br from-blue-900 to-blue-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Industry Recognitions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {recognitions.map((recognition, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={recognition.logo}
                alt={`${recognition.name} logo`}
                width={120}
                height={60}
                className="recognition-logo filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

