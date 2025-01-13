'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    gsap.from('.nav-item', {
      y: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out',
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : ''
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zeotap-DILwnT7mU1qqR5aRL7XmGqkB9U2O9o.png"
            alt="Zeotap Logo"
            width={40}
            height={40}
            className="nav-item"
          />
          <span className="nav-item font-bold text-xl">Zeotap</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Solutions', 'Platform', 'Resources', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-item text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <Button className="nav-item" size="sm">
          Book a Demo
        </Button>
      </nav>
    </header>
  )
}

