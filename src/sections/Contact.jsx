import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiLeetcode } from 'react-icons/si'
import SectionHeading from '../components/SectionHeading.jsx'

const contactItems = [
  { label: 'Email', href: 'mailto:work.vinaygoel@gmail.com', detail: 'work.vinaygoel@gmail.com', icon: HiOutlineMail },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vinay-goel-691960278', detail: 'linkedin.com/in/vinay-goel-691960278', icon: FaLinkedin },
  { label: 'LeetCode', href: 'https://leetcode.com/u/FvfnNjdyCP/', detail: 'leetcode.com/u/FvfnNjdyCP', icon: SiLeetcode },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Contact" subtitle="Clean contact layout with the same working links and form entry points." />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)] p-8 shadow-soft">
            <div className="grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left transition hover:border-[color:var(--accent)]/30">
                    <span className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-[color:var(--accent)]">
                        <Icon />
                      </span>
                      <span>
                        <span className="block text-[color:var(--text)]">{item.label}</span>
                        <span className="block text-sm text-[color:var(--muted)]">{item.detail}</span>
                      </span>
                    </span>
                    <span className="text-sm text-[color:var(--muted)]">Open</span>
                  </a>
                )
              })}
            </div>
          </motion.div>
          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)] p-8 shadow-soft">
            <div className="grid gap-4">
              <input type="text" placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
              <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
              <textarea rows="5" placeholder="Tell me about your project" className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]" />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 px-6 py-3 text-sm text-[color:var(--text)]">
              <FiSend /> Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
