import { motion } from 'framer-motion'
import { FiGlobe, FiPlay } from 'react-icons/fi'

export default function ProjectCard({ title, description, tags, github, live, demoVideo }) {
  const hasGithub = github && github !== '#'
  const hasLive = live && live !== '#'
  const hasDemoVideo = demoVideo && demoVideo !== '#'

  return (
    <motion.article whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 220, damping: 22 }} className="rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)] p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Featured Work</p>
          <h3 className="mt-3 font-serif text-3xl text-[color:var(--text)]">{title}</h3>
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[color:var(--text)]">
            {tag}
          </span>
        ))}
      </div>
      {(hasGithub || hasLive || hasDemoVideo) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {hasGithub && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--text)] transition duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
              GitHub
            </a>
          )}
          {hasLive && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/15 px-4 py-2 text-sm font-medium text-[color:var(--text)] transition duration-300 hover:scale-[1.02] hover:border-[color:var(--accent-strong)]/50 hover:bg-[color:var(--accent)]/25">
              <FiGlobe /> Live Demo
            </a>
          )}
          {hasDemoVideo && (
            <a href={demoVideo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--text)] transition duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
              <FiPlay /> Watch Demo
            </a>
          )}
        </div>
      )}
    </motion.article>
  )
}
