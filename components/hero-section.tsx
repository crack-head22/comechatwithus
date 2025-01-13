'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'

export function HeroSection() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const tl = gsap.timeline()

      // Animate title with text scramble effect
      tl.from(titleRef.current, {
        duration: 2,
        text: {
          value: "Loading...",
          delimiter: "",
        },
        ease: "none",
      })

      // 3D rotation for logo
      gsap.to(logoRef.current, {
        rotationY: 360,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      })

      // Parallax effect for background
      gsap.to(".hero-bg", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <div
            ref={logoRef}
            className="relative w-40 h-40 perspective-1000"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zeotap-DILwnT7mU1qqR5aRL7XmGqkB9U2O9o.png"
              alt="Zeotap Logo"
              fill
              className="object-contain transform-gpu"
            />
          </div>
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            The Effective CDP for Data-Driven Retail
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Adopt a real Data-driven strategy to drive omnichannel personalisation,
            prevent churn, and foster loyalty
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-transform"
          >
            BOOK A DEMO
          </Button>
        </div>
      </div>
    </section>
  )
}

