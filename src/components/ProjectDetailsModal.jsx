import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

function DetailList({ title, items }) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">{title}</p>
      <ul className="space-y-2 text-sm leading-7 text-[color:var(--text)]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ProjectDetailsModal({ open, onClose, project }) {
  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button type="button" aria-label="Close project details" className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-[color:var(--surface-strong)] shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Project Details</p>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 id="project-modal-title" className="font-serif text-3xl text-[color:var(--text)]">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    {project.status}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[color:var(--text)] transition hover:scale-105 hover:bg-white/10"
                aria-label="Close modal"
              >
                <FiX />
              </button>
            </div>

            <div className="grid gap-6 px-6 py-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge) => (
                    <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[color:var(--text)]">
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Project Overview</p>
                  <p className="text-sm leading-7 text-[color:var(--muted)]">{project.overview}</p>
                </div>
                <DetailList title="Key Features" items={project.features} />
                <DetailList title="Technology Stack" items={project.stack} />
              </div>

              <div className="space-y-6 rounded-[1.5rem] border border-white/10 bg-black/10 p-5">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Challenges Solved</p>
                  <ul className="space-y-2 text-sm leading-7 text-[color:var(--text)]">
                    {project.challenges.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent-strong)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Future Improvements</p>
                  <ul className="space-y-2 text-sm leading-7 text-[color:var(--text)]">
                    {project.future.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
