import { motion } from 'framer-motion'

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
        <span className="text-slate-500">Built with React, Tailwind CSS, and Framer Motion.</span>
      </div>
    </motion.footer>
  )
}
