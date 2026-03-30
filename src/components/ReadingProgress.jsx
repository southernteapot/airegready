'use client'

import { useState, useEffect, useCallback } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight

      if (docHeight <= 0) {
        setProgress(0)
        return
      }

      const scrolled = Math.min((scrollTop / docHeight) * 100, 100)
      setProgress(scrolled)
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll])

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
      className="fixed top-0 left-0 z-[60] h-[3px] w-full print:hidden"
    >
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          opacity: progress > 0 ? 1 : 0,
        }}
      />
    </div>
  )
}
