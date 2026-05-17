import { motion } from 'framer-motion'

export default function SkillCard({ icon: Icon, title, detail }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="glass-card overflow-hidden p-6"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/70 text-sky-200 shadow-lg shadow-sky-500/10">
        <Icon size={28} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
    </motion.article>
  )
}
