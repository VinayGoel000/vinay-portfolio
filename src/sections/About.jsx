import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import ProfileImage from '../components/ProfileImage.jsx'
import vinayFull from '../assets/vinay-full.jpeg'

const timeline = [
  { year: '2022', title: 'Started B.Tech in Computer Science', detail: 'Began a focused journey in software engineering, algorithms, and web systems.' },
  { year: '2023', title: 'Learning Java and problem solving', detail: 'Built strong foundations in Java, data structures, and practical development workflows.' },
  { year: '2024', title: 'Built full-stack projects', detail: 'Delivered applications with Spring Boot, SQL, and React to solve real user needs.' },
  { year: '2025', title: 'Focused on scalable applications', detail: 'Refined backend architecture, responsive UI, and reliable modern frontend experiences.' },
  { year: '2026', title: 'Preparing for software development roles', detail: 'Ready to contribute to professional web development teams with a clean engineering mindset.' },
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
                I am a Java Web Developer with a B.Tech in Computer Science (2022–2026), building scalable applications that balance backend logic and responsive frontend design.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-300">
                My work focuses on clean UI, strong backend architecture, responsive React interfaces, and practical full-stack solutions using Java, Spring Boot, SQL, and React.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300/70">Education</p>
                  <p className="mt-3 text-base text-slate-200">B.Tech in Computer Science, completed in 2026 with a strong foundation in full-stack development.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300/70">Focus</p>
                  <p className="mt-3 text-base text-slate-200">Developing scalable web applications with clean UI, backend services, and responsive frontend experiences.</p>
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
