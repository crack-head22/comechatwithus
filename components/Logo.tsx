import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function Logo() {
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const logo = logoRef.current
    if (!logo) return

    gsap.to(logo, {
      rotationY: 360,
      duration: 2,
      repeat: -1,
      ease: "power2.inOut",
      transformOrigin: "center center"
    })
  }, [])

  return (
    <div ref={logoRef} className="relative w-12 h-12 transform perspective-1000">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zeotap-9QGxShuXiuGBZkUXyQ5pIZSrYR7avy.png"
        alt="Zeotap Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}

