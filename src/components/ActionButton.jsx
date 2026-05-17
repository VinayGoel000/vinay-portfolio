import { motion } from 'framer-motion'

export default function ActionButton({ href, icon: Icon, children, download, className = '', ...props }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={download ? 'VinayGoelResume.pdf' : undefined}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-slate-900/75 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:border-sky-400/40 hover:bg-slate-900/95 hover:text-sky-100 ${className}`}
      {...props}
    >
      {Icon ? <Icon className="h-5 w-5 text-sky-300" /> : null}
      {children}
    </motion.a>
  )
}
