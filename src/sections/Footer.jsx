import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiLeetcode } from 'react-icons/si'

const footerLinks = [
  { name: 'Email', href: 'mailto:work.vinaygoel@gmail.com', icon: HiOutlineMail },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/vinay-goel-691960278', icon: FaLinkedin },
  { name: 'LeetCode', href: 'https://leetcode.com/u/FvfnNjdyCP/', icon: SiLeetcode },
]

export default function Footer() {
  return (
    <motion.footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[color:var(--muted)] sm:flex-row">
        <span>Copyright 2026 Vinay Goel | Delhi, India</span>
        <div className="flex items-center gap-3">
          {footerLinks.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[color:var(--accent)]/30"
              >
                <Icon className="h-5 w-5 text-[color:var(--text)]" />
              </a>
            )
          })}
        </div>
      </div>
    </motion.footer>
  )
}
