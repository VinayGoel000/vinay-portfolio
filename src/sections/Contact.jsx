import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiLeetcode } from 'react-icons/si'
import SectionHeading from '../components/SectionHeading.jsx'

const contactItems = [
  {
    label: 'Email',
    href: 'mailto:work.vinaygoel@gmail.com',
    detail: 'work.vinaygoel@gmail.com',
    icon: HiOutlineMail,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/vinay-goel-691960278',
    detail: 'linkedin.com/in/vinay-goel-691960278',
    icon: FaLinkedin,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/FvfnNjdyCP/',
    detail: 'leetcode.com/u/FvfnNjdyCP',
    icon: SiLeetcode,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Contact" subtitle="Send a message or connect on social media." />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-sky-300/80">Professional contact</span>
            <h3 className="mt-4 text-3xl font-semibold text-white">Let’s discuss your next web application.</h3>
            <p className="mt-4 max-w-xl text-slate-300">
              Reach out for Java web development, full-stack project collaboration, or recruiter inquiries. I’m available for roles that value scalable, responsive applications.
            </p>

            <div className="mt-8 grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.01, y: -1 }}
                    className="group flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-slate-950/80 px-5 py-5 text-left transition hover:border-sky-400/40 hover:bg-slate-900/95 hover:text-sky-200"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900/90 text-sky-300 shadow-glow">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span>
                        <span className="block text-base font-semibold text-white">{item.label}</span>
                        <span className="block text-sm text-slate-400 break-all">{item.detail}</span>
                      </span>
                    </span>
                    <span className="text-sky-300/90 text-sm">Open</span>
                  </motion.a>
                )
              })}
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
