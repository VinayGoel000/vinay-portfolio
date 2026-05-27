import { useLayoutEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Applications from './sections/Applications.jsx'
import Resume from './sections/Resume.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import Certificates from './pages/Certificates.jsx'

const THEME_KEY = 'vinay-portfolio-theme'
const THEMES = ['dark', 'light', 'purple']

function App() {
  const location = useLocation()
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    const savedTheme = window.localStorage.getItem(THEME_KEY)
    return THEMES.includes(savedTheme) ? savedTheme : 'dark'
  })

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return (
    <div className="min-h-screen">
      <Navbar
        theme={theme}
        onThemeChange={setTheme}
        currentPath={location.pathname}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Hero />
                <section className="px-6 pb-4 pt-0">
                  <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
                    {[
                      { label: 'Years learning', value: '4+' },
                      { label: 'Projects shipped', value: '10+' },
                      { label: 'Core stacks', value: '3' },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)] p-6 text-left shadow-soft backdrop-blur-xl">
                        <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">{stat.label}</p>
                        <p className="mt-4 text-4xl font-semibold text-[color:var(--text)]">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </section>
                <About />
                <Skills />
                <Projects />
                <Applications />
                <Resume />
                <Contact />
              </>
            )}
          />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </main>
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/certificates" element={null} />
      </Routes>
    </div>
  )
}

export default App
