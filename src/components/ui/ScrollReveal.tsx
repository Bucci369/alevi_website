'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animationType?: 'fadeUp' | 'scale' | 'fadeLeft' | 'fadeRight'
  delay?: number
}

export function ScrollReveal({ 
  children, 
  className = '', 
  animationType = 'fadeUp',
  delay = 0 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    switch (animationType) {
      case 'scale':
        return isVisible ? 'scroll-animate-scale in-view' : 'scroll-animate-scale'
      case 'fadeLeft':
        return isVisible ? 'scroll-animate-left in-view' : 'scroll-animate-left'
      case 'fadeRight':
        return isVisible ? 'scroll-animate-right in-view' : 'scroll-animate-right'
      default:
        return isVisible ? 'scroll-animate in-view' : 'scroll-animate'
    }
  }

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}