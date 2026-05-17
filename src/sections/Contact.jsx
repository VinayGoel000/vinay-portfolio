import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'

const socials = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Contact" subtitle="Send a message or connect on social media." />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-semibold text-white">Let’s build something premium.</h3>
            <p className="mt-4 text-slate-300">
              Share your idea or project brief and I’ll respond with a clean, modern solution aligned with your brand.
            </p>
            <div className="mt-8 space-y-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-base text-slate-100 transition hover:border-sky-400/40 hover:text-sky-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8"
          >
            <div className="grid gap-5">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-3 text-slate-100 outline-none transition focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-3 text-slate-100 outline-none transition focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Message</span>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project"
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-3 text-slate-100 outline-none transition focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              <FiSend className="mr-2" /> Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
