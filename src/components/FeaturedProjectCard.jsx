import { motion } from 'framer-motion'
import { FiArrowUpRight, FiClock, FiGlobe } from 'react-icons/fi'

export default function FeaturedProjectCard({ project, onLearnMore }) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[color:var(--surface)] shadow-soft backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/12 via-transparent to-cyan-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[color:var(--accent)]/15 blur-3xl transition duration-500 group-hover:bg-[color:var(--accent)]/25" />

      <div className="relative grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 px-3 py-1 text-xs font-medium text-[color:var(--text)]">
              Featured Project
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <FiClock /> Live
            </span>
          </div>

          <div className="mt-5 space-y-4">
            <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">{project.category}</p>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-4xl text-[color:var(--text)] sm:text-5xl">{project.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">{project.description}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[color:var(--text)]">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/15 px-5 py-3 text-sm font-medium text-[color:var(--text)] transition duration-300 hover:scale-[1.02] hover:border-[color:var(--accent-strong)]/50 hover:bg-[color:var(--accent)]/25"
            >
              <FiGlobe /> Live Demo
            </a>
            <button
              type="button"
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[color:var(--text)] transition duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
            >
              Learn More <FiArrowUpRight />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_40px_rgba(168,85,247,0.08)]">
              <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Technology Stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-xs text-[color:var(--text)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5">
              <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Project Focus</p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text)]">
                A recruiter-friendly showcase for a modern full-stack application with a polished interface, strong responsiveness, and a clear product story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
