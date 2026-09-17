import { LanguageProvider } from './contexts/LanguageContext.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Outro from './components/Outro.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Skills />
          <Contact />
          <Outro />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  )
}