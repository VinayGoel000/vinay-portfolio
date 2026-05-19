import { motion } from 'framer-motion'

export default function SkillCard({ icon: Icon, title, detail }) {
  return (
    <motion.article whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 240, damping: 22 }} className="rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)] p-6 shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[color:var(--accent)]">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 text-lg text-[color:var(--text)]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{detail}</p>
    </motion.article>
  )
}
