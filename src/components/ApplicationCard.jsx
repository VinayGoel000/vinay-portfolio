import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

export default function ApplicationCard({ name, description, version, features, downloadLink, screenshot }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/40 shadow-soft"
    >
      <div className="relative overflow-hidden rounded-[32px] bg-slate-900/75 p-6 backdrop-blur-xl sm:p-8 lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-8">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-700/70 bg-slate-950/80 p-4 shadow-inner shadow-slate-950/40">
          <div className="absolute left-4 top-4 z-10 inline-flex rounded-full border border-sky-400/20 bg-slate-950/90 px-3 py-1 text-xs uppercase tracking-[0.24em] text-sky-200 shadow-glow">
            Windows Desktop App
          </div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70"
          >
            <img
              src={screenshot}
              alt={`${name} preview screenshot`}
              className="h-full w-full min-h-[320px] object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-slate-100/5" />
          </motion.div>
        </div>

        <div className="relative flex flex-col justify-between gap-7">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-sky-300/75">Premium Application</p>
                <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{name}</h3>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-slate-200 shadow-glow">
                Version {version}
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {description}
            </p>

            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
              <h4 className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200/90">Key features</h4>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400/90" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={downloadLink}
              target="_blank"
              rel="noreferrer"
              className="glow-button group inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-sky-500/15 px-6 py-3 text-sm font-semibold text-sky-100 transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-500/20 hover:text-sky-200"
            >
              <FiDownload size={18} className="transition duration-300 group-hover:translate-x-1" />
              Download for Windows
            </a>
            <p className="text-xs text-slate-400">Placeholder release link ready for GitHub Releases.</p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
