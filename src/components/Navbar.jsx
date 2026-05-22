import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiCode, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Applications', href: '#applications' },
  { label: 'Contact', href: '#contact' },
]

const themeOrder = ['dark', 'light', 'purple']

function ThemeIcon({ theme }) {
  if (theme === 'light') return <FiSun />
  if (theme === 'purple') return <FiCode />
  return <FiMoon />
}

export default function Navbar({ theme, onThemeChange }) {
  const [open, setOpen] = useState(false)

  const cycleTheme = () => {
    const nextTheme = themeOrder[(themeOrder.indexOf(theme) + 1) % themeOrder.length]
    onThemeChange(nextTheme)
  }

  return (
    <motion.header className="sticky top-0 z-50 border-b border-white/5 bg-[color:var(--bg)]/85 backdrop-blur-xl transition-colors duration-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-1 text-xl font-semibold tracking-tight text-[color:var(--text)]">
          <span className="font-serif text-2xl">Vinay</span>
          <span className="text-[color:var(--accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-[color:var(--muted)] transition hover:text-[color:var(--text)]">
              {link.label}
            </a>
          ))}
          <motion.button
            type="button"
            onClick={cycleTheme}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-[color:var(--text)] shadow-soft transition duration-300 hover:border-[color:var(--accent)]/40 hover:bg-white/10"
            aria-label={`Switch theme. Current theme: ${theme}`}
          >
            <ThemeIcon theme={theme} />
            <span className="hidden sm:inline capitalize">{theme}</span>
          </motion.button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <motion.button
            type="button"
            onClick={cycleTheme}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[color:var(--text)] transition hover:border-[color:var(--accent)]/40 hover:bg-white/10"
            aria-label={`Switch theme. Current theme: ${theme}`}
          >
            <ThemeIcon theme={theme} />
          </motion.button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[color:var(--text)]"
            aria-label="Toggle navigation"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-white/5 bg-[color:var(--bg)] px-6 py-4 transition-colors duration-500 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-[color:var(--muted)] transition hover:bg-white/5 hover:text-[color:var(--text)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
