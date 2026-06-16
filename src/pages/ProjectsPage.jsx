import { motion } from 'framer-motion'
import { FiGlobe, FiPlay } from 'react-icons/fi'

const projects = [
  {
    title: 'College Discovery Platform',
    description:
      'A platform that helps students discover colleges, explore opportunities, and access educational information through a clean and responsive interface.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    live: 'https://college-discovery-platform-94m8.vercel.app/',
    demoVideo: 'https://youtu.be/1YmuW9RZg1g',
  },
  {
    title: 'TalentDash',
    description:
      'A talent discovery and management platform designed to connect opportunities with skilled individuals through a modern web experience.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    live: 'https://talent-dash-seven.vercel.app/',
    demoVideo: 'https://youtu.be/AZFWvi6Iqdk',
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10, scale: 1.01 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[color:var(--surface)] shadow-soft backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/12 via-transparent to-cyan-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[color:var(--accent)]/15 blur-3xl transition duration-500 group-hover:bg-[color:var(--accent)]/25" />

      <div className="relative p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 px-3 py-1 text-xs font-medium text-[color:var(--text)]">
            Featured Project
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Live
          </span>
        </div>

        <div className="mt-5 space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Full Stack Web Application</p>
          <div>
            <h3 className="font-serif text-4xl text-[color:var(--text)] sm:text-5xl">{project.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">{project.description}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_40px_rgba(168,85,247,0.08)]">
            <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Technology Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-xs text-[color:var(--text)]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5">
            <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Project Focus</p>
            <p className="mt-3 text-sm leading-7 text-[color:var(--text)]">
              A recruiter-friendly showcase for a modern full-stack application with a polished interface, strong responsiveness, and a clear product story.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/15 px-5 py-3 text-sm font-medium text-[color:var(--text)] transition duration-300 hover:scale-[1.02] hover:border-[color:var(--accent-strong)]/50 hover:bg-[color:var(--accent)]/25"
          >
            <FiGlobe /> Live Demo
          </a>
          <a
            href={project.demoVideo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-[color:var(--text)] transition duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
          >
            <FiPlay /> Watch Demo
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden px-6 py-10 md:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(232,201,122,0.14),_transparent_24%)]" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Portfolio</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--text)] md:text-6xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
            A curated selection of featured work showcasing modern full-stack development.
          </p>
        </motion.div>

        <section className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </section>
      </div>
    </div>
  )
}
