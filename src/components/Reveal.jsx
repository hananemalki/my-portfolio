import { useReveal } from '../hooks/useReveal.js'

export default function Reveal({ children, className = '', style, threshold }) {
  const [ref, visible] = useReveal(threshold)
  return (
    <div ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`} style={style}>
      {children}
    </div>
  )
}
