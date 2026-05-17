import { motion } from 'framer-motion'
import { FiDownload, FiExternalLink } from 'react-icons/fi'
import { FaWindows } from 'react-icons/fa'

export default function ApplicationCard({ name, description, version, features, downloadLink, screenshot }) {
  return (
    <motion.article
      whileHover={{ y: -12 }}
      transition={{ type: 'spring', stiffness: 210, damping: 24 }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/40 shadow-soft"
    >
      <div className="relative overflow-hidden rounded-[32px] bg-slate-900/75 p-6 backdrop-blur-xl sm:p-8 lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-8">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-700/70 bg-slate-950/80 p-4 shadow-inner shadow-slate-950/40">
          <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-slate-950/90 px-3 py-1 text-xs uppercase tracking-[0.24em] text-sky-200 shadow-glow">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.45)]" />
            Latest Release
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
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-3xl border border-white/10 bg-slate-950/50 p-4 backdrop-blur-xl text-slate-100 shadow-soft">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-sky-200/80">Windows preview</p>
                  <p className="mt-1 text-sm text-slate-200">Futuristic dashboard experience with polished glassmorphism.</p>
                </div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-sky-100/80">
                  <FaWindows className="h-4 w-4 text-sky-300" />
                  Windows ready
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative flex flex-col justify-between gap-7">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-sky-300/75">Premium Software Showcase</p>
                <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{name}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-slate-200 shadow-glow">
                  v{version}
                </span>
                <span className="rounded-3xl border border-sky-400/20 bg-sky-500/10 px-4 py-3 text-sm text-sky-200 shadow-[0_0_18px_rgba(56,189,248,0.18)]">
                  Public GitHub Release
                </span>
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {description}
            </p>

            <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
              <h4 className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200/90">Product Highlights</h4>
              <ul className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400/90" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.25fr_1fr]">
            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5 shadow-soft">
              <p className="text-xs uppercase tracking-[0.28em] text-sky-300/75">Download statistics</p>
              <div className="mt-4 flex items-end gap-3">
                <p className="text-3xl font-semibold text-white">2.4K+</p>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">downloads</span>
              </div>
              <p className="mt-3 text-sm text-slate-400">Latest release traction from GitHub public distribution.</p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5 shadow-soft">
              <p className="text-xs uppercase tracking-[0.28em] text-sky-300/75">Platform</p>
              <p className="mt-4 text-2xl font-semibold text-white">Windows</p>
              <p className="mt-3 text-sm text-slate-400">Designed for desktop automation, operational control, and fast workflows.</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-sky-500/15 px-6 py-3 text-sm font-semibold text-sky-100 transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-500/20 hover:text-sky-200"
              >
                <FiDownload size={18} />
                Download for Windows
              </a>
              <a
                href="https://github.com/VinayGoel000/team-iron-champ-releases/releases/tag/v1.8.0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:border-sky-400/40 hover:bg-slate-900/95 hover:text-sky-100"
              >
                <FiExternalLink size={18} />
                Open GitHub Release
              </a>
            </div>

            <p className="text-xs text-slate-400">
              Install the latest public release safely from the official GitHub distribution.
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
