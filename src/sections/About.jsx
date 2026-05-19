import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import ProfileImage from '../components/ProfileImage.jsx'
import vinayFull from '../assets/vinay-full.jpeg'

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
          </div>
        </div>
      </div>
    </section>
  )
}
