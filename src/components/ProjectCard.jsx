import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, tags, github, live }) {
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
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--text)]">
          GitHub
        </a>
        <a href={live} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--text)]">
          Live Demo
        </a>
      </div>
    </motion.article>
  )
}
