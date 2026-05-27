import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiLock, FiShield, FiStar, FiZap } from 'react-icons/fi'

const learningAreas = [
  'Java',
  'Spring Boot',
  'React',
  'Full Stack Development',
  'Backend Systems',
  'Modern Web Technologies',
]

const milestoneCards = [
  {
    title: 'Future Certifications',
    icon: FiShield,
    text: 'Planned certifications and vendor credentials will appear here as the roadmap grows.',
  },
  {
    title: 'Technical Achievements',
    icon: FiStar,
    text: 'This area will capture notable wins, badges, and proof of applied engineering growth.',
  },
  {
    title: 'Learning Milestones',
    icon: FiZap,
    text: 'Track major milestones like course completions, labs, and hands-on build outcomes.',
  },
]

const placeholderCertificates = [1, 2, 3]

function disabledAction(label) {
  return (
    <button
      type="button"
      disabled
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[color:var(--muted)] opacity-60"
    >
      {label}
      <span className="text-xs uppercase tracking-[0.22em]">Coming Soon</span>
    </button>
  )
}

export default function Certificates() {
  return (
    <div className="relative overflow-hidden px-6 py-10 md:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_24%)]" />
      <div className="mx-auto max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(2,6,23,0.45)] backdrop-blur-2xl md:p-10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(168,85,247,0.08),transparent_35%,rgba(59,130,246,0.08))]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.95fr] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                <FiLock />
                Credentials in progress
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[color:var(--text)] md:text-6xl">
                Certifications & Learning Journey
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
                I am actively building depth across Java, Spring Boot, React, Full Stack Development, Backend Systems, and Modern Web Technologies.
                This space is designed for future certifications, technical achievements, and the milestones that shape a recruiter-friendly engineering profile.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {disabledAction('View Certificate')}
                {disabledAction('Download Certificate')}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)] p-6 shadow-soft backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">Current focus</p>
              <div className="mt-5 grid gap-3">
                {learningAreas.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm text-[color:var(--text)]">{item}</span>
                    <span className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:rgba(168,85,247,0.22)] bg-[linear-gradient(135deg,rgba(168,85,247,0.14),rgba(59,130,246,0.10))] p-4 text-sm leading-7 text-[color:var(--muted)]">
                Premium certificate cards will be added here later with proof links, issuer details, and downloadable assets.
              </div>
            </motion.div>
          </div>
        </motion.section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {placeholderCertificates.map((card, index) => (
            <motion.article
              key={card}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 * index }}
              className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Placeholder {index + 1}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-[color:var(--text)]">
                    Certificate Title Coming Soon
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[color:var(--accent)]">
                  <FiArrowRight />
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                This card is ready for a certificate image, issuer name, completion date, and a short summary of the learning outcome.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {disabledAction('View Certificate')}
                {disabledAction('Download Certificate')}
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-white/15 bg-black/20 p-4">
                <div className="flex items-center gap-3 text-sm text-[color:var(--muted)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[color:var(--accent)]">
                    <FiLock />
                  </div>
                  <div>
                    <p className="font-medium text-[color:var(--text)]">Asset slot reserved</p>
                    <p className="text-xs uppercase tracking-[0.22em]">Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          {milestoneCards.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)] p-6 shadow-soft backdrop-blur-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[color:var(--accent)]">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[color:var(--text)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p>
              </motion.div>
            )
          })}
        </section>
      </div>
    </div>
  )
}
