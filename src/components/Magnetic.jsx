import { useRef } from 'react'

/**
 * Wraps any anchor/button children and gives them a subtle "magnetic"
 * pull toward the cursor on hover. Skips the effect entirely if the
 * user prefers reduced motion, or on touch devices (no real hover).
 */
export default function Magnetic({ children, className = '', as: Tag = 'a', ...props }) {
  const ref = useRef(null)

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isTouch =
    typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

  const handleMove = (e) => {
    if (prefersReduced || isTouch || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.22}px, ${y * 0.32}px)`
  }

  const handleLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <Tag
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </Tag>
  )
}
