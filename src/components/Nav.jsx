import { useEffect, useState } from 'react'
import { navItems, profile } from '../data.js'

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header>
      <nav className="nav">
        <button className="logo" onClick={() => scrollTo('top')}>
          <span className="dot"></span>
          {profile.name}
        </button>
        <ul className="navlinks-desktop">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`navlink ${active === item.id ? 'active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <button className="navcta" onClick={() => scrollTo('contact')}>
          Me contacter
        </button>
      </nav>
    </header>
  )
}
