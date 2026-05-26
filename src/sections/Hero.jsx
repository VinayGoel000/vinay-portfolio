import { motion } from 'framer-motion'
import { FiDownload, FiEye } from 'react-icons/fi'
import ActionButton from '../components/ActionButton.jsx'
import ProfileImage from '../components/ProfileImage.jsx'
import vinayFront from '../assets/vinay-front.jpeg'

const resumeUrl = '/resume/VinayGoelResume.pdf'

export default function Hero() {
  return (
    <section id="home" className="px-6 pb-12 pt-10 sm:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[color:var(--accent)]">Vinay Goel</p>
          <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">Full-Stack Developer</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-[color:var(--text)] sm:text-6xl lg:text-7xl">
            I build things that ship and scale.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            Java web developer focused on React frontend development, Spring Boot, and SQL-backed applications. I love learning new technologies, finishing what I start, and building scalable products with premium quality.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionButton href="#contact" className="border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 text-[color:var(--text)]">
              Let&apos;s work together
            </ActionButton>
            <ActionButton href="#projects" icon={FiEye} className="text-[color:var(--text)]">
              See my work
            </ActionButton>
            <ActionButton href={resumeUrl} icon={FiDownload} download className="text-[color:var(--text)]">
              View Resume
            </ActionButton>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative mx-auto w-full max-w-xl">
          <ProfileImage src={vinayFront} alt="Vinay profile" variant="circular" animate delay={0.1} glowColor="combined" className="mx-auto" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[color:var(--surface)] p-5">
              <p className="text-sm text-[color:var(--muted)]">Built for recruiters</p>
              <p className="mt-2 text-lg text-[color:var(--text)]">Clean, scalable, and easy to scan.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[color:var(--surface)] p-5">
              <p className="text-sm text-[color:var(--muted)]">Current focus</p>
              <p className="mt-2 text-lg text-[color:var(--text)]">Java + React + Spring Boot.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
