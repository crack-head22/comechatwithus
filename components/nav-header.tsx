'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Logo } from "./Logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import gsap from 'gsap'

const navigation = [
  { text: "Solutions", href: "#solutions" },
  { text: "Platform", href: "#platform" },
  { text: "Partners", href: "#partners" },
  { text: "Resources", href: "#resources" },
  { text: "Company", href: "#company" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)

    gsap.from('.nav-item', {
      opacity: 1,
      y: -20,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out',
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="text-xl font-bold text-blue-900">Zeotap</span>
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navigation.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="nav-item text-lg font-medium text-blue-900 hover:text-blue-600 transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="nav-item">
              Login
            </Button>
            <Button className="nav-item">
              Get a Demo
            </Button>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-blue-900" />
              ) : (
                <Menu className="h-6 w-6 text-blue-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-blue-900 hover:bg-blue-500/10 hover:text-blue-600"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

