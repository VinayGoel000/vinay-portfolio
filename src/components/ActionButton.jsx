import { motion } from 'framer-motion'

export default function ActionButton({ href, icon: Icon, children, download, className = '', ...props }) {
  return (
    <motion.a
      href={href}
      target={download ? '_self' : '_blank'}
      rel={download ? undefined : 'noreferrer'}
      download={download ? 'VinayGoelResume.pdf' : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-[color:var(--text)] transition hover:border-[color:var(--accent)]/30 hover:bg-white/10 ${className}`}
      {...props}
    >
      {Icon ? <Icon className="h-4 w-4 text-[color:var(--accent)]" /> : null}
      {children}
    </motion.a>
  )
}
