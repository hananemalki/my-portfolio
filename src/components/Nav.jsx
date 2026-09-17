import { useEffect, useState } from 'react'
import { navItems, profile } from '../data.js'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import { useTheme } from '../contexts/ThemeContext.jsx'
import { strings } from '../strings.js'

export default function Nav() {
  const [active, setActive] = useState('')
  const { lang, toggleLang, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

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
                {t(item.label)}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-toggles">
          <button
            className="toggle-btn"
            onClick={toggleTheme}
            aria-label={t(theme === 'dark' ? strings.toggles.themeToLight : strings.toggles.themeToDark)}
            title={t(theme === 'dark' ? strings.toggles.themeToLight : strings.toggles.themeToDark)}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className="toggle-btn lang-toggle-btn"
            onClick={toggleLang}
            aria-label={t(strings.toggles.switchLang)}
            title={t(strings.toggles.switchLang)}
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>

        <button className="navcta" onClick={() => scrollTo('contact')}>
          {t(strings.nav.contact)}
        </button>
      </nav>
    </header>
  )
}
