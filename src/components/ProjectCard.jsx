import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, tags, github, live }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="glass-card group overflow-hidden"
    >
      <div className="relative overflow-hidden rounded-[28px] bg-slate-900/80 p-5">
        <div className="mb-5 flex h-52 items-end justify-between rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-5 shadow-inner shadow-slate-950/30">
          <div>
            <span className="text-sm uppercase tracking-[0.32em] text-sky-300/70">Featured</span>
            <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800/80 text-sky-200 shadow-lg shadow-sky-500/10">
            <span className="text-2xl">{title.charAt(0)}</span>
          </div>
        </div>

        <p className="text-sm leading-6 text-slate-300">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs text-slate-200">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/90 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-400/50 hover:text-sky-200"
          >
            GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/90 px-4 py-2 text-sm text-slate-100 transition hover:border-violet-400/50 hover:text-violet-200"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  )
}
