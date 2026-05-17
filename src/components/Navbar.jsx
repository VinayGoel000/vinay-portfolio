import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const navMotion = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      id="navbar"
      initial="hidden"
      animate="visible"
      variants={navMotion}
      className="sticky top-0 z-30 mx-auto w-full max-w-7xl px-6 py-5 backdrop-blur-xl"
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/30 px-5 py-3 shadow-soft">
        <a href="#home" className="text-lg font-semibold tracking-wide text-slate-100 transition hover:text-sky-300">
          V.</a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-slate-200 transition hover:border-sky-400/40 hover:text-sky-200 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mt-3 rounded-3xl border border-white/10 bg-slate-950/90 p-5 shadow-soft md:hidden"
          >
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900/80 hover:text-sky-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
