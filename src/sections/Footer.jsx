import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiLeetcode } from 'react-icons/si'

const footerLinks = [
  {
    name: 'Email',
    href: 'mailto:work.vinaygoel@gmail.com',
    icon: HiOutlineMail,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/vinay-goel-691960278',
    icon: FaLinkedin,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/FvfnNjdyCP/',
    icon: SiLeetcode,
  },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="border-t border-white/10 bg-slate-950/80 px-6 py-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <span>© 2026 Vinay — Crafted for premium digital presence.</span>
        <div className="flex items-center gap-3">
          {footerLinks.map((item) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-400 transition hover:border-sky-400/40 hover:text-sky-200"
                aria-label={item.name}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </motion.footer>
  )
}
