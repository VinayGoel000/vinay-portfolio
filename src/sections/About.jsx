import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiLeetcode } from 'react-icons/si'
import SectionHeading from '../components/SectionHeading.jsx'
import ProfileImage from '../components/ProfileImage.jsx'
import vinayFull from '../assets/vinay-full.jpeg'

const socialLinks = [
  { name: 'Email', href: 'mailto:work.vinaygoel@gmail.com', icon: HiOutlineMail },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/vinay-goel-691960278', icon: FaLinkedin },
  { name: 'LeetCode', href: 'https://leetcode.com/u/FvfnNjdyCP/', icon: SiLeetcode },
]

const linkProps = (href) => (href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }}>
          <ProfileImage src={vinayFull} alt="Vinay" variant="rounded" animate delay={0.1} glowColor="blue" />
        </motion.div>

        <div>
          <SectionHeading title="About" subtitle="B.Tech Computer Science student building reliable full-stack web applications." />
          <div className="mt-8 space-y-4 rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)] p-8 text-[color:var(--muted)] shadow-soft">
            <p>I am a B.Tech Computer Science student (2022-2026) with a strong focus on Java, React, Spring Boot, and SQL.</p>
            <p>I enjoy building scalable web applications that are clean to use, easy to maintain, and thoughtful in their details.</p>
            <p>My approach is quality-focused: I keep learning, complete what I start, and stay committed to shipping work that is dependable.</p>
            <div className="pt-2">
              <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">Find me online</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <a key={item.name} href={item.href} {...linkProps(item.href)} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--text)] transition hover:border-[color:var(--accent)]/30 hover:bg-[color:var(--accent)]/10">
                      <Icon className="h-4 w-4 text-[color:var(--accent)]" />
                      {item.name}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
