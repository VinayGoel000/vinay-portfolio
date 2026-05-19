import { motion } from 'framer-motion'
import { FiDownload, FiExternalLink } from 'react-icons/fi'
import { FaWindows } from 'react-icons/fa'

export default function ApplicationCard({ name, description, version, features, downloadLink, screenshot }) {
  return (
    <motion.article whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 210, damping: 24 }} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)] shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Desktop App</p>
              <h3 className="mt-3 font-serif text-4xl text-[color:var(--text)]">{name}</h3>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--text)]">v{version}</span>
          </div>
          <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">{description}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--text)]">
                {feature}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={downloadLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 px-5 py-3 text-sm text-[color:var(--text)]">
              <FiDownload /> Download EXE
            </a>
            <a href="https://github.com/VinayGoel000/team-iron-champ-releases/releases/tag/v1.8.0" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-[color:var(--text)]">
              <FiExternalLink /> GitHub Release
            </a>
          </div>
        </div>
        <div className="relative border-t border-white/10 lg:border-l lg:border-t-0">
          <img src={screenshot} alt={`${name} screenshot`} className="h-full w-full object-cover" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs text-white backdrop-blur">
            <FaWindows /> Windows build
          </div>
        </div>
      </div>
    </motion.article>
  )
}
