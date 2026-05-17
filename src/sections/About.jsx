import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import ProfileImage from '../components/ProfileImage.jsx'
import vinayFull from '../assets/vinay-full.jpeg'

const timeline = [
  { year: '2024', title: 'Senior Frontend Developer', detail: 'Designed scalable web platforms with React, animation, and polished UI systems.' },
  { year: '2023', title: 'UI Motion Specialist', detail: 'Led motion-led design systems for enterprise and startup product launches.' },
  { year: '2021', title: 'Computer Science Graduate', detail: 'Graduated with Honors, focusing on interactive systems and full-stack development.' },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="About" subtitle="Developer story and growth trajectory." />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image on left side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <ProfileImage
              src={vinayFull}
              alt="Vinay - Award winning developer"
              variant="rounded"
              animate={true}
              delay={0.2}
              glowColor="blue"
            />
          </motion.div>

          {/* Content on right side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-white">Hello, I'm Vinay.</h3>
              <p className="mt-5 text-base leading-8 text-slate-300">
                I craft premium digital experiences using modern frontend tooling, motion design, and clean component architecture. My work blends performance, brand presence, and intuitive navigation for a refined developer portfolio feel.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300/70">Education</p>
                  <p className="mt-3 text-base text-slate-200">B.Tech in Computer Science with a focus on UX development and distributed systems.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300/70">Goal</p>
                  <p className="mt-3 text-base text-slate-200">To build immersive digital products with vibrant motion, premium design, and fast user experience.</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-4 border border-white/5"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">{item.year}</span>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
