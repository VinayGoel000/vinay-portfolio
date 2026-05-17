import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

export default function ApplicationCard({ name, description, version, features, downloadLink }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/40 shadow-soft"
    >
      <div className="relative overflow-hidden rounded-[32px] bg-slate-900/75 p-8 backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-sky-500/15 via-violet-500/10 to-purple-500/15 blur-3xl" />
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
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

            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-sky-500/10">
              <div className="relative overflow-hidden rounded-[24px] border border-white/5 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-5 shadow-inner shadow-slate-950/30">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-violet-500 to-purple-400" />
                <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
                  <span>Screenshot</span>
                  <span className="rounded-full bg-slate-800/80 px-3 py-1 text-slate-400">Windows</span>
                </div>
                <div className="flex h-56 items-center justify-center rounded-3xl border border-white/10 bg-slate-950/70 text-slate-500">
                  <span className="text-sm text-slate-400">App screenshot placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
