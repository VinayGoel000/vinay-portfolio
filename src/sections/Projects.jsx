import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

const projects = [
  {
    title: 'Nebula Dashboard',
    description: 'A premium analytics dashboard with interactive charts, dark glassmorphism, and motion-led UI.',
    tags: ['React', 'Tailwind', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Launchpad App',
    description: 'A landing page system for digital products, crafted with fast page load and polished interactions.',
    tags: ['Vite', 'Framer Motion', 'React'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Portfolio Experience',
    description: 'An immersive portfolio experience with animated sections, glowing visuals and mobile-first structure.',
    tags: ['Tailwind', 'React', 'UI'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Projects" subtitle="Selected work with polished visuals." />
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
