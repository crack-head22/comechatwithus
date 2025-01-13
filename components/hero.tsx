'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'

export function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: 'power3.out',
    }).from('.hero-content', {
      duration: 1,
      opacity: 0,
      y: 30,
      stagger: 0.2,
      ease: 'power3.out',
    }, '-=0.5')

    gsap.to('.floating-logo', {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
  }, [])

  return (
    <section ref={heroRef} className="section pt-32 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="floating-logo mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zeotap-DILwnT7mU1qqR5aRL7XmGqkB9U2O9o.png"
              alt="Zeotap Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
          >
            The Effective CDP for Data-Driven Retail
          </h1>
          <p className="hero-content text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Adopt a real Data-driven strategy to drive omnichannel personalisation,
            prevent churn, and foster loyalty
          </p>
          <Button 
            size="lg" 
            className="hero-content bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all"
          >
            BOOK A DEMO
          </Button>
        </div>
      </div>
    </section>
  )
}

