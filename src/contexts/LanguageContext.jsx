import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'fr'
    return localStorage.getItem('portfolio-lang') || 'fr'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'))

  // t(value) : accepte soit un objet {fr, en}, soit une simple chaîne
  // (dans ce cas elle est renvoyée telle quelle, utile pour les noms
  // propres / technologies qui ne changent pas selon la langue).
  const t = (value) => {
    if (value && typeof value === 'object' && ('fr' in value || 'en' in value)) {
      return value[lang] ?? value.fr ?? value.en ?? ''
    }
    return value
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage doit être utilisé à l\'intérieur de <LanguageProvider>')
  return ctx
}
