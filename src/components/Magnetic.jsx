import { useRef } from 'react'

export default function Magnetic({ children, className = '', as: Tag = 'a', ...props }) {
  const ref = useRef(null)

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isTouch =
    typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

  const MAX_OFFSET = 8 

  const handleMove = (e) => {
    if (prefersReduced || isTouch || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const offsetX = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, x * 0.12))
    const offsetY = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, y * 0.12))
    ref.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`
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