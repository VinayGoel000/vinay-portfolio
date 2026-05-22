import { motion } from 'framer-motion'
import { FiDownload, FiExternalLink, FiPlayCircle } from 'react-icons/fi'
import { FaWindows } from 'react-icons/fa'

export default function ApplicationCard({ name, description, version, features, downloadLink, screenshot, releaseLink, videoUrl }) {
  const youtubeEmbedUrl = videoUrl ? `${videoUrl.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/')}` : ''

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 210, damping: 24 }}
      className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)] shadow-soft backdrop-blur-xl"
    >
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border-b border-white/10 p-5 sm:p-6 lg:border-b-0 lg:border-r">
          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 shadow-soft">
              <div className="relative">
                <img src={screenshot} alt={`${name} screenshot`} className="aspect-[16/10] w-full object-cover" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/40 px-3 py-2 text-xs text-white backdrop-blur-md">
                  <FaWindows /> Windows build
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-md">
                  v{version}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={downloadLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm text-[color:var(--text)] transition duration-300 hover:scale-[1.02] hover:border-cyan-300/40 hover:bg-cyan-400/20"
              >
                <FiDownload /> Download EXE
              </a>
              <a
                href={releaseLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-[color:var(--text)] transition duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
              >
                <FiExternalLink /> GitHub Release
              </a>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="space-y-5">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Application Preview</p>
              <h3 className="font-serif text-3xl text-[color:var(--text)] sm:text-4xl">{name}</h3>
              <p className="max-w-2xl text-sm leading-7 text-[color:var(--muted)]">{description}</p>
            </div>

            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                className="group overflow-hidden rounded-[1.5rem] border border-cyan-400/20 bg-gradient-to-br from-white/[0.08] via-white/5 to-cyan-500/10 p-[1px] shadow-[0_0_40px_rgba(59,130,246,0.12)] transition duration-300 hover:border-cyan-300/40 hover:shadow-[0_0_55px_rgba(59,130,246,0.2)]"
            >
              <div className="overflow-hidden rounded-[1.45rem] bg-[rgba(10,12,20,0.78)] backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Live Demo</p>
                    <p className="mt-1 text-sm text-[color:var(--text)]">Watch Team Iron Champ in action</p>
                  </div>
                  <FiPlayCircle className="text-2xl text-cyan-300" />
                </div>
                <div className="relative aspect-video w-full overflow-hidden">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={youtubeEmbedUrl}
                    title={`${name} demo video`}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--text)] backdrop-blur-md">
                  {feature}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-[color:var(--muted)]">
              Download the desktop release, preview the workflow in the demo, and explore the application as a recruiter-friendly software showcase.
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
