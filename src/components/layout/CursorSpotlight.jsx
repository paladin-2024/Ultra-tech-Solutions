import { useEffect, useRef } from 'react'

export default function CursorSpotlight() {
  const spotRef = useRef(null)

  useEffect(() => {
    const el = spotRef.current
    if (!el) return

    const move = (e) => {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={spotRef}
      className="pointer-events-none fixed z-[5] hidden lg:block"
      style={{
        width: '480px',
        height: '480px',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(139,26,26,0.06) 0%, transparent 70%)',
        transition: 'left 0.12s ease-out, top 0.12s ease-out',
      }}
    />
  )
}
