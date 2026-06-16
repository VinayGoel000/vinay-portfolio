import { motion } from 'framer-motion'
import { FiArrowRight, FiGlobe } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'

const previewProjects = [
  {
    title: 'College Discovery Platform',
    description: 'A platform that helps students discover colleges, explore opportunities, and access educational information through a clean and responsive interface.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    live: 'https://college-discovery-platform-94m8.vercel.app/',
  },
  {
    title: 'TalentDash',
    description: 'A talent discovery and management platform designed to connect opportunities with skilled individuals through a modern web experience.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    live: 'https://talent-dash-seven.vercel.app/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Projects" subtitle="A preview of selected work. Visit the projects page for the full showcase." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {previewProjects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)] p-6 shadow-soft backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/10 via-transparent to-cyan-400/8 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Featured Project</p>
                <h3 className="mt-3 font-serif text-3xl text-[color:var(--text)]">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[color:var(--text)]">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/15 px-5 py-3 text-sm font-medium text-[color:var(--text)] transition duration-300 hover:scale-[1.02] hover:border-[color:var(--accent-strong)]/50 hover:bg-[color:var(--accent)]/25"
                  >
                    <FiGlobe /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-[color:var(--text)] transition hover:border-[color:var(--accent)]/30 hover:bg-white/10"
          >
            View All Projects <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
