import { motion } from 'framer-motion'
import { FiAward, FiDownload, FiExternalLink, FiFileText, FiShield, FiStar, FiZap } from 'react-icons/fi'

const certificates = [
  {
    title: 'Introduction to Deep Learning',
    issuer: 'Springboard',
    issuedTo: 'Vinay Goel',
    completionDate: 'November 22, 2025',
    issuedLabel: 'Issued Nov 22, 2025',
    category: 'AI & Machine Learning',
    description:
      'Completed a foundational course in Deep Learning covering neural networks, machine learning concepts, and modern AI fundamentals.',
    skills: ['Deep Learning Basics', 'Neural Networks', 'Machine Learning Concepts', 'AI Fundamentals'],
    certificateUrl: '/certificates/introduction-to-deep-learning-certificate.pdf',
    verificationUrl: 'https://verify.onwingspan.com',
  },
]

const highlights = [
  { label: 'Recognition', value: 'Professional learning proof' },
  { label: 'Format', value: 'Downloadable PDF asset' },
  { label: 'Scalable', value: 'Ready for future certificates' },
]

function CertificateCard({ certificate, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-[1px] shadow-soft"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.25),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(232,201,122,0.16),transparent_28%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative rounded-[calc(2rem-1px)] border border-white/10 bg-[color:var(--surface-strong)] p-6 backdrop-blur-2xl md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--muted)]">
                <FiZap className="text-[color:var(--accent)]" />
                {certificate.category}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,201,122,0.22)] bg-[rgba(232,201,122,0.08)] px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
                <FiAward />
                {certificate.issuedLabel}
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-[color:var(--accent)] shadow-[0_0_32px_rgba(168,85,247,0.22)]">
                <FiFileText />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Certificate</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[color:var(--text)] md:text-4xl">
                  {certificate.title}
                </h2>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Issued by {certificate.issuer} for {certificate.issuedTo}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/10 p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">Overview</p>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)] md:text-[0.98rem]">
              {certificate.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-[color:var(--text)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(168,85,247,0.10),rgba(232,201,122,0.06))] p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">Certificate details</p>
            <dl className="mt-4 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                <dt className="text-[color:var(--muted)]">Issuing organization</dt>
                <dd className="text-right font-medium text-[color:var(--text)]">{certificate.issuer}</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                <dt className="text-[color:var(--muted)]">Issued to</dt>
                <dd className="text-right font-medium text-[color:var(--text)]">{certificate.issuedTo}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-[color:var(--muted)]">Completion date</dt>
                <dd className="text-right font-medium text-[color:var(--text)]">{certificate.completionDate}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={certificate.certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(168,85,247,0.35)] bg-[rgba(168,85,247,0.14)] px-5 py-3 text-sm font-medium text-[color:var(--text)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(168,85,247,0.18)]"
          >
            <FiExternalLink />
            View Certificate
          </a>
          <a
            href={certificate.certificateUrl}
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[color:var(--text)] transition-transform duration-300 hover:-translate-y-0.5 hover:border-[rgba(232,201,122,0.25)] hover:bg-[rgba(232,201,122,0.08)]"
          >
            <FiDownload />
            Download Certificate
          </a>
          <a
            href={certificate.verificationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(232,201,122,0.25)] bg-[rgba(232,201,122,0.08)] px-5 py-3 text-sm font-medium text-[color:var(--accent-strong)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(232,201,122,0.12)]"
          >
            <FiShield />
            Verify
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Certificates() {
  return (
    <div className="relative overflow-hidden px-6 py-10 md:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(232,201,122,0.14),_transparent_24%)]" />
      <div className="mx-auto max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(2,6,23,0.45)] backdrop-blur-2xl md:p-10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(168,85,247,0.08),transparent_35%,rgba(232,201,122,0.05))]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                <FiStar className="text-[color:var(--accent)]" />
                Certifications showcase
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[color:var(--text)] md:text-6xl">
                Learning milestones, presented like real achievements
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
                A curated space for verified learning proof, built to feel polished now and easy to expand later as more certificates are earned.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">{item.label}</p>
                    <p className="mt-2 text-sm font-medium text-[color:var(--text)]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-[color:var(--surface-strong)] p-6 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">How this scales</p>
              <div className="mt-5 space-y-3">
                {[
                  'Each certificate lives as a data object, so future entries only need a new record.',
                  'Buttons use the public assets path, which keeps Vercel deployment simple and reliable.',
                  'Card styling supports dark, light, and purple themes without changing the layout.',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-[color:var(--muted)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mt-8 grid gap-6">
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.title} certificate={certificate} index={index} />
          ))}
        </section>
      </div>
    </div>
  )
}
